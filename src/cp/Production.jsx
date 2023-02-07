import React from 'react'
import Menu from './Menu'
import { productionDate } from './Date';
import {Link} from "react-router-dom";


function Production() {

  const productionNumber = productionDate.map((title, key) => {
    return (
      <span key={key}>{title.productionNumber}</span>
    )
  })


  return (
    <>
      <div className='header'>
          <div className="container">
              <div className="title">Production</div>
              {/* {productionNumber} */}
              {productionDate.map((title, key) => {
                return (
                    <div className="text-containar" key={key}>
                      <h2 className="sub-title">{title.productionNumber} → {title.productionTitle}</h2>
                      <p className="sub-text">
                          {title.productionText}
                      </p>
                    </div>
                )
              })}
          </div>
        <Menu />
      </div>
    </>
  )
}

export default Production