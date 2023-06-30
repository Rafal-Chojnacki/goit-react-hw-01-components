import friends from '../json/friends';
import css from "../module.css/friendList.module.css";

  const FriendListItem = () => {
  const dataArray = friends;
  
    return (<ul className={css.list}>

 {dataArray.map(item => (
            <li className={css.friend} key={item.id}>
              {item.isOnline === true ? 
              (<div className={css.onLine}>{item.isOnline}</div>)
              :
              (<div className={css.offLine}>{item.isOnline}</div>)
               }
              <img src={item.avatar} alt="User avatar" className={css.avatar}/>
              <span className={css.name}>{item.name}</span>
            </li>
            
          ))}
    </ul>)}

export const FriendList = (props) => {
    return (  
      <FriendListItem/>
    )
}