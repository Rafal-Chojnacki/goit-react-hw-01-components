import { Profile } from "./profile";
import { Statistics } from "./statistics";
import { FriendList } from "./friendList";
import { TransactionsHistory } from "./transactionHistory";
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