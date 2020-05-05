const todaysLuckyNumber = () =>{
  return Math.floor(Math.random() * 10) +1;
};

const Hello = ()=>{
  return (
    <div>
    <h1>Hello World from React Component</h1>
    <h2>Today's Lucky Number is: {todaysLuckyNumber()}</h2>
  </div>
  );
};

ReactDOM.render(<Hello />, document.getElementById('root'));

