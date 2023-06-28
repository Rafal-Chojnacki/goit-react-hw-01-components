import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Profile } from 'components/jsx/profile';
import { Statistics } from 'components/jsx/statistics';
import { FriendList} from 'components/jsx/friendList';
import { TransactionsHistory} from 'components/jsx/transactionHistory';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Profile/>
    <Statistics/>
    <FriendList/>
    <TransactionsHistory/>
  </React.StrictMode>
);
