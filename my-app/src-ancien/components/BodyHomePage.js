import React from 'react';
  import './BodyHomePage.css';
import img1 from '../img/kupit-chai1.png';
import img2 from '../img/kupit-chai2.png';
import img3 from '../img/kupit-chai3.png';
import img4 from '../img/kupit-chai4.png';
import img5 from '../img/kupit-chai5.png';
import img6 from '../img/kupit-chai6.png';
import img7 from '../img/kupit-chai7.png';

function BodyHomePage(){
	return (
    <div className="containerBodyHomePage">
        <h1>Интернет-магазин китайского чая</h1>

        <div className="div_center div_text">
            <img alt="" src={img2} />  <br/>
            Ароматизированный чай
            <hr/>
            <a href="#">ПОДРОБНЕЕ &gt;</a>
        </div>

        <div className="div_center div_text">
            <img alt="" src={img3} />  <br/>
            Зеленый чай
            <hr/>
            <a href="#">ПОДРОБНЕЕ &gt;</a>
        </div>

        <div className="div_center div_text">
            <img alt="" src={img4} />  <br/>
            Шен Пуэр
            <hr/>
            <a href="#">ПОДРОБНЕЕ &gt;</a>
        </div>

        <div className="div_center div_text">
            <img alt="" src={img5} />  <br/>
            Черный чай
            <hr/>
            <a href="#">ПОДРОБНЕЕ &gt;</a>
        </div>

        <div className="div_center div_text">
            <img alt="" src={img6} />  <br/>
            Улун
            <hr/>
            <a href="#">ПОДРОБНЕЕ &gt;</a>
        </div>

        <div className="div_center div_text">
            <img alt="" src={img7} />  <br/>
            Пуэр
            <hr/>
            <a href="#">ПОДРОБНЕЕ &gt;</a>
        </div>

        <span><a className="button_more">Посмотреть весь каталог</a></span>
    </div>

	)
}

export default BodyHomePage;