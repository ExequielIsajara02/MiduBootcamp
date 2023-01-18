import './App.css';
import Mensaje from './Mensaje';


const Description = () => {
  return <p>This is an App for the Bootcamp course</p>
}

function App() {
  return (
    <div className="App">
      <Mensaje color="red" message="We are working"/>
      <Mensaje color="blue" message="In a React"/>
      <Mensaje color="green" message="Course"/>
      <Description  />
    </div>
  );
}

export default App;
