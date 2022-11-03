import React from 'react';
import { Product } from './components/Product';
import { products } from './data/products';

function App() {
  return (
    <div className="grid">
      <div className="col-4 col-offset-4">
        <div className="pt-5 text-xl">
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
