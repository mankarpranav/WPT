import logo from './logo.svg';
import flowers from './flowers.png'
import './App.css';
import RegistrationForm from './components/RegistrationForm'
function App() {
  return (
    <div>
    <img src={flowers} width="200px" height="200px"></img>
      <RegistrationForm/>
    </div>
  );
}

export default App;
