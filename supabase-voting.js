// Supabase Voting Integration
// Connection: postgresql://postgres.hdhcsifwgvzskqwqebgc:gasboros321@!@aws-1-ap-southeast-1.pooler.supabase.com:5432/postgres

const SUPABASE_URL = 'https://hdhcsifwgvzskqwqebgc.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhkaGNzaWZ3Z3Z6c2txd3FlYmdjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzgwNDQ3NTcsImV4cCI6MjA1MzYyMDc1N30.placeholder';

// Note: Replace SUPABASE_ANON_KEY with actual anon key from Supabase dashboard

class VotingSystem {
    constructor() {
        this.userIP = null;
        this.voteCounts = { boros: 0, tidak: 0 };
        this.userVoted = false;
        this.init();
    }

    async init() {
        await this.getUserIP();
        await this.loadVoteCounts();
        await this.checkUserVoteStatus();
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
        try {
            const response = await fetch(`${SUPABASE_URL}/rest/v1/gas_votes?select=vote`, {
                headers: {
                    'apikey': SUPABASE_ANON_KEY,
                    'Authorization': `Bearer ${SUPABASE_ANON_KEY}`
                }
            });

            if (response.ok) {
                const votes = await response.json();
                this.voteCounts = { boros: 0, tidak: 0 };
                votes.forEach(v => {
                    if (v.vote === 'boros') this.voteCounts.boros++;
                    if (v.vote === 'tidak') this.voteCounts.tidak++;
                });
                this.updateVoteUI();
            }
        } catch (error) {
            console.log('Could not load vote counts:', error);
        }
    }

    async checkUserVoteStatus() {
        if (!this.userIP) return;

        try {
            const response = await fetch(
                `${SUPABASE_URL}/rest/v1/gas_votes?ip_address=eq.${this.userIP}&select=id`, {
                headers: {
                    'apikey': SUPABASE_ANON_KEY,
                    'Authorization': `Bearer ${SUPABASE_ANON_KEY}`
                }
            });

            if (response.ok) {
                const votes = await response.json();
                if (votes.length >= 2) {
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
            this.showMessage('Anda sudah voting 2 kali!', 'warning');
            return;
        }

        try {
            const response = await fetch(`${SUPABASE_URL}/rest/v1/gas_votes`, {
                method: 'POST',
                headers: {
                    'apikey': SUPABASE_ANON_KEY,
                    'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
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
            console.log('Vote error:', error);
            // Fallback to local-only voting for demo
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
