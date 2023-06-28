
import data from './data.json';

  const dataArray = data.map(item => ({
    id: item.id,
    label: item.label,
    percentage: item.percentage,
  }));
  console.log(dataArray);


export const Statistics = (props) => {
  return (
    <section className="statistics">
    <h2 className="title">Upload stats</h2>
    <ul className="stat-list">
      {dataArray.map(item => (
        <li className="item" key={item.id}>
          <span className="label-stats">{item.label}</span>
          <span className="percentage">{item.percentage}</span>
        </li>
      ))}
    </ul>
    </section>
  )
  }
