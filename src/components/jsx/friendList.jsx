import friends from '../json/friends';
import css from "../module.css/friendList.module.css";

  const FriendListItem = () => {
  const dataArray = friends

    return (<ul className={css.friendList}>
 {dataArray.map(item => (
            <li className={css.friend} key={item.id}>
              <div className={css.onLine}>{item.isOnLine}</div>
              <img src={item.avatar} alt="User avatar" className={css.friendAvatar}/>
              <span className={css.friendName}>{item.name}</span>
            </li>
          ))}
    </ul>)}
       
export const FriendList = (props) => {
    return (  
      <FriendListItem/>
    )
}