import React from 'react';
import '../components/Aside.css';

const Aside = () => {
    return(
        <div className="aside__object">
            {/* SearchBar*/}
            <div class="input-group md-form form-sm form-1 pl-0">
                <div class="input-group-prepend">
                    <span class="input-group-text purple lighten-3" id="basic-text1"><i class="fas fa-search text-white"
                        aria-hidden="true"></i></span>
                </div>
                <input class="form-control my-0 py-1" type="text" placeholder="Поиск" aria-label="Search" />
            </div>

            {/*End SearchBar*/}


            {/*Liste of links*/}
            <ul>
                <li><a href="#" className="nav-link">Шу Пуэр</a></li>
                <li><a href="#" className="nav-link">Шен Пуэр</a></li>
                <li><a href="#" className="nav-link">Красный чай</a></li>
                <li><a href="#" className="nav-link">Зеленый чай</a></li>
                <li><a href="#" className="nav-link">Черный чай</a></li>
                <li><a href="#" className="nav-link">Улун</a></li>
            </ul>
        </div>
    )
}

export default Aside;