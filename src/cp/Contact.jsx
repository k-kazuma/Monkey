import React from 'react'
import Menu from './Menu'
import { useState } from 'react'
// import {init, send} from '@emailjs/browser'

function Contact() {

  const initialValues = {company: "", username: "", username2: "", phon: "", mail: "", massege: ""};
  const [formValues, setFormValues] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({...formValues, [name]: value});
  }




  return (
    <>
      <div className='header'>
          <div className="container">
              <h2 className="title">Contact</h2>
              <div className="formContainar">
                <form>
                  <div className='formField'>
                    <label>会社名</label>
                      <input type="text" name='company' className='formInput' onChange={(e) => handleChange(e)} />
                  </div>
                  <div className='formField'>
                    <label>担当者名</label>
                      <input type="text" name='username' className='formInput' onChange={(e) => handleChange(e)} />
                  </div>
                  <div className='formField'>
                    <label>担当者名（フリガナ）</label>
                      <input type="text" name='username2' className='formInput' onChange={(e) => handleChange(e)} />
                  </div>
                  <div className='formField'>
                    <label>連絡先電話番号</label>
                      <input type="text" name='phon' className='formInput' onChange={(e) => handleChange(e)} />
                  </div>
                  <div className='formField'>
                    <label>連絡先メールアドレス</label>
                      <input type="text" name='mail' className='formInput' onChange={(e) => handleChange(e)} />
                  </div>
                  <div className='formField'>
                    <label>問い合わせ内容</label>
                    <textarea name='message' className='formArea' id="area" cols="30" rows="5"/>
                  </div>
                  <button className='submitButton'>送信</button>
                </form>
              </div>
          </div>
        <Menu />
      </div>
    </>
  )
}

export default Contact