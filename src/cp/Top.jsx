import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";

function Top() {

  const [classAdd, addClass] = useState('');

  const loadAdd = () => {
    addClass('invew')
  }

  useEffect(() => {
    loadAdd();
  })

  const title = 'Web制作Monkey';
  const aryTitle = [...title]

  
  return (
    <div className='header'>
        <div className={`header-title ${classAdd}`}>
          {
            aryTitle.map((title, index) => {
              return <span className='chara' key={index}>{title}</span>
            })
          }
        </div>
        <div className={`header-nav ${classAdd}`}>
            <ul>
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

export default Top