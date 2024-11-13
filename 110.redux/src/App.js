import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { function1 } from "./store/awards/awardAction";

function App() {
  const { data1 } = useSelector((state) => state.award);
  const dispatch = useDispatch();
  const data = 9999999999;
  return (
    <div className="App">
      <h1>Hello</h1>
      <button onClick={() => dispatch(function1(data))}>Button</button>
      {data1}
    </div>
  );
}

export default App;
