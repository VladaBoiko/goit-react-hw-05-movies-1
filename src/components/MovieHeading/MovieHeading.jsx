import s from './movieHeading.module.css';

export default function MovieHeading({ text }) {
  return <h1 className={s.title}>{text}</h1>;
}