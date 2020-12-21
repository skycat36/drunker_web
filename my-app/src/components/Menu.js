import React from 'react';
import './Menu.css';

function Menu() {
    return(
        <div className="mainDiv">
            <ul id="menu">
                <li><a href="/">Home</a></li>
                <li>
                    <a href="/catalogue">КАТАЛОГ ТОВАРОВ</a>
                    <ul>
                        <li><a href="#">Шу Пуэр</a></li>
                        <li><a href="#">Шен Пуэр</a></li>
                        <li><a href="#">Красный чай</a></li>
                        <li><a href="#">Зеленый чай</a></li>
                        <li><a href="#">Черный чай</a></li>
                        <li><a href="#">Улун</a></li>
                    </ul>
                </li>
                <li><a href="/payment">ОПЛАТА И ДОСТАВКА</a></li>
                <li><a href="/contact">КОНТАКТЫ</a></li>
            </ul>
        </div>
    )
}

export default Menu;