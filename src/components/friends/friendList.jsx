import PropTypes from "prop-types";
import friends from './friends';
import css from "./friendList.module.css";

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

FriendList.propTypes = {
  id: PropTypes.number,
  isOnline: PropTypes.bool,
  avatar: PropTypes.string,
  name: PropTypes.string,
};