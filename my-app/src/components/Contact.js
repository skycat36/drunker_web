import React from 'react';
import './Contact.css';
import Aside from './Aside';

const Contact = () => {
    return(

        <div className='pagecontact'>
            <div className="contact__part style_text">
            <h1>Наши Контакты:</h1>
                <h2>E-mail:</h2>
                <p>
                    <a href="mailto:alioungordiouf@gmail.com">alioungordiouf@gmail.com</a>
                </p>

                <h2>Телефон:</h2>
                <p>
                    8-950-760-53-77
                </p>

                <h2>Адрес:</h2>
                <p>
                    Фридриха Энгельса 8а
                </p>
            </div>

            <div className="aside__part style_text">
                <Aside />
            </div>
        </div>
    )
}

export default Contact;