import { useId, useState } from 'react'
import css from './Radio.module.css'
const RadioTap = () => {
  const radioId = useId()
  const [coffeeSize, setCoffeeSize] = useState( 'sm')

  const handleSizeChange = evt => {
    const { name, value } = evt.target
    console.log(name, value)
    setCoffeeSize(evt.target.value);
  };
  

  return (
    <div className={css.div}>
      <h2 className={css.title}>Select coffee size</h2>
      <label className={css.label}>Small
        <input
          id={radioId}
          type='radio'
          name='coffeeSize'
          value='sm'
          checked={coffeeSize === 'sm'}
          onChange={handleSizeChange}
          className={css.input}
        >
        </input>
        
        </label>
        <label className={css.label}>Medium
        <input
          id={radioId}
          type='radio'
          name='coffeeSize'
          value='md'
          checked={coffeeSize === 'md'}
          onChange={handleSizeChange}
          className={css.input}
        >
          </input>
          </label>
        <label className={css.label}>Large
        <input
          id={radioId}
          type='radio'
          name='coffeeSize'
          value='lg'
          checked={coffeeSize === 'lg'}
          onChange={handleSizeChange}
          className={css.input}
        >
        </input>
      </label>
  </div>
)

}
export default RadioTap