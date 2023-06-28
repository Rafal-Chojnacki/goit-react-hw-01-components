import transactions from './transactions.json';
const dataArray = transactions.map(transaction => ({
    id: transaction.id,
    type: transaction.type,
    amount: transaction.amount,
    currency: transaction.currency
  }));
  console.log(dataArray);

  export const TransactionsHistory = (props) => {
    return (
        <section>
    <ul>
      {dataArray.map(item => (
        <li className="item" key={item.id}>
          <span className="type">{item.type}</span>
          <span className="amount">{item.amount}</span>
          <span className="currency">{item.currency}</span>
        </li>
      ))}
    </ul>
    </section>
    )
  }