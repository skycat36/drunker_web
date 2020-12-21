import React from 'react';
import './Catalogue.css';
import Aside from './Aside';
import img2 from '../img/catalogue_img1.jpg';
import img3 from '../img/catalogue_img2.jpg';
import img4 from '../img/catalogue_img3.jpg';
import img5 from '../img/catalogue_img4.jpg';
import img6 from '../img/catalogue_img5.jpg';
import img7 from '../img/catalogue_img6.jpg';

const Catalogue = () => {
    return(
    <div className='pagecatalogue'>
            <div className="catalogue__part">
                <h1>Магазин</h1>

                <div className="div_center div_text">
                    <img alt="" src={img2} />  <br/>
                    Ароматизированный чай
                    <hr/>
                    <a href="#">0 &#8381;</a>

                    <span class="parent_btn_buy">
                        <a href='#' class="btn_buy">КУПИТЬ</a>
                    </span> 
                </div>

                <div className="div_center div_text">
                    <img alt="" src={img3} />  <br/>
                    Зеленый чай
                    <hr/>
                    <a href="#">0 &#8381;</a>

                    <span class="parent_btn_buy">
                        <a href='#' class="btn_buy">КУПИТЬ</a>
                    </span> 
                </div>

                <div className="div_center div_text">
                    <img alt="" src={img4} />  <br/>
                    Шен Пуэр
                    <hr/>
                    <a href="#">0 &#8381;</a>

                    <span class="parent_btn_buy">
                        <a href='#' class="btn_buy">КУПИТЬ</a>
                    </span> 
                </div>

                <div className="div_center div_text">
                    <img alt="" src={img5} />  <br/>
                    Черный чай
                    <hr/>
                    <a href="#">0 &#8381;</a>

                    <span class="parent_btn_buy">
                        <a href='#' class="btn_buy">КУПИТЬ</a>
                    </span> 
                </div>

                <div className="div_center div_text">
                    <img alt="" src={img6} />  <br/>
                    Улун
                    <hr/>
                    <a href="#">0 &#8381;</a>

                    <span class="parent_btn_buy">
                        <a href='#' class="btn_buy">КУПИТЬ</a>
                    </span> 
                </div>

                <div className="div_center div_text">
                    <img alt="" src={img7} />  <br/>
                    Пуэр
                    <hr/>
                    <a href="#">0 &#8381;</a>

                    <span class="parent_btn_buy">
                        <a href='#' class="btn_buy">КУПИТЬ</a>
                    </span> 
                    
                </div>

                <span class="parent_btn_see_more">
                    <a href='#' class="btn_see_more">ДАЛЕЕ  &gt;</a>
                </span> 
        </div>


        <div className="aside__part style_text">
            <Aside />
        </div>
    </div>
    )
}

export default Catalogue;