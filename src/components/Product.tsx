import { useState } from 'react';
import { ProductInterface } from '../interfaces/Product.interface';

interface ProductProps {
  product: ProductInterface;
}

export const Product = (props: ProductProps) => {
  const [details, setDetails] = useState(false);
  const btnBgClassName = details ? 'bg-blue-400' : 'bg-yellow-400';
  const btnClasses = ['py-2 px-4 border-1', btnBgClassName];

  return (
    <div className="border-1 py-2 px-4 border-round flex flex-column align-items-center mb-2">
      <img
        src={props.product.image}
        className="w-3"
        alt={props.product.title}
      />
      <p>{props.product.title}</p>
      <p className="font-bold">{props.product.price}</p>
      <button
        className={btnClasses.join(' ')}
        onClick={() => setDetails(!details)}>
        {!details ? 'Show Details' : 'Hide Details'}
      </button>

      {details && (
        <div className="scalein animation-duration-1000">
          <p>{props.product.description}</p>
          <p>
            Rate: <span style={{ fontWeight: 'bold' }}>{props.product.rating.rate}</span>
          </p>
        </div>
      )}
    </div>
  );
};
