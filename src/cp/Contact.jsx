import React from 'react'
import Menu from './Menu'
import { useState } from 'react'
import {init, send} from '@emailjs/browser'


// const sendMail = () => {

// }

function Contact() {

  const [company, setCompany] = useState('')
  const [name, setName] = useState('')
  const [name2, setName2] = useState('')
  const [phon, setPhon] = useState('')
  const [mail, setMail] = useState('')
  const [message, setMessage] = useState('')

  const contactTitle = [
    {
        name: '会社名 / 屋号',
        id:'f1',
        set: setCompany,
        val: company
    },
    {
        name: '氏名',
        id:'f2',
        set: setName,
        val: name
    },
    {
        name: 'フリガナ',
        id:'f3',
        set: setName2,
        val: name2
    },
    {
        name: '電話番号',
        id:'f4',
        set: setPhon,
        val:phon
    },
    {
        name: 'メールアドレス',
        id:'f5',
        set: setMail,
        val: mail
    },
  ]

  const clickSendMail = () => {

    init("FTYyGYT9tu65HVkjk");

    const templateVariables = {
      company: company,
      user_name: name,
      user_name2: name2,
      user_email: mail,
      user_phon: phon,
      message: message,
    };
  
    send(
      'service_5f876ur',
      'template_pgncwcg',
      templateVariables
    );
  }




  return (
    <>
      <div className='header'>
          <div className="container">
              <div className="title">Contact</div>
              <form>
                {
                  contactTitle.map((title, key) => {
                    return (
                        <div key={key}>
                          <label htmlFor={title.id}>{title.name}</label>
                          <input 
                          type="text" 
                          id={title.id} 
                          value={title.val}
                          className='fromInput' 
                          onChange={(e) => title.set(e.target.value)}
                          />
                        </div>
                    )
                  }) 
                }
                <label htmlFor="area">問い合わせ内容</label>
                <textarea 
                id="area" 
                cols="30" 
                rows="5"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                />
                <button
                onClick={clickSendMail}
                >
                  送信
                </button>
              </form>
          </div>
        <Menu />
      </div>
    </>
  )
}

export default Contact