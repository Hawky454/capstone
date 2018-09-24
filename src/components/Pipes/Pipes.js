import React from 'react';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import classes from './Pipes.css';



const Pipes = (props) => {
    return(
        <div>
            <NavBar />
            <div className={classes.Pipes}>
              <button>One</button>
              <button>And a</button>
              <button>Two</button>
            </div>
            <Footer />
        </div>
    );
}

export default Pipes;