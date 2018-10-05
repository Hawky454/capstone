import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import './SignUp.css';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedId: ''
    }
  }
  
  
  dropDownChanged = (event) => {
    this.setState({
      selectedId: event.target.value
    });
    console.log(event.target.value);
  }


      render() {
        return(
          <div>
            <NavBar /> 
                  <form id="form-card" className="form-card hidden">
                    <h2 className="sign-up-heading">Sign Up</h2>
                    <section className="form-row">
                      <section className="form-group col-md-6">
                        <label htmlFor="inputEmail4">Email</label>
                        <input type="email" className="form-control" id="inputEmail4" autoComplete="username email" placeholder="Email"/>
                      </section>
                      <section className="form-group col-md-6">
                        <label htmlFor="username">Username</label>
                        <input type="text" className="form-control" id="username" autoComplete="username" placeholder="Username"/>
                      </section>
                      <section className="form-group col-md-6">
                        <label htmlFor="inputPassword4">Password</label>
                        <input type="password" className="form-control" id="inputPassword4" autoComplete="new-password" placeholder="Password"/>
                      </section>
                      <section className="form-group col-md-6">
                        <label htmlFor="inputPassword5">Re-enter Password</label>
                        <input type="password" className="form-control" id="inputPassword5" autoComplete="new-password" placeholder="Password"/>
                      </section>
                      </section>
                      <section className="form-group">
                        <label htmlFor="inputAddress">Address</label>
                        <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
                      </section>
                      <section className="form-group">
                        <label htmlFor="inputAddress2">Address 2</label>
                        <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
                      </section>
                      <section className="form-row">
                      <section className="form-group col-md-6">
                        <label htmlFor="inputCity">City</label>
                        <input type="text" className="form-control" id="inputCity" placeholder="Austin"/>
                      </section>
                      <section className="form-group col-md-4">
                        <label htmlFor="inputState">State</label>
                        <select id="inputState" className="form-control" value={this.selectedId} onChange={this.dropDownChanged}>
                      <option>Choose...</option>
                      <option>State</option>
                        <option value="AL">Alabama</option>
                        <option value="AK">Alaska</option>
                        <option value="AZ">Arizona</option>
                        <option value="AR">Arkansas</option>
                        <option value="CA">California</option>
                        <option value="CO">Colorado</option>
                        <option value="CT">Connecticut</option>
                        <option value="DE">Delaware</option>
                        <option value="DC">District Of Columbia</option>
                        <option value="FL">Florida</option>
                        <option value="GA">Georgia</option>
                        <option value="HI">Hawaii</option>
                        <option value="ID">Idaho</option>
                        <option value="IL">Illinois</option>
                        <option value="IN">Indiana</option>
                        <option value="IA">Iowa</option>
                        <option value="KS">Kansas</option>
                        <option value="KY">Kentucky</option>
                        <option value="LA">Louisiana</option>
                        <option value="ME">Maine</option>
                        <option value="MD">Maryland</option>
                        <option value="MA">Massachusetts</option>
                        <option value="MI">Michigan</option>
                        <option value="MN">Minnesota</option>
                        <option value="MS">Mississippi</option>
                        <option value="MO">Missouri</option>
                        <option value="MT">Montana</option>
                        <option value="NE">Nebraska</option>
                        <option value="NV">Nevada</option>
                        <option value="NH">New Hampshire</option>
                        <option value="NJ">New Jersey</option>
                        <option value="NM">New Mexico</option>
                        <option value="NY">New York</option>
                        <option value="NC">North Carolina</option>
                        <option value="ND">North Dakota</option>
                        <option value="OH">Ohio</option>
                        <option value="OK">Oklahoma</option>
                        <option value="OR">Oregon</option>
                        <option value="PA">Pennsylvania</option>
                        <option value="RI">Rhode Island</option>
                        <option value="SC">South Carolina</option>
                        <option value="SD">South Dakota</option>
                        <option value="TN">Tennessee</option>
                        <option value="TX">Texas</option>
                        <option value="UT">Utah</option>
                        <option value="VT">Vermont</option>
                        <option value="VA">Virginia</option>
                        <option value="WA">Washington</option>
                        <option value="WV">West Virginia</option>
                        <option value="WI">Wisconsin</option>
                        <option value="WY">Wyoming</option>
                    </select>
                    </section>
                    <section className="form-group col-md-2">
                      <label htmlFor="inputZip">Zip</label>
                      <input type="text" className="form-control zip" id="inputZip" placeholder="Zip"/>
                    </section>
                    </section>
                    <section className="form-group">
                    <section className="form-check">
                    </section>
                    </section>
                    <button type="submit" className="btn btn-primary">Sign Up</button>
                </form>
            <Footer />
         </div>
        );
      }
    }

    export default SignUp;
