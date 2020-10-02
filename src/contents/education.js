import React, { Component } from 'react';
import Widecard from '../components/widecard';

class Education extends Component {

    render() {

        return (

            <div className="condiv">

                <h1 className="subtopic">My Education</h1>

                <Widecard title="Certification -- Full-Stack Web Development" where="Ironhack Coding Academy" from="June 2020" to="August 2020"/>

                <Widecard title="Bachelor of Technology -- Information Technology" where="Purdue University Global" from="June 2019" to="Present"/>

            </div>

        )

    }

}

export default Education;
