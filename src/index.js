import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Profile } from 'components/profile';
import { Statistics } from 'components/statistics';
import { FriendList} from 'components/friendList';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Profile/>
    <Statistics/>
    <FriendList/>
  </React.StrictMode>
);
