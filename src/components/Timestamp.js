function TimeStamp(props){
  const {tweets} = props;
  return (
      <div>
        <span className="timestamp">{props.timestamp}</span>
      </div>
  )
}

export default TimeStamp