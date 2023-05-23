import s from './spinner.module.css'

export default function Spinner() {
  return (
    <div className={s.spinner}>
      <span className={s.bounce__circle}></span>
      <span className={s.bounce__circle}></span>
      <span className={s.bounce__circle}></span>
    </div>)
}