
import data from '../json/data';

  const dataArray = data

export const Statistics = () => {
  return (
    <section className="statistics">
    <h2 className="title">Upload stats</h2>
    <ul className="stat-list">
      {dataArray.map(item => (
        <li className="item" key={item.id}>
          <span className="label-stats">{item.label}</span>
          <span className="percentage">{item.percentage}%</span>
        </li>
      ))}
    </ul>
    </section>
  )
  }
