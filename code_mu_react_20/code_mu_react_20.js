import './App.css'

function App() {
	const isAuth = true;
	
	return <div>
		{isAuth && <p>вы авторизованы</p>}
	</div>;
	
}
export default App;
