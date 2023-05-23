import s from './letters.module.css'
// import s from './spinner.module.css'

export default function Spinner() {
  return (
    // <div className={s.spinner}>
    //   <span className={s.bounce__circle}></span>
    //   <span className={s.bounce__circle}></span>
    //   <span className={s.bounce__circle}></span>
    // </div>
    <div className={s.letter_container}>
      <span className={s.let1}>l</span>
      <span className={s.let2}>o</span>
      <span className={s.let3}>a</span>
      <span className={s.let4}>d</span>
      <span className={s.let5}>i</span>
      <span className={s.let6}>n</span>
      <span className={s.let7}>g</span>
    </div>
  );
}