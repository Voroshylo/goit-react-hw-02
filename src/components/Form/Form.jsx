
import { useId, useState } from 'react';
import css from './Form.module.css'


const LoginForm = () => {
  const loginId = useId();
  const passwordId = useId()
  const [formData, setFormData] = useState({
    login: '',
    password: '',
  })
  
  const handleSubmit = evt => {
    evt.preventDefault();

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
        <label>
          <span className={css.span}>Country</span>
        </label>
        <select 
          value={formData.country}
          onChange={handleChangeInput}
          className={css.text}
          name='country'>
          <option value='Ukraine'>Ukraine</option>
          <option value='Poland'>Poland</option>
          <option value='France'>France</option>
          <option value='USA'>USA</option>
          </select>
    <button className={css.btn} type='submit'>Login</button>
      </form>
      </div>
);
}

export default LoginForm