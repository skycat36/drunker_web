import React from 'react';
import './Contact.css';

const Contact = () => {
    return(
        <div>
        <div className="pagecontact">
            <div className="contacts">
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

export default Contact;