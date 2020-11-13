export default function getUserData() {
    return fetch('http://register.local/api/users')
      .then(res => res.json())
  }