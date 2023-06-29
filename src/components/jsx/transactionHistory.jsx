import transactions from '../json/transactions';
const dataArray = transactions

  export const TransactionsHistory = (props) => {
    return (
      <table className="transaction-history">
  <thead>
    <tr className='theadRow'>
      <th >Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
  <tbody>
  {dataArray.map(item => (
        <tr className="transaction-item" key={item.id}>
      <td className='typeOfTransaction'>{item.type}</td>
      <td>{item.amount}</td>
      <td>{item.currency}</td>
    </tr>
    ))}
  </tbody>
</table>
    )
  }