import React from 'react'
import {Link} from "react-router-dom";
import {useState, useEffect} from 'react';



function Menu() {

  const [classAdd, addClass] = useState(false);
  console.log(classAdd);

  const classToggle = () => {
    addClass(!classAdd)
  }

  return (
    <div>
        <div className={`menu-nav ${classAdd ? "invew" : ""}`}>
            <ul className="menu-containar">
                <li className="menu-item">
                  <Link to="/">Top</Link>
                </li>
                <li className="menu-item">
                  <Link to="/service">サービス</Link>
                </li>
                <li className="menu-item">
                  <Link to="/production">制作の流れ</Link>
                </li>
                <li className="menu-item">
                  <Link to="/profile">プロフィール</Link>
                </li>
                <li className="menu-item">
                  <Link to="/contact">問い合わせ</Link>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Menu