
import { useId } from 'react';
import css from './Form.module.css'


const LoginForm = () => {
  const loginId = useId()
  const passwordId = useId()
  const handleSubmit = (evt) =>{
  evt.preventDefault();
  const form = evt.target;
  const { login, password } = form.elements;
  console.log(login, password);
  console.log(login.value, password.value)
  form.reset();
  }

  return (
    <div className={css.div}>
      <h1>Please login to your account!</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor={loginId}>login</label>
        <input className={css.text} type='text' id={loginId} name='login' />
        <label htmlFor={passwordId}>password</label>
    <input className={css.password} type='password' name='password' id={passwordId} />
    <button className={css.btn} type='submit'>Login</button>
      </form>
      </div>
);
}

export default LoginForm