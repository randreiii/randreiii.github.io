import React from 'react';
import './Footer.css'
import { FaFacebook } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';


const Footer = () => {
    return (
        <div className="footer">
            <footer>
                <ul>
                    <li>
                        <a href="https://www.facebook.com/andrei.radu.182/" target="_blank" className="facebook">
                            <FaFacebook />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/andrei-radu-410bb1ba/" target="_blank" className="linkedin">
                            <FaLinkedinIn />
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/randreiii" target="_blank" className="github">
                            <FaGithub />
                        </a>
                    </li>
                </ul>
            </footer>
        </div>
    )
}

export default Footer;

