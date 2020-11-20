import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub, FaTwitter, FaFile} from "react-icons/fa";
import Pdf from "./resume/JoshHerreraProgrammerResume.pdf";

const Contact = ({ contactEmail, contactSection, socialLinks }) => {
    return (
        <div className="contact_container">
            <h1>Get in Touch</h1>
            <p>{contactSection}</p>
            <br></br>
            <a className="email_link" href={`mailto:${contactEmail}`}>
                {contactEmail}
            </a>
            <div className="social_links">
                <ul>
                    <li>
                        <a href={`mailto:${contactEmail}`}>
                            <FaEnvelope></FaEnvelope>
                        </a>
                    </li>
                    <li>
                        <a href={socialLinks[0].url}>
                            <FaLinkedin></FaLinkedin>                          
                        </a>               
                    </li>
                    <li>
                        <a href={socialLinks[1].url}>
                            <FaGithub></FaGithub>
                        </a>
                    </li>
                    <li>
                        <a href={socialLinks[2].url}>
                            <FaTwitter></FaTwitter>
                        </a>
                    </li>
                    <li>
                        <a href={Pdf} target="_blank">
                            <FaFile></FaFile>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Contact