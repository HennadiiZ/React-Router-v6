import  classes from './MainHeader.module.css';
import { NavLink } from 'react-router-dom';

const MainHeader = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            {/* <NavLink activeClassName={classes.active} to='/welcome'>welcome</NavLink> */}
            <NavLink className={(navData) => navData.isActive ? classes.active : ''} to='/welcome'>welcome</NavLink>
          </li>
          <li>
            {/* <NavLink activeClassName={classes.active} to='/products'>products</NavLink> */}
            <NavLink className={(navData) => navData.isActive ? classes.active : ''} to='/products'>products</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
};

export default MainHeader;