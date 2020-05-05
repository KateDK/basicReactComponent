const todaysLuckyNumber = () =>{
  return Math.floor(Math.random() * 10) +1;
};

const Hello = ()=>{
  const num = todaysLuckyNumber();
  return (
    <div>
    <h1>Hello World from React Component</h1>
    <h2>Today's Lucky Number is: {num}</h2>
  <p>{num === 7 ? "Wow, number seven extra lucky!" : "Looks like a good number, but I wouldn't bet on it!"}</p>
  </div>
  );
};

ReactDOM.render(<Hello />, document.getElementById('root'));

