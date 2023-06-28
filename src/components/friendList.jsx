import friends from './friends.json';
console.log(JSON.stringify(friends));
const dataArray = friends.map(friend => ({
    id: friend.id,
    avatar: friend.avatar,
    name: friend.name,
    isOnLine: friend.isOnLine,
  }));
export const FriendList = (props) => {
    return (
        <ul className="friend-list">
      {dataArray.map(item => (
        <li className="friend" key={item.id}>
          <div className="onLine">{item.isOnLine}</div>
          <img src={item.avatar} alt="User avatar" className="friendAvatar"/>
          <span className="friendName">{item.name}</span>
        </li>
      ))}
    </ul>)

}