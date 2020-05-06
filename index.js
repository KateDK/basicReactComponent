const todaysLuckyNumber = () =>{
  return Math.floor(Math.random() * 10) +1;
};

class App extends React.Component{
  render(){
    return (
      <div>
        <Hello name="Daniel" num={todaysLuckyNumber()}/>
        <Hello name="Kate" num={todaysLuckyNumber()}/>

      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

