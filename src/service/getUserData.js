export default function getUserData() {
    return fetch('http://e-commerce.local/')
      .then(res => res.json())
  }