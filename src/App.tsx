import axios, { AxiosError } from 'axios';
import React, { useEffect, useState } from 'react';
import { Product } from './components/Product';
import { ProductInterface } from './interfaces/Product.interface';

function App() {
  const [products, setProducts] = useState<ProductInterface[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchProducts = async () => {
    try {
      setError('');
      setLoading(true);
      const response = await axios.get<ProductInterface[]>('https://fakestoreapi.com/products?limit=5');
      setProducts(response.data);
      setLoading(false);
    } catch (e) {
      const error = e as AxiosError;
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="grid">
      <div className="col-4 col-offset-4">
        <div className="pt-5 text-xl">
          {loading && <p className="text-center">Loading...</p>}
          {error && <p className="text-center text-red-500">{error}</p>}
          {products.map((product) => (
            <Product
              product={product}
              key={product.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
