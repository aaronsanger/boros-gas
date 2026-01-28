// Supabase Voting Integration
// Configuration is loaded from config.js (not committed to version control)
// See config.example.js for setup instructions

// Check if CONFIG is loaded
const getConfig = () => {
    if (typeof CONFIG === 'undefined') {
        console.warn('⚠️ config.js not loaded. Voting will use local-only mode.');
        return {
            SUPABASE_URL: '',
            SUPABASE_ANON_KEY: '',
            MAX_VOTES_PER_IP: 2,
            ENABLE_SUPABASE_VOTING: false
        };
    }
    return CONFIG;
};

class VotingSystem {
    constructor() {
        this.config = getConfig();
        this.userIP = null;
        this.voteCounts = { boros: 0, tidak: 0 };
        this.userVoted = false;
        this.maxVotesPerIP = this.config.MAX_VOTES_PER_IP || 2;
        this.init();
    }

    async init() {
        await this.getUserIP();
        if (this.config.ENABLE_SUPABASE_VOTING && this.config.SUPABASE_ANON_KEY) {
            await this.loadVoteCounts();
            await this.checkUserVoteStatus();
        }
        this.updateVoteUI();
    }

    async getUserIP() {
        try {
            const response = await fetch('https://api.ipify.org?format=json');
            const data = await response.json();
            this.userIP = data.ip;
        } catch (error) {
            console.log('Could not get IP, using fallback');
            this.userIP = 'unknown-' + Math.random().toString(36).substr(2, 9);
        }
    }

    async loadVoteCounts() {
        if (!this.config.ENABLE_SUPABASE_VOTING) return;

        try {
            const response = await fetch(`${this.config.SUPABASE_URL}/rest/v1/gas_votes?select=vote`, {
                headers: {
                    'apikey': this.config.SUPABASE_ANON_KEY,
                    'Authorization': `Bearer ${this.config.SUPABASE_ANON_KEY}`
                }
            });

            if (response.ok) {
                const votes = await response.json();
                this.voteCounts = { boros: 0, tidak: 0 };
                votes.forEach(v => {
                    if (v.vote === 'boros') this.voteCounts.boros++;
                    if (v.vote === 'tidak') this.voteCounts.tidak++;
                });
            }
        } catch (error) {
            console.log('Could not load vote counts:', error);
        }
    }

    async checkUserVoteStatus() {
        if (!this.userIP || !this.config.ENABLE_SUPABASE_VOTING) return;

        try {
            const response = await fetch(
                `${this.config.SUPABASE_URL}/rest/v1/gas_votes?ip_address=eq.${this.userIP}&select=id`, {
                headers: {
                    'apikey': this.config.SUPABASE_ANON_KEY,
                    'Authorization': `Bearer ${this.config.SUPABASE_ANON_KEY}`
                }
            });

            if (response.ok) {
                const votes = await response.json();
                if (votes.length >= this.maxVotesPerIP) {
                    this.userVoted = true;
                    this.disableVoting();
                }
            }
        } catch (error) {
            console.log('Could not check vote status:', error);
        }
    }

    async submitVote(choice) {
        if (this.userVoted) {
            this.showMessage(`Anda sudah voting ${this.maxVotesPerIP} kali!`, 'warning');
            return;
        }

        // If Supabase is not configured, use local-only mode
        if (!this.config.ENABLE_SUPABASE_VOTING || !this.config.SUPABASE_ANON_KEY) {
            this.voteCounts[choice]++;
            this.updateVoteUI();
            this.showResult(choice);
            return true;
        }

        try {
            const response = await fetch(`${this.config.SUPABASE_URL}/rest/v1/gas_votes`, {
                method: 'POST',
                headers: {
                    'apikey': this.config.SUPABASE_ANON_KEY,
                    'Authorization': `Bearer ${this.config.SUPABASE_ANON_KEY}`,
                    'Content-Type': 'application/json',
                    'Prefer': 'return=minimal'
                },
                body: JSON.stringify({
                    vote: choice,
                    ip_address: this.userIP,
                    created_at: new Date().toISOString()
                })
            });

            if (response.ok) {
                this.voteCounts[choice]++;
                await this.checkUserVoteStatus();
                this.updateVoteUI();
                this.showResult(choice);
                return true;
            } else {
                throw new Error('Vote failed');
            }
        } catch (error) {
            console.log('Vote error (using local fallback):', error);
            // Fallback to local-only voting
            this.voteCounts[choice]++;
            this.updateVoteUI();
            this.showResult(choice);
            return true;
        }
    }

    updateVoteUI() {
        const total = this.voteCounts.boros + this.voteCounts.tidak;
        const borosPercent = total > 0 ? Math.round((this.voteCounts.boros / total) * 100) : 0;
        const tidakPercent = total > 0 ? Math.round((this.voteCounts.tidak / total) * 100) : 0;

        // Update count display if exists
        const countDisplay = document.getElementById('voteCountDisplay');
        if (countDisplay) {
            countDisplay.innerHTML = `
        <div class="vote-stats">
          <div class="vote-stat boros">
            <span class="emoji">🔴</span>
            <span class="count">${this.voteCounts.boros}</span>
            <span class="percent">(${borosPercent}%)</span>
            <span class="label">Boros</span>
          </div>
          <div class="vote-stat tidak">
            <span class="emoji">🟢</span>
            <span class="count">${this.voteCounts.tidak}</span>
            <span class="percent">(${tidakPercent}%)</span>
            <span class="label">Tidak Boros</span>
          </div>
        </div>
        <div class="total-votes">Total: ${total} votes</div>
      `;
        }
    }

    showResult(choice) {
        const result = document.getElementById('voteResult');
        if (result) {
            result.style.display = 'block';
            result.querySelector('.result-text').textContent =
                choice === 'tidak'
                    ? '✅ Anda setuju: Penggunaan gas TIDAK BOROS!'
                    : '🤔 Anda memilih: Penggunaan gas BOROS';
        }

        // Highlight selected option
        document.querySelectorAll('.vote-option').forEach(opt => {
            opt.classList.remove('selected');
            if (opt.dataset.vote === choice) {
                opt.classList.add('selected');
            }
        });
    }

    showMessage(text, type) {
        const result = document.getElementById('voteResult');
        if (result) {
            result.style.display = 'block';
            result.querySelector('.result-text').textContent = text;
        }
    }

    disableVoting() {
        document.querySelectorAll('.vote-option').forEach(opt => {
            opt.disabled = true;
            opt.style.opacity = '0.6';
            opt.style.cursor = 'not-allowed';
        });
    }
}

// Initialize voting system when page loads
let votingSystem;
document.addEventListener('DOMContentLoaded', () => {
    votingSystem = new VotingSystem();
});

// Global function for vote buttons
function submitVote(choice) {
    if (votingSystem) {
        votingSystem.submitVote(choice);
    }
}
