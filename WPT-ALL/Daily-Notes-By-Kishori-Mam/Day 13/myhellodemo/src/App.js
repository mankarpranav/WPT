import logo from './logo.svg';
import './App.css';
import MyHeader from './components/MyHeader';
import CounterComponent from './components/CounterComponent';
function App() {
  return (
    <div className="App">
      <MyHeader></MyHeader>
      <h1>Hello world!!</h1>
      <h3>Welcome to React programming!!!</h3>
      <hr></hr>
      <CounterComponent></CounterComponent>
    </div>
  );
}

export default App;
