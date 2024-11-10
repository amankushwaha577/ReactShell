import logo from './logo.svg';
import './App.css';
import LazyLoading from './Components/LazyLoading/LazyLoading';
import ChildToParent from './Components/ChildToParent';
import ReactMemo from './Components/InBuildHOC/ReactMemo';

function App() {
  return (
    <div className="App">
      {/* <LazyLoading/> */}
      <ChildToParent/> <hr/>
      <ReactMemo/>
    </div>
  );
}

export default App;
