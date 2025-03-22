

import UseState from './Components/A. State Management/1.UseState/UseState';
import UseReducer from './Components/A. State Management/2.UseReducer/UseReducer';
import MultipleContextAPI from './Components/A. State Management/3.UseContext/FAANG/MultipleContextAPI';
import UseContext from './Components/A. State Management/3.UseContext/UseContext';

function App() {
  return (
    <div className="App">
      {/* A. State Management */}
      <UseState/> <hr/> {/* State */}
      <UseReducer/> <hr/> {/* State Management : Instead Of changing state again & again Change State Frequently By action */}

      <UseContext />  {/* Context API :  Avoid PropDrilling */}


     
    </div>
  );
}

export default App;
