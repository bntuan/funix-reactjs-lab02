import React, { Component } from 'react';
import { Navbar, NavbarBrand, } from 'reactstrap';

class Header extends Component {
    render() {
        return (
            // <React.Fragment></React.Fragment> don't add an extra node into the DOM
            <>      
                <Navbar dark>
                    <div className="container">
                        <NavbarBrand href="/">Ristorante</NavbarBrand>
                    </div>
                </Navbar>
                <div className='jumbotron'>
                    <div className="container">
                        <div className='row row-header'>
                            <div className='col-12 col-sm-6'>
                                <h1>Reataurance Con Fusion</h1>
                                <p>We take inspirarion from the World's best cusine, and create a unique fusion experience. Our lipsmaking creations will tickle your senses!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Header;