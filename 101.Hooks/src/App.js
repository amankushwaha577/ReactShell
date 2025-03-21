
import UseEffect from './Components/D. SideEffects/6.UseEffect/UseEffect';
import UseMemo from './Components/C. Caching and Pausing Child Re-render/4.UseMemo/UseMemo';
import UseCallback from './Components/C. Caching and Pausing Child Re-render/5.UseCallback/UseCallback';

import DeaultValue from './Components/B. Context API/Examples/Defaultvalue';
import MultipleContextAPI from './Components/B. Context API/Examples/MultipleContextAPI';
import UseContext from './Components/B. Context API/3.UseContext/_1UseContext';
import DomAccess from './Components/E. Ref/8.UseRef/DomAccess';
import MutableValueWithNoRerender from './Components/E. Ref/8.UseRef/MutableValueWithNoRerender';
import MutableValue from './Components/E. Ref/8.UseRef/MutableValueWithNoRerender';
import ForwardRef from './Components/E. Ref/9.UseImperativehandle/ForwardRef';
import UseImperativeHandle from './Components/E. Ref/9.UseImperativehandle/UseImperativeHandle';
import UseLayoutEffect from './Components/D. SideEffects/7.UseLayoutEffect/UseLayoutEffect';

import UseState from './Components/A. State Management/1.UseState/UseState';
import UseReducer from './Components/A. State Management/2.UseReducer/UseReducer';

function App() {
  return (
    <div className="App">
      {/* A. State Management */}
      <UseState/> <hr/> {/* State */}
      <UseReducer/> <hr/> {/* State Management : Instead Of changing state again & again Change State Frequently By action */}

      {/* B. Context API */}
      <UseContext />  {/* State Management :  Avoid PropDrilling */}
      <MultipleContextAPI/> 
      <DeaultValue/> <hr/>

      {/* C. Caching and Pausing Child Re-render */}
      <UseMemo/> <hr/> {/* Value Memoization */}
      <UseCallback/> <hr/> {/* Function Memoization */}

      {/* D. SIdeEffects */}
      <UseEffect/> <hr/> {/* SideEffects */}
      <UseLayoutEffect/> {/* Runs After render but before paint + Synchronously*/}

      {/* E. Refs */}
      <DomAccess/>  {/*  directly referencing and manipulate DOM elements */}
      <MutableValueWithNoRerender/> <hr/> {/* Change Value without causing re-render */}

      <ForwardRef/> { /* To Access DOM element of Child,  parent sends a ref and Child take it using forwardRef(props, ref) */}
      <UseImperativeHandle/> <hr/>{/* Child uses useImperativeHandle to restrict parent to completely access DOM */}
    </div>
  );
}

export default App;
