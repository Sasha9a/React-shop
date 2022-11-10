import { Link } from 'react-router-dom';

export const Navigation = () => {
  return (
    <nav className="h-3rem flex justify-content-between px-5 bg-gray-500 text-white align-items-center">
      <span className="font-bold">React 2022</span>
      <span>
        <Link
          to="/"
          className="mr-2">
          Товары
        </Link>
        <Link to="/about">О нас</Link>
      </span>
    </nav>
  );
};
