import css from './Option.module.css'
const Option = () => {
  return (
    <div>
      <button className={css.btn}>Good</button>
      <button className={css.btn}>Neutral</button>
      <button className={css.btn}>Bad</button>
      <button className={css.btn}>Reset</button>
    </div>
  )
}
export default Option