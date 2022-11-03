import axios, { AxiosError } from 'axios';
import { useEffect, useState } from 'react';
import { ProductInterface } from '../interfaces/Product.interface';

export const useProducts = () => {
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

  return { products, error, loading };
};
