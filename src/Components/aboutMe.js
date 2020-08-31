import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import cali from './Style/cali.jpg';
import passion from './Style/passion.jpg';
import { Footer } from './footer';
import './Style/aboutMe.css';

export class AboutMe extends Component {
    render() {
        return(
            <main id="aboutme">
                <Helmet>
                    <title>About me</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                </Helmet>
                <div className="all">
                    <div id="part1">
                        {/*<ul id="pa">*/}
                        {/*    <li> Education <br /> Empowerment </li>*/}
                        {/*    <li> Women in STEM </li>*/}
                        {/*    <li> Artifical intelligence </li>*/}
                        {/*</ul>*/}
                        <div id='circleDeco1'>
                        </div>
                        <div id='circleDeco2'>
                        </div>
                        <span id="part1txt">Passion</span>
                        <img alt="computer" id="passion" src={ passion }/>
                    </div>
                    <div id="part2">
                        <div id='circleDeco3'>
                        </div>
                        <div id='circleDeco4'>
                        </div>
                        <span id="part2txt">Skills</span>
                        {/*<ul id="pl">*/}
                        {/*    <li> Java </li>*/}
                        {/*    <li> Python </li>*/}
                        {/*    <li> HTML </li>*/}
                        {/*    <li> CSS </li>*/}
                        {/*    <li> OCaml </li>*/}
                        {/*    <li> JavaScript </li>*/}
                        {/*    <li> AWS </li>*/}
                        {/*</ul>*/}
                    </div>
                    <div id="part3">
                        <div id='circleDeco5'>
                        </div>
                        <div id='circleDeco6'>
                        </div>
                        <span id="part3txt">Hobbies</span>
                        {/*<ul id="ho">*/}
                        {/*    <li> Lego </li>*/}
                        {/*    <li> Nanopaper </li>*/}
                        {/*    <li> Photography (aspiring) </li>*/}
                        {/*    <li> Foodventure </li>*/}
                        {/*    <li> Binge-watching </li>*/}
                        {/*</ul>*/}
                        <img alt="scene" id="cali" src={ cali }/>
                    </div>
                    <span id="scrollOne">Hover over the circles</span>
                    <div id="circles">
                        <div id="circle1">

                        </div>
                        <div id="circle2">

                        </div>
                        <div id="circle3">

                        </div>
                        <div id="circle4">

                        </div>
                    </div>
                    <span id="scrollTwo">Scroll down</span>
                    <div id="circles">
                        <div id="circleTwo1">

                        </div>
                        <div id="circleTwo2">

                        </div>
                        <div id="circleTwo3">

                        </div>
                        <div id="circleTwo4">

                        </div>
                    </div>
                </div>
                <span id="scrollThree">Now you know more about me!</span>
                <Footer />
            </main>
        );
    }
}