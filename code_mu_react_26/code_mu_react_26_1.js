import './App.css'

function App() {
	function func(event) {
		console.log(event);
	}
	
	return <div>
		<button onClick={func}>act</button>
	</div>;
}
export default App;
