import React from 'react'
import Menu from './Menu'
import {serviceDate} from './Date'
import {Link} from "react-router-dom";

const Service = () => {
  return (
    <>
      <div className='header'>
        <div className="container">
          <h1 className="title">Service</h1>
          {serviceDate.map((text, key) => {
            return <div className='text-containar' key={key}>
                      <h2 className="sub-title">{text.serviceTitle}</h2>
                      <p className="sub-text">{text.serviceText}</p>
                    </div> 
          })}
        </div>
        <Menu />
      </div>
    </>
  )
}

export default Service