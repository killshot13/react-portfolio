import React, { Component } from 'react';
import Navitem from './navitem';
// We'll code Navitem.js later for now let's focus on Navbar.js
// “Navitem” is the sub-component.
class Navbar extends Component {

    constructor(props) {

            super(props);

            this.state = {

                'NavItemActive':''
            };
        }

        activeitem = (x) => {

            if(this.state.NavItemActive.length>0) {

                document.getElementById(this.state.NavItemActive).classList.remove('active');
            }

            this.setState({'NavItemActive':x}, () => {

                document.getElementById(this.state.NavItemActive).classList.add('active');

            });

        };

    render() {

        return (

            <nav>

            <div>

                <ul>

                    <Navitem item="Intro" tolink="/intro" activec={this.activeitem}></Navitem>

                    <Navitem item="About" tolink="/about" activec={this.activeitem}></Navitem>

                    <Navitem item="Education" tolink="/education" activec={this.activeitem}></Navitem>

                    <Navitem item="Skills" tolink="/skills" activec={this.activeitem}></Navitem>

                    <Navitem item="Contact" tolink="/contact" activec={this.activeitem}></Navitem>

                </ul>

            </div>

            </nav>

        )
    }
}

export default Navbar;
