import FriendListItem from "./FriendListItem"; 

const FriendList = ({ friends }) => {
  return (
    <ul>
      {friends.map(friend => (
        <li key={friend.id}>
          <FriendListItem
            name={friend.name}
            avatar={friend.avatar}
            isOnline={friend.isOnline}
          />
        </li>
      ))}
    </ul>
  );
};

export default FriendList;