import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import selfPic from './Style/drawself2.jpg';
import { Footer } from './footer';
import './Style/introduction.css';

export class Introduction extends Component {

    render () {
        return (
            <main>
                <Helmet>
                    <title> Introduction </title>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                </Helmet>
                <div id="picture">
                    <img alt="self" id="self" src={selfPic} />
                        <div id="caption" >
                            <span id="hello">Hello!</span>
                            <p>
                                I'm Acelyn, a Computer Science student at the University of Pennsylvania. I'm an avid lego builder, K-Drama lover, and learner. My interests lie in Artificial Intelligence / Machine Learning and Designing.
                            </p>
                        </div>
                </div>
                <Footer />
            </main>
        );
    }
}