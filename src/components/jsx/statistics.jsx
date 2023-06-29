
import data from '../json/data';
import css from "../module.css/statistics.module.css";

  const dataArray = data

export const Statistics = () => {
  return (
    <section className={css.statistics}>
    <h2 className={css.title}>Upload stats</h2>
    <ul className={css.statList}>
      {dataArray.map(item => (
        <li className={css.item} key={item.id}>
          <span className={css.labelStats}>{item.label}</span>
          <span className={css.percentage}>{item.percentage}%</span>
        </li>
      ))}
    </ul>
    </section>
  )
  }
