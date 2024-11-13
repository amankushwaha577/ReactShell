import logo from './logo.svg';
import './App.css';
import { useSelector } from 'react-redux';

function App() {
  const {data1} = useSelector((state) => state.award);
  return (
    <div className="App">
      <h1>Hello</h1>
     {data1}
    </div>
  );
}

export default App;
