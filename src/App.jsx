import { useState, useEffect } from 'react';
import axios from 'axios';
import { ProductCard } from './components/ProductCard';



function App() {

    const [products, setProducts] = useState([]);
    useEffect(() => {
      const apiUrl = 'http://localhost:3333/api/products';

      async function  fetchProducts() {
        try{
          const response = await axios.get(apiUrl);
          setProducts(response.data);
        } catch (error) {
          console.error("Error to find products", error);
        }
      }

      fetchProducts();
    }, []);
    return (
  <div className="bg-gray-100">
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-bold tracking-tight text-gray-900">Nossa Vitrine</h2>

      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}

      </div>
    </div>
  </div>
)    
}

export default App