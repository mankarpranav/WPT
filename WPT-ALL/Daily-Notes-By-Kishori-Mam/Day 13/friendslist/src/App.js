import logo from './logo.svg';
import MyHeader from './components/MyHeader';
import MyFriendsList  from './components/MyFriendList'
import './App.css';

function App() {
  return (
    <div>
    <MyHeader></MyHeader>
      <h1>Hello World!!</h1>
      <MyFriendsList></MyFriendsList>
    </div>
  );
}

export default App;
