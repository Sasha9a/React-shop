import React from 'react';
import { ErrorMessage } from './components/ErrorMessage';
import { Loader } from './components/Loader';
import { Product } from './components/Product';
import { useProducts } from './hooks/products';

function App() {
  const { products, error, loading } = useProducts();

  return (
    <div className="grid">
      <div className="col-4 col-offset-4">
        <div className="pt-5 text-xl">
          {loading && <Loader />}
          {error && <ErrorMessage error={error} />}
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
