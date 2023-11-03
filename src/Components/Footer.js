import React from 'react'
import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedin, faGithub, faXTwitter } from '@fortawesome/free-brands-svg-icons'
const Footer = () => {
    const shouldOpenInNewTab = true
    return (
        <div>
            <div className="footer text-center text-dark">
                <div className="icons">
                    <a
                        className="btn btn-primary btn-floating m-1"
                        style={{ backgroundColor: "#000" }}
                        href="https://twitter.com/Bhaveshkrishan1"
                        target={shouldOpenInNewTab ? "_blank" : undefined}
                        rel={shouldOpenInNewTab ? "noopener noreferrer" : undefined}
                    > <FontAwesomeIcon icon={faXTwitter} /> </a>
                    <a
                        className="btn btn-primary btn-floating m-1"
                        style={{ backgroundColor: "#333333" }}
                        href="https://github.com/bhaveshgarg2000"
                        target={shouldOpenInNewTab ? "_blank" : undefined}
                        rel={shouldOpenInNewTab ? "noopener noreferrer" : undefined}
                    ><FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a
                        className="btn btn-primary btn-floating m-1"
                        style={{ backgroundColor: "#dd4b39" }}
                        href="https://www.instagram.com/bgarg2000/"
                        target={shouldOpenInNewTab ? "_blank" : undefined}
                        rel={shouldOpenInNewTab ? "noopener noreferrer" : undefined}
                    ><FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a
                        className="btn btn-primary btn-floating m-1"
                        style={{ backgroundColor: "#0082ca" }}
                        href="https://www.linkedin.com/in/bhaveshgarg2005/"
                        target={shouldOpenInNewTab ? "_blank" : undefined}
                        rel={shouldOpenInNewTab ? "noopener noreferrer" : undefined}
                    ><FontAwesomeIcon icon={faLinkedin} />
                    </a>
                </div>
                <div className="text-center text-dark pb-3 pt-2">
                    Bhavesh Krishan Garg © 2023 Copyright
                </div>
            </div>
        </div>)
}

export default Footer