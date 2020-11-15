export default function getProductsData() {
    return fetch('http://e-commerce.local/api/products')
      .then(res => res.json())
  }