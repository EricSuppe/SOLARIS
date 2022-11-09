import React from 'react';
import 'boxicons'
import { Link } from 'react-router-dom';
import "./footer.css"

const Footer = () => {

    return (
        <footer>
            <div className='footer-wrapper'>
                <div className='footer-left'>
                    <img src={`/images/Footer-Logo.svg`} alt="" />
                    <div>
                        <h3>Solaris</h3>
                        <ul>
                            <li><a href="http://discord.gg/piltover"><box-icon name='discord-alt' type='logo' size="sm" color="black"></box-icon></a></li>
                            <li><a href="https://instagram.com/psvsolaris"><box-icon name='instagram' type='logo' size="sm" color="black"></box-icon></a></li>
                            <li><a href="https://twitter.com/psvsolaris"><box-icon name='twitter' type='logo' size="sm" color="black"></box-icon></a></li>      
                            <li><a href="https://www.twitch.tv/psvsolarisdessau"><box-icon type='logo' name='twitch' size="sm" color="black"></box-icon></a></li>      
                            <li><a href="https://www.youtube.com/channel/UCsxXMk672K_tKP223T4zKPA"><box-icon name='youtube' type='logo' size="sm" color="black"></box-icon></a></li>      
                            <li><a href="https://tiktok.com/@psvsolaris"><box-icon name='tiktok' type='logo' size="sm" color="black"></box-icon></a></li>      
                        </ul>
                    </div>
                </div>
                <div className='footer-right'>
                    <ul>
                        {footerLink({link: "datenschutz", value: "Privacy Policy"})}
                        {footerLink({link: "impressum", value: "Imprint"})}
                        {footerLink({link: "kontakt", value: "Contact Us"})}
                    </ul>
                    <span className='copyright'>Copyright © 2022 | Solaris is part of PSV 90 Dessau-Anhalt e.V.</span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;


const footerLink = (props) => {
    return (
        <Link to={`/${props.link}`}>
            <li>
                <span>{props.value}</span>
            </li>
        </Link>
    )
}