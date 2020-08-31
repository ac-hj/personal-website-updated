import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import './Style/project.css';
import { Footer } from './footer';

export class Project extends Component {

    render() {
        return(
            <main id="project">
                <Helmet>
                    <title>Projects</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                </Helmet>
                <div id="moviemain">
                    <a id="movie" href="https://github.com/ac-hj/Movie-Match-" target="_blank">
                    </a>
                    <p id="labelmovie">Movie Match!</p>
                    <p id="moviedetail">Java (jsoup & regex)</p>
                </div>
                <div id="safemain">
                    <a id="safe" href="https://github.com/ac-hj/safe-store" target="_blank">
                    </a>
                    <p id="labelsafe">Safe Store</p>
                    <p id="safedetail">React, JSON</p>
                </div>
                <div id="websitemain">
                    <a id="website" href="https://github.com/ac-hj/Movie-Match-" target="_blank">
                    </a>
                    <p id="labelwebsite">Personal Website</p>
                    <p id="websitedetail">React, HTML, CSS, JavaScript</p>
                </div>
                <Footer />
            </main>
        );
    }
}

