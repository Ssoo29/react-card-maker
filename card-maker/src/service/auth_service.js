import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";

class AuthService {
  constructor() {
    this.firbaseAuth = getAuth();
    this.googleProvider = new GoogleAuthProvider();
    this.githubProvider = new GithubAuthProvider();
  }

  login(providerName) {
    const authProvider = this.getProvider(providerName);
    return signInWithPopup(this.firbaseAuth, authProvider);
  }

  logout() {
    this.firbaseAuth.signOut();
  }

  onAuthChange(onUserChanged) {
    this.firbaseAuth.onAuthStateChanged(user => {
      onUserChanged(user);
    })
  }

  getProvider(providerName) {
    switch (providerName) {
      case "Google":
        return this.googleProvider;
      case "Github":
        return this.githubProvider;
      default:
        throw new Error("not supported provider");
    }
  }
}

export default AuthService;
