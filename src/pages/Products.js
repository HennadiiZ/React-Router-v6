import { NavLink } from 'react-router-dom';

const Products = () => {
  return (
    <>
      <h1>THE products PAGE</h1>
      <ul>
        <li>
          <NavLink to='/products/p1'>Product 1</NavLink>
        </li>
        <li>
          <NavLink to='/products/p2'>Product 2</NavLink>
        </li>
        <li>
          <NavLink to='/products/p3'>Product 3</NavLink>
        </li>
      </ul>
    </>
  );
};
  
export default Products;