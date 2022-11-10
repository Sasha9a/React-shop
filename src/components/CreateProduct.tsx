import axios from 'axios';
import React, { useState } from 'react';
import { ProductInterface } from '../interfaces/Product.interface';
import { ErrorMessage } from './ErrorMessage';

const productData: ProductInterface = {
  title: '',
  price: 13.5,
  description: 'lorem ipsum set',
  image: 'https://i.pravatar.cc',
  category: 'electronic',
  rating: {
    rate: 13,
    count: 1
  }
};

interface CreateProductProps {
  onCreate: (product: ProductInterface) => void;
}

export const CreateProduct = (props: CreateProductProps) => {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');

  const submitHandler = async (event: React.FormEvent) => {
    event.preventDefault();
    setError('');

    if (!value.trim().length) {
      setError('Введите название');
      return;
    }
    productData.title = value;
    const response = await axios.post<ProductInterface>('https://fakestoreapi.com/products', productData);
    props.onCreate(response.data);
  };

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        className="border-1 py-2 px-3 mb-2 outline-none"
        style={{ width: '-webkit-fill-available' }}
        placeholder="Название продукта..."
        value={value}
        onChange={changeHandler}
      />

      {error && <ErrorMessage error={error} />}

      <button
        type="submit"
        className="py-2 px-4 border-1 bg-yellow-500 hover:text-white">
        Создать
      </button>
    </form>
  );
};
