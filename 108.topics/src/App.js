import logo from './logo.svg';
import './App.css';
import LazyLoading from './Components/LazyLoading/LazyLoading';
import ChildToParent from './Components/ChildToParent';
import HOC from './Components/HOC/HOC';

function App() {
  return (
    <div className="App">
      {/* <LazyLoading/> */}
      <ChildToParent/> <hr/>
      <HOC/>
    </div>
  );
}

export default App;
