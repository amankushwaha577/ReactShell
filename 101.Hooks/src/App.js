import UseState from './Components/1.UseState/UseState';
import UseEffect from './Components/2.UseEffect/UseEffect';
import UseMemo from './Components/3.UseMemo/UseMemo';
import UseCallback from './Components/4.UseCallback/UseCallback';
import UseReducer from './Components/5.UseReducer/UseReducer';
import UseContext from './Components/6.UseContext/UseContext';

function App() {
  return (
    <div className="App">
      <UseState/> <hr/>
      <UseEffect/> <hr/>
      <UseMemo/> <hr/>
      <UseCallback/> <hr/>
      <UseReducer/> <hr/>
      <UseContext />

    </div>
  );
}

export default App;
