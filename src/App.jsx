import { Profile } from "./components/profile/profile";
import { Statistics } from "./components/statistics/statistics";
import { FriendList } from "./components/friends/friendList";
import { TransactionsHistory } from "./components/transactions/transactionHistory";
export const App = () => {
    return (
      <>
        <Profile/>
        <Statistics/>
        <FriendList/>
        <TransactionsHistory/>
      </>
    )
  };