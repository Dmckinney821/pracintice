

class Github {
    constructor() {
        this.client_id = '626aaa8430ab5b6fc827';
        this.client_secret = '9c6711ac2fdec4fecc33b19eca9027594444bcb7';
        this.repos_count = 5;
        this.repos_sort = 'created: asc'
    }

    
  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      profile,
      repos
    }
  }
}