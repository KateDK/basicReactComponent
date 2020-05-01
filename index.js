class Hello extends React.Component{
  render(){
    return (
			<div>
        <h1>Hello World from React Component</h1>
        <p>Im a paragraph inside the component</p>
				<h2>Hello there!</h2>
			</div>
		);
  }
}

ReactDOM.render(<Hello />, document.getElementById('root'));

