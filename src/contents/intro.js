import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';

import Social from '../components/social';
import profilepic from '../img/@fasteddy13_square.jpg';

class Intro extends Component {

    render () {

        return (

            <div className="condiv home">

            <img src={profilepic} className="profilepic" alt={"Profile_Picture"}></img>

            <ReactTypingEffect className="typingeffect" text={['My name is Michael Rehnert.','Welcome to my portfolio page!']}
            speed={100} eraseDelay={700}/>

            <Social />

            </div>

        )
    }
}

export default Intro;
