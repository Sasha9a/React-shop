import React from 'react';

interface ErrorMessageProps {
  error: string;
}

export const ErrorMessage = (props: ErrorMessageProps) => {
  return <p className="text-center text-red-500">{props.error}</p>;
};
