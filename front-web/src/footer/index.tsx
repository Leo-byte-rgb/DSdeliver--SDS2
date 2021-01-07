import React from 'react';
import './styles.css';
import { ReactComponent as YoutubeIcon} from './youtube.svg'
import { ReactComponent as LinkedinIcon} from './linkedin.svg'
import { ReactComponent as InstagramIcon} from './instagram.svg'

function Footer() {

    return (
        <footer className="main-footer">
           App desenvolvido durante a 2ª ed. do evento Semana DevSuperior
            <div className="footer-icons">
                <a href="https://www.youtube.com/channel/UCvSODooKZDi72dpkEo06x4w" target="_new"><YoutubeIcon /></a>
                <a href="https://www.linkedin.com/in/leonardo-agostini-costa-4a34371b4/" target="_new"><LinkedinIcon/></a>
                <a href="https://www.instagram.com/leo.costa2/" target="_new"><InstagramIcon/></a>
            </div>
        </footer>
    )
}

export default Footer;