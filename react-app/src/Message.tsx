function Message(){
    const name = "Sarthak";
    if(name)return <h1>HELLO FROM MESSAGE COMPONENT BY {name}</h1>
    else return (
      <h1 >
        Provide Name
      </h1>
    );
}

export default Message;