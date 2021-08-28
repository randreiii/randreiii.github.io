import React from 'react';
import AndreiPic from '../../andreii.png';
import './Herobox.css';


const Herobox = () => {
    return (
        <div className="home">
            <div className="herobox">
                <div className="leftside-herobox">
                    <h1>Hi,</h1>
                    <h2><b>I'm Andrei</b></h2>
                    <br></br>
                    <p>I am a front end developer, based in Bucharest, Romania.
                        Currently, I am focused on crafting clean and user friendly applications.
                        I am passionate about building excellent software that have a significant impact in the lifes of those around me. Technologies used so far are HTML, CSS, Javascript (ES6+). Currently I am focused on learning React Js library.   </p>
                    <button className="button-resume">Dowload Resume</button>
                </div>
                <div className="rightside-herobox">
                    <img src={AndreiPic} width="350px" height="auto" alt="picture with me" />
                </div>
            </div>
        </div>
    )
}

export default Herobox;