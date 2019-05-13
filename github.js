class GitHub {
  constructor() {
    this.client_id = '50dbc3f5645a15c92d9a';
    this.client_secret = '6c6f995f3552738064b2b36db288dad255c5dd61';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profileData = await profileResponse.json();

    return {
      profile: profileData
    }
  }
}