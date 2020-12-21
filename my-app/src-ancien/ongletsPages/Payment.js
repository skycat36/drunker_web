import React from 'react';
import './Payment.css';
import img_paybycard from '../img/paybycard.png';

const Payment = () => {
    return(
        <div className='container'>
           <div className="pagepayment">
            <div className="payment">
            <div className="div_center div_text">
            <a href="#"><img alt="" src={img_paybycard} width="80" height="80" /> </a>
            <h1>Оплата картой</h1>
            <p>Для Вашего удобства Вы можете оплатить товар с помощью Вашей пластиковой карты онлайн режиме.</p>
        </div>
            </div>

            <div className="aside">
                <nav class="navbar navbar-light bg-light">
                    <form class="form-inline">
                        <input class="form-control mr-sm-2" type="search" placeholder="Поиск" aria-label="Search" />
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Найти</button>
                    </form>
                </nav>

                <h3>Пуэр</h3>
                <hr/>
                <h3>Шу Пуэр</h3>
                <hr/>
                <h3>Шен Пуэр</h3>
                <hr/>
                <h3>Красный чай</h3>
                <hr/>
                <h3>Зеленый чай</h3>
                <hr/>
                <h3>Черный чай</h3>
                <hr/>
                <h3>Улун</h3>
            </div>
        </div>
        </div>
    )
}

export default Payment;