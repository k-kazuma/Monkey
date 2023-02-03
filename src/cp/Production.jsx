import React from 'react'
import Menu from './Menu'
import { productionDate } from './Date';
import {Link} from "react-router-dom";


function Production() {
  return (
    <>
      <div className='header'>
          <div className="container">
              <div className="title">Production</div>
              {productionDate.map((title, key) => {
                return (
                  <>
                    <div className="text-containar">
                    <h2 className="sub-title" key={key}>{title.productionNumber} → {title.productionTitle}</h2>
                    <p className="sub-text" key={key}>
                        {title.productionText}
                    </p>
                    </div>
                  </>
                )
              })}
          </div>
        <Menu />
      </div>
    </>
  )
}

export default Production