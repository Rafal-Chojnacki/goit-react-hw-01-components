import PropTypes from "prop-types";
import data from './data';
import css from "./statistics.module.css";

  const dataArray = data
let colors = ['#7CAEEE', '#CF7CEE', '#E91C51', '#4b9fff'];
export const Statistics = () => {
  return (
    
    <section className={css.statistics}>
    <h2 className={css.title}>Upload stats</h2>
    <ul className={css.list}>
      {dataArray.map(item => (
        <li className={css.item} key={item.id}
        style={{
          backgroundColor: colors[Math.floor(Math.random() * colors.length)]
        }}>
          <span className={css.label}>{item.label}</span>
          <span className={css.percentage}>{item.percentage}%</span>
        </li>
      ))}
    </ul>
    </section>
  )
  }


  Statistics.propTypes = {
    id: PropTypes.number,
    label: PropTypes.string,
    percentage: PropTypes.number,
  };