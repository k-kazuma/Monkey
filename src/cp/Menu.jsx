import React from 'react'
import {Link} from "react-router-dom";



function Menu() {

  return (
    <div>
        <div className={`menu-nav`}>
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