import React from 'react';
import '../components/Payment.css';
import Aside from '../components/Aside';
import img_paybycard from '../img/paybycard.png';
import img_map from '../img/map.png';

const Payment = () => {
    return(
        <div className='pagepayment'>

            <div className="payment__part style_text">
                <h1> Способы оплаты: </h1>
                <div className="sub__part__1 style_text">
                    <a href="#"><img alt="" src={img_paybycard} width="80" height="80" /> </a>
                    <h2>Оплата картой</h2>
                    <p>Для Вашего удобства Вы можете оплатить товар с помощью Вашей пластиковой карты онлайн режиме.</p>
                </div>

                <div className="sub__part__2 style_text">
                    <a href="#"><img alt="" src={img_map} width="80" height="80" /> </a>
                    <h2>Мы находимся в Воронеже</h2>
                    <p>Фридриха Энгельса 8a</p>
                </div>
            </div>

            <div className="aside__part style_text">
                <Aside />
            </div>



        </div>
    )
}

export default Payment;