function Message(props){
  const {tweets} = props;
  return(
      <div>
          <p className="message">
              {props.message}
          </p>
      </div>
  )
}

export default Message