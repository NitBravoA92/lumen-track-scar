interface LoginData {
  username: String;
  password: String;
}
// This object should be part of the Global state of the App
export const AuthProvider = {
  async login(credentials: LoginData) {

    // this is an example code... replace this code with your own Authentication logic
    const request = new Request('https://app.domain.com/authenticate', {
      method: 'POST',
      body: JSON.stringify({ credentials }),
      headers: new Headers({ 'Content-Type': 'application/json' }),
    });
    let response;
    try {
      response = await fetch(request);
    } catch (_error) {
      throw new Error('Network error');
    }
    if (response.status < 200 || response.status >= 300) {
      throw new Error(response.statusText);
    }
    const auth = await response.json();
    localStorage.setItem('auth', JSON.stringify(auth));

    return { redirectTo: 'define-custom-route' };
  },
  async logout() {/* ... */ },
  async checkError(error) {/* ... */ },
  async checkAuth(params) {/* ... */ },
  async canAccess(params) {/* ... */ }, // for authorization only
  async getPermissions() {/* ... */ }, // for authorization only
  // optional methods
  async getAuthUser() {/* ... */ },
};