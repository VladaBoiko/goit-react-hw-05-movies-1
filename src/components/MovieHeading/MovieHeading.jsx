import propTypes from 'prop-types';
import s from './movieHeading.module.css';

export default function MovieHeading({ text }) {
  return <h1 className={s.title}>{text}</h1>;
}

MovieHeading.propTypes = {
  text: propTypes.string,
};