import React from 'react';
import classes from './NavBar.css';
import { Link } from 'react-router-dom';



const NavBar = (props) => {
    return(
        <div className={classes.NavBar}>
          <Link to="/"><span className={classes.left}>The Tobacco Cellar</span></Link>
          <Link to="/Cellar"><span className={classes.left}>Cellar</span></Link>
          <Link to="/Pipes"><span className={classes.left}>Pipes</span></Link>
          <section>
            <Link to="/SignUp"><span className={classes.right}>Sign Up</span></Link>
            <Link to="/SignIn"><span onClick={() => props.clicked} className={classes.right}>Sign In</span></Link>
          </section>
        </div>
    );
}

export default NavBar;