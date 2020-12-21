import React from 'react';
import './Titre.css';
import img_email from '../img/email.png';
import img_tel from '../img/telephone.png';
import img_adress from '../img/adress.png';
import img_contact from '../img/search-loupe.svg';
import img_account from '../img/account.svg';
import img_cart from '../img/cart.svg';

const Titre = () => {
    return(
        <div className="titre">
            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <img className="img1" alt="" src={img_tel} />
                        8-950-760-53-77 
                </li>
                <li className="nav-item">
                    <img className="img2" alt="" src={img_adress} />
                        Фридриха Энгельса 8а
                </li>
                <li className="nav-item">
                    <img className="img3" alt="" src={img_email} />
                        alioungordiouf@gmail.com
                </li>
                <li className="nav-item">
                    <a href="#" className="ic1"><img src={img_contact} alt="loup" /></a>   
                </li>
                <li className="nav-item">
                    <a href="#" className="ic2"><img src={img_account} alt="account" /></a>   
                </li>
                <li className="nav-item">
                    <a href="#" className="ic3"><img src={img_cart} alt="cart" /></a>   
                </li>
            </ul>
        </div>
    )
}
export default Titre; 