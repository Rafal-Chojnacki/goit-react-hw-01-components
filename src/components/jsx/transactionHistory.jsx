import PropTypes from 'prop-types';
import transactions from '../json/transactions';
import css from '../module.css/transactionHistory.module.css';
const dataArray = transactions

  export const TransactionsHistory = () => {
    return (
      <table className={css.transactionHistory}>
  <thead>
    <tr className={css.theadRow}>
      <th >Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
  <tbody>
  {dataArray.map(item => (
        <tr className={css.transactionItem} key={item.id}>
      <td className={css.typeOfTransaction}>{item.type}</td>
      <td>{item.amount}</td>
      <td>{item.currency}</td>
    </tr>
    ))}
  </tbody>
</table>
    )
  }

  TransactionsHistory.propTypes = {
    type: PropTypes.string,
    amount: PropTypes.number,
    currency: PropTypes.string,
  };