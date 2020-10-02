import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Social extends Component {

    render () {

        return (

            <div class="social">

                <a href="https://github.com/killshot13">
                    <FontAwesomeIcon icon={['fab', 'github']} />
                </a>

                <a href="https://linkedin.com/in/dmrehnert">
                    <FontAwesomeIcon icon={['fab', 'linkedin']} />
                </a>

                <a href="https://www.facebook.com/SafeThisHome">
                    <FontAwesomeIcon icon={['fab', 'facebook']} />
                </a>

                <a href="https://medium.com/@sth13">
                    <FontAwesomeIcon icon={['fab', 'medium']} />
                </a>

                <a href="https://codepen.io/killshot13">
                    <FontAwesomeIcon icon={['fab', 'codepen']} />
                </a>

            </div>
        )
    }
}

export default Social;
