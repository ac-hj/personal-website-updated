import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Introduction } from './introduction';
import { Greeting } from './greeting';
import { AboutMe } from './aboutMe';
import { Project} from './project';
import './Style/navigationBar.css';

export class NavigationBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            page: 'home'
        }
        this.renderPage = this.renderPage.bind(this);
    }

    // Ensures the components are updated only if the page is set to a diff value
    // shouldComponentUpdate(nextProps, nextState, nextContext) {
    //     this.renderPage();
    //     return (this.state.page === nextState.page);
    // }

    renderPage() {
        let page = this.state.page;
            if (page === 'home') {
                return (
                    <div>
                        <Greeting />
                    </div>
                );
            } else if (page === 'introduction') {
                return (
                    <div>
                        <Introduction/>
                    </div>
                );
            } else if (page === 'aboutme') {
                return (
                    <div>
                        <AboutMe />
                    </div>
                );
            } else {
                return (
                    <div>
                        <Project />
                    </div>
                );
            }

    }

    render() {
        return (
            <main>
                <Helmet>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                </Helmet>
                <div className="dropdown">
                    <button className="dropbtn">▼
                        <i className="fa fa-caret-down"></i>
                    </button>
                    <div className="navigation">
                        <Link onClick={() => {this.setState({page: 'home'}, this.render)}}>Home</Link>
                        <Link onClick={() => {this.setState({page: 'introduction'})}}>Introduction</Link>
                        <Link onClick={() => {this.setState({page: 'aboutme'})}}>About Me</Link>
                        <Link onClick={() => {this.setState({page: 'project'})}}>Project</Link>
                    </div>
                </div>
                { this.renderPage() }
            </main>
        );
    }
}

