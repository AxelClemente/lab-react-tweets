import ProfileImage from "./ProfileImage";
import User from "./User";
import Actions from "./Actions";
import Timestamp from "./Timestamp";
import Message from "./Message";

function Tweet(props) {
  return (
    <div className="tweet">
      <ProfileImage image={props.tweets.user.image}/>
      
      <div className="body">
        <div className="top">
          <span className="user">
            <span className="name">{props.tweets.user.name}</span>
            <span className="handle">{props.tweets.user.handle}</span>
          </span>

          <span className="timestamp">{props.tweets.timestamp}</span>
        </div>

        <p className="message">
          {props.tweets.message} 🚀          
        </p>

        <div className="actions">
          <Actions />
        </div>
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>

    
  );
}

export default Tweet;
