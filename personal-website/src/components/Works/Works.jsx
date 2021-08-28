import React from "react";
import './Works.css';
import AndreiPic from '../../andreii.png';
import { FaReact } from 'react-icons/fa';
import { FaHtml5 } from 'react-icons/fa';
import { IoLogoCss3 } from 'react-icons/io';
import { DiJavascript1 } from 'react-icons/di';
import { FaGit } from 'react-icons/fa';
import { FaNpm } from 'react-icons/fa';








const Works = () => {

    return (
        <div className="portfolio" id="portfolio">
            <h1><b>Portfolio</b></h1>
            <div className="container">
                <div className="item">
                    <img
                        src={AndreiPic}
                        alt=""
                    />
                    <h3> App 1</h3>
                </div>

                <div className="item">
                    <img
                        src={AndreiPic}
                        alt=""
                    />
                    <h3> App 2</h3>
                </div>

                <div className="item">
                    <img
                        src={AndreiPic}
                        alt=""
                    />
                    <h3> App 3</h3>
                </div>

                <div className="item">
                    <img
                        src={AndreiPic}
                        alt=""
                    />
                    <h3> App 4</h3>
                </div>

                <div className="item">
                    <img
                        src={AndreiPic}
                        alt=""
                    />
                    <h3> App 5</h3>
                </div>

                <div className="item">
                    <img
                        src={AndreiPic}
                        alt=""
                    />
                    <h3> App 6</h3>
                </div>

                <div className="skills" id="skills">
                    <h2><b>Technologies used for the above projects</b></h2>
                    <div className="skills-list">
                        <h1><FaHtml5 /><IoLogoCss3 /><DiJavascript1 /><FaReact /><FaGit /><FaNpm /> </h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Works;