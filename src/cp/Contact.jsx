import React from 'react'
import Menu from './Menu'
import { useState } from 'react'
import { send } from '@emailjs/browser'

function Contact() {

  const initialValues = {company: "", username: "", username2: "", phon: "", mail: "", massege: ""};
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const formItems = {
    company: formValues.company,
    user_name: formValues.username,
    user_name2: formValues.username2,
    user_phon: formValues.phon,
    user_email: formValues.mail,
    message: formValues.massege,
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({...formValues, [name]: value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmit(true);
    setFormErrors(validate(formValues));


    if(Object.keys(formErrors).length === 0 && isSubmit){
      send('service_5f876ur', 'template_pgncwcg', formItems, 'FTYyGYT9tu65HVkjk')
        .then((result) => {
          console.log(result.text);
        },(error) => {
          console.log(error.text)
        })
      console.log('Hello')
    }else{
      console.log('Bye')
    }

  }

    // バリデーションチェック

  const validate = (values) => {
      const errors = {};
      const regex = /^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/; 
      if(!values.company){
        errors.company ='会社名/屋号を入力してください。';
      }
      if(!values.username){
        errors.username ='担当者名を入力してください。';
      }
      if(!values.username2){
        errors.username2 ='担当者名フリガナを入力してください。';
      }
      if(!values.phon){
        errors.phon ='連絡先電話番号を入力してください。';
      }else if (values.phon.length >= 12 || values.phon.length <= 9) {
        errors.phon ='10-11桁の数字で入力してください'
      }
      if(!values.mail){
        errors.mail ='メールアドレスを入力してください。';
      }else if(!regex.test(values.mail)){
        errors.mail = 'メールアドレスを正しく入力して下さい'
      }
      if(!values.message){
        errors.message ='問い合わせ内容を入力してください。';
      }
      return errors;
  }

  return (
    <>
      <div className='header'>
          <div className="container">
              <h2 className="title">Contact</h2>
              <div className="formContainar">
                <form onSubmit={(e) => {handleSubmit(e)}}>
                  <div className='formField'>
                    <label>会社名</label>
                      <input type="text" name='company' className='formInput' onChange={(e) => handleChange(e)} />
                  </div>
                  <p className='errorMsg'>{formErrors.company}</p>
                  <div className='formField'>
                    <label>担当者名</label>
                      <input type="text" name='username' className='formInput' onChange={(e) => handleChange(e)} />
                  </div>
                  <p className='errorMsg'>{formErrors.username}</p>
                  <div className='formField'>
                    <label>担当者名（フリガナ）</label>
                      <input type="text" name='username2' className='formInput' onChange={(e) => handleChange(e)} />
                  </div>
                  <p className='errorMsg'>{formErrors.username2}</p>
                  <div className='formField'>
                    <label>連絡先電話番号</label>
                      <input type="text" name='phon' className='formInput' onChange={(e) => handleChange(e)} />
                  </div>
                  <p className='errorMsg'>{formErrors.phon}</p>
                  <div className='formField'>
                    <label>連絡先メールアドレス</label>
                      <input type="text" name='mail' className='formInput' onChange={(e) => handleChange(e)} />
                  </div>
                  <p className='errorMsg'>{formErrors.mail}</p>
                  <div className='formField'>
                    <label>問い合わせ内容</label>
                    <textarea name='message' className='formArea' id="area" cols="30" rows="5" onChange={(e) => handleChange(e)}/>
                  </div>
                  <p className='errorMsg'>{formErrors.massege}</p>
                  <button className='submitButton'>送信</button>
                  {Object.keys(formErrors).length === 0 && isSubmit && (
                    <div className='messageOk'>ログインに成功しました</div>
                  )}
                </form>
              </div>
          </div>
        <Menu />
      </div>
    </>
  )
}

export default Contact