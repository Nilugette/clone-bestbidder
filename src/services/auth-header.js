export default function authHeader() {
    const user = JSON.parse(localStorage.getItem('user'));
  
    if (user && user.ref) {
      return { Authorization: 'Bearer ' + user.jwt };
    } else if (user && user.ref) {
      return { Authorization: 'Bearer ' + user.ref };
    } else {
      return {}
    }
  }