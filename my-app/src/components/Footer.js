import React from "react";
import "./Footer.css";

const Footer =() => {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h4>КАТАЛОГ</h4>
              <li><a className="footerLinks" href="#">Пуэр</a></li>
              <li><a className="footerLinks" href="#">Зеленый чай</a></li>
              <li><a className="footerLinks" href="#">Черный чай</a></li>
              <li><a className="footerLinks" href="#">Ароматизированный</a></li>
          </div>
          {/* Column2 */}
          <div className="col">
            <ui className="list-unstyled">
              <li>Шен Пуэр</li>
              <li>Ароматизированные чай</li>
              <li>Улун</li>
              <li>Красный чай</li>
            </ui>
          </div>
          {/* Column3 */}
          <div className="col">
            <h4>МЕНЮ</h4>
              <li><a className="footerLinks" href="#">Каталог товаров</a></li>
              <li><a className="footerLinks" href="#">Оплата и доставка</a></li>
              <li><a className="footerLinks" href="#">Оптовикам</a></li>
              <li><a className="footerLinks" href="#">Контакты</a></li>
              <li><a className="footerLinks" href="#">Блог</a></li>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy; {new Date().getFullYear()} Чайный горизонт
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;