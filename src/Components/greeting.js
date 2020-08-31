import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import './Style/greeting.css';

export class Greeting extends Component {

    render() {
        return (
            <main id="greeting">
                <Helmet>
                    <title>About me </title>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                </Helmet>
                <div className="intro">
                    <h1 className="name">Hi, I'm Acelyn</h1>
                </div>
            </main>
        );
    }
}



