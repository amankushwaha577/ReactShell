import logo from './logo.svg';
import './App.css';
import LazyLoading from './Components/LazyLoading/LazyLoading';
import ChildToParent from './Components/ChildToParent';
import ReactMemo from './Components/InBuildHOC/ReactMemo';
import ClassComponent from './Components/ClassComponent/ClassComponent';
import ConditionalRendering from './Components/ConditionalRendering';

function App() {
  return (
    <div className="App">
      <ConditionalRendering /><hr />
      <ChildToParent /> <hr />
      {/* <LazyLoading/><hr /> */}
      
      <ReactMemo />

      <ClassComponent />
    </div>
  );
}

export default App;
