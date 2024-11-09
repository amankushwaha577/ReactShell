import UseState from './Components/1.UseState/UseState';
import UseEffect from './Components/2.UseEffect/UseEffect';
import UseMemo from './Components/3.UseMemo/UseMemo';
import UseCallback from './Components/4.UseCallback/UseCallback';
import UseReducer from './Components/5.UseReducer/UseReducer';
import UseContext from './Components/6.UseContext/UseContext';

function App() {
  return (
    <div className="App">
      <UseState/> <hr/> {/* State */}

      <UseEffect/> <hr/> {/* SideEffects */}

      <UseMemo/> <hr/> {/* Value Memoization */}
      <UseCallback/> <hr/> {/* Function Memoization */}

      <UseReducer/> <hr/> {/* State Management : Change State Frequently By action */}
      <UseContext /> <hr/> {/* State Management :  Avoid PropDrilling */}
      

      

    </div>
  );
}

export default App;
