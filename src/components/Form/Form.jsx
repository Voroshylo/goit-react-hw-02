
import { useId, useState } from 'react';
import css from './Form.module.css'


const LoginForm = () => {
  const loginId = useId();
  const passwordId = useId()
  const selectId = useId()
  const [formData, setFormData] = useState({
    login: '',
    password: '',
  })
  
  const handleSubmit = evt => {
    evt.preventDefault();
    setFormData({
      login: "",
      password: ""
    })

  };

  const handleChangeInput = evt => {
    const { name, value } = evt.target
    console.log(name, value)
    setFormData({ ...formData, [name]: value })
  };
  return (
    <div className={css.div}>
      <h1>Please login to your account!</h1>
      <form className={css.form} onSubmit={handleSubmit}>
        <label  >
          <span className={css.span}>
            Login
          </span>
        </label>
        <input
          onChange={handleChangeInput}
          value={formData.login}
          placeholder='login:'
          className={css.text}
          id = {loginId}
          type='text'
          name='login' />
        <label  >
          <span className={css.span}>Password</span>
        </label>
        <input
          onChange={handleChangeInput}
          value={formData.password}
          placeholder='password:'
          className={css.password}
          id = {passwordId}
          type='password'
          name='password'
        />
        <label htmlFor={selectId}>
          <span className={css.span}>Country</span>
        
          <select 
            id={selectId}
          value={formData.country}
          onChange={handleChangeInput}
          className={css.select}
            name='country'>
            
          <option value='uk'>Ukraine</option>
          <option value='en'>English</option>
          <option value='fr'>France</option>
            <option value='usa'>USA</option>
            
          </select>
          </label>
    <button className={css.btn} type='submit'>Login</button>
      </form>
      </div>
);
}

export default LoginForm