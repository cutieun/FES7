function Hello(props) {
  console.log(props);
  const name = '라이캣!';
  const someStyle = {backgroundColor:"black", color:"white"};

  return (
    <div>
      <div>
        <h1 style={someStyle}>안녕, {props.name} 1호</h1>
        <h1>안녕, 라이캣 2호!</h1>
        <div className="newClass"/>
      </div>
    </div>
  )
}

export default Hello;