import logo from './logo.svg';
import './App.css';
import LazyLoading from './Components/LazyLoading/LazyLoading';
import ChildToParent from './Components/ChildToParent';
import ReactMemo from './Components/InBuildHOC/ReactMemo';
import ClassComponent from './Components/ClassComponent/ClassComponent';
import ConditionalRendering from './Components/ConditionalRendering';
import GET from './Components/APIs/GET';
import Capturing from './Components/Events/EventPrevention/StopPropagation/Capturing';
import BothBubblingTrickling from './Components/Events/EventPropagation/BothBubblingTrickling';
import Bubbling from './Components/Events/EventPropagation/Bubbling';
import EventDelegation from './Components/Events/EventDelegation/EventDelegation';

function App() {
  return (
    <div className="App">
      {/* 1. ConditionalRendering : Render Element on the basis of Condition */}
      <ConditionalRendering /><hr />

      {/* 2. Sending data from child to parent through callback function */}
      <ChildToParent /> <hr />

      {/* 3. Perfomance optimazation : by loading light component first and heavy after some suspense */}
      {/* <LazyLoading/><hr /> */}

      {/* 4. It renders component only when its props/state changes */}
      <ReactMemo /><hr />

      {/* 5. Just see structure and super constructor */}
      <ClassComponent /><hr />

      {/* 6. API Implementation */}
      <GET /> <hr />

      {/* 7.Event Propagation*/}
      <EventDelegation/>
      <Capturing />
      <Bubbling />
      <BothBubblingTrickling />
    </div>
  );
}

export default App;
