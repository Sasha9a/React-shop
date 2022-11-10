import React from 'react';

interface ModalProps {
  children: React.ReactNode;
  title: string;
  onClose: () => void;
}

export const Modal = (props: ModalProps) => {
  return (
    <>
      <div
        className="fixed bg-black-alpha-50 top-0 right-0 left-0 bottom-0"
        onClick={props.onClose}></div>
      <div
        className="w-30rem p-3 border-round bg-white absolute left-50"
        style={{ top: '50px', transform: 'translateX(-50%)' }}>
        <h3 className="m-0 text-center mb-2">{props.title}</h3>

        {props.children}
      </div>
    </>
  );
};
