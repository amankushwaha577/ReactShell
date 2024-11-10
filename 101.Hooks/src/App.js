import UseState from './Components/1.UseState/UseState';
import UseEffect from './Components/2.UseEffect/UseEffect';
import UseMemo from './Components/3.UseMemo/UseMemo';
import UseCallback from './Components/4.UseCallback/UseCallback';
import UseReducer from './Components/5.UseReducer/UseReducer';
import DeaultValue from './Components/6.UseContext/Defaultvalue';
import MultipleContextAPI from './Components/6.UseContext/MultipleContextAPI';
import UseContext from './Components/6.UseContext/UseContext';
import DomAccess from './Components/7.UseRef/DomAccess';
import MutableValueWithNoRerender from './Components/7.UseRef/MutableValueWithNoRerender';
import MutableValue from './Components/7.UseRef/MutableValueWithNoRerender';
import ForwardRef from './Components/8.UseImperativehandle/ForwardRef';
import UseImperativeHandle from './Components/8.UseImperativehandle/UseImperativeHandle';
import UseLayoutEffect from './Components/9.UseLayoutEffect/UseLayoutEffect';

function App() {
  return (
    <div className="App">
      <UseState/> <hr/> {/* State */}

      <UseEffect/> <hr/> {/* SideEffects */}

      <UseMemo/> <hr/> {/* Value Memoization */}
      <UseCallback/> <hr/> {/* Function Memoization */}

      <UseReducer/> <hr/> {/* State Management : Instead Of changing state again & again Change State Frequently By action */}

      <UseContext />  {/* State Management :  Avoid PropDrilling */}
      <MultipleContextAPI/> 
      <DeaultValue/> <hr/>

      <DomAccess/>  {/*  directly referencing and manipulate DOM elements */}
      <MutableValueWithNoRerender/> <hr/> {/* Change Value without causing re-render */}

      <ForwardRef/> { /* To Access DOM element of Child,  parent sends a ref and Child take it using forwardRef(props, ref) */}
      <UseImperativeHandle/> <hr/>{/* Child uses useImperativeHandle to restrict parent to completely access DOM */}

      <UseLayoutEffect/>
      

      

    </div>
  );
}

export default App;
