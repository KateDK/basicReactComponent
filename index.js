const todaysLuckyNumber = () =>{
  const nums = [1,2,3,4,5,6,7,8,9,10];
  return nums[Math.floor(Math.random() * nums.length)];
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

