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
                    <p id="moviedetail">Java (jsoup & regex)</p>
                    <p id="labelmovie">Movie Match!</p>
                    <a id="movie" href="https://github.com/ac-hj/Movie-Match-" target="_blank">
                    </a>
                </div>
                <div id="safemain">
                    <p id="safedetail">React, JSON</p>
                    <p id="labelsafe">Safe Store</p>
                    <a id="safe" href="https://github.com/ac-hj/safe-store" target="_blank">
                    </a>
                </div>
                <div id="websitemain">
                    <p id="websitedetail">React, HTML, CSS, JavaScript</p>
                    <p id="labelwebsite">Personal Website</p>
                    <a id="website" href="https://github.com/ac-hj/Movie-Match-" target="_blank">
                    </a>
                </div>
                <Footer />
            </main>
        );
    }
}

