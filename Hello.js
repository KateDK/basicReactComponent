

const Hello = (props)=>{
  const {name,num}= props;
  return (
    <div>
      <h1>{name}'s Lucky Number for today is: {num}</h1>
      <p>{num === 7 ? `Wow ${name}, number seven extra lucky!` : `Looks like a good number ${name}, but I wouldn't bet on it!`}</p>
  </div>
  );
};

//ReactDOM.render(<Hello />, document.getElementById('root'));

