import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import classes from './Cellar.css';
// import CellarList from '../CellarList/CellarList';

const imageStyle = {
    width: 150,
    height: 150,
    marginLeft: 44,
    borderRadius: 2
}


class Cellar extends Component{
    constructor(props) {
        super(props);
        this.state = {
            cellarData: []
        }
    }

    //! Still very much playing around with this component... think maybe this call should be done when a button is clicked or something of that nature... idears
    componentWillMount() {
        fetch('api/cellar/')
        .then(res => res.json())
        .then(data => this.setState({ cellarData: data }, () => console.log('cellar data fetched...:', data)));
    }

    
    render() {
    return(
        this.state.cellarData.map((data, index) => {
            return <div className={classes.Cellar}>
                     <div className={classes.container}>
                            <img 
                              src={data.image} 
                              alt ="what ever dude!"
                              style={imageStyle}/>
                        <ul>
                            <li key={data.id}>{data.blend}</li>
                            <li key={data.id}>{data.brand}</li>
                            <li key={data.id}>{data.weight} lbs</li>
                            <li key={data.id}>{data.age} years</li>
                            <li key={data.id}>{data.purchased.slice(0,10)}</li>
                            <li key={data.id}>{data.available ? 'true' : 'false' }</li>
                            <li key={data.id}>{data.rating} out of 5 stars.</li>
                            <li>${data.price}</li>
                        </ul>
                      </div>         
                 </div>
             })
        );
     }
}

export default Cellar;