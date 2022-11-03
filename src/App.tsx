import React from 'react';
import { Product } from './components/Product';
import { useProducts } from './hooks/products';

function App() {
  const { products, error, loading } = useProducts();

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
