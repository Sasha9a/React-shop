import React, { useContext } from 'react';
import { CreateProduct } from '../components/CreateProduct';
import { ErrorMessage } from '../components/ErrorMessage';
import { Loader } from '../components/Loader';
import { Modal } from '../components/Modal';
import { Product } from '../components/Product';
import { ModalContext } from '../context/ModalContext';
import { useProducts } from '../hooks/products';
import { ProductInterface } from '../interfaces/Product.interface';

export const ProductsPage = () => {
  const { products, error, loading, addProduct } = useProducts();
  const { modal, open, close } = useContext(ModalContext);

  const CreateHandler = (product: ProductInterface) => {
    close();
    addProduct(product);
  };

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

          {modal && (
            <Modal
              title="Создание товара"
              onClose={close}>
              <CreateProduct onCreate={CreateHandler} />
            </Modal>
          )}

          <button
            onClick={open}
            className="fixed border-circle bg-red-700 text-white text-2xl px-3 py-2 cursor-pointer"
            style={{ bottom: 50, right: 50 }}>
            +
          </button>
        </div>
      </div>
    </div>
  );
};
