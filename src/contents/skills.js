import React, { Component } from 'react';

class Skills extends Component {

    constructor(props) {

        super(props);

            this.state={'skills':['JAVASCRIPT ES6/ES7','EXPRESS.JS','RESTful API','REACT.JS','NODE.JS','jQUERY','HTML5','SCSS','CSS3','PHP','C#','__________','AWS EC2/ECS/S3','MONGO_DB','APACHE','mySQL','__________','CRITICAL THINKING','COMMUNICATION','LEADERSHIP','TEAMWORK','FLEXIBILITY']};

    }

    render() {

        return (

            <div className="condiv skills">

                <h1 className="subtopic">Skills</h1>

                    <ul>

                        {this.state.skills.map((value) => { return <li>{value}</li> })}

                    </ul>
            </div>

        )

    }

}

export default Skills;
