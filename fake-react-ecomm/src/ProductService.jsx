// src/ProductService.js

class ProductService {
  async getProducts() {
    try {
      const response = await fetch("https://fakestoreapiserver.reactbd.com/products");
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching products:", error);
      return [];
    }
  }
}

export default ProductService;
