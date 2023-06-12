import AllRoutes from 'Routes/AllRoutes';
import './App.css';
import {Sidebar} from "components";

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      
      <Sidebar />
      <AllRoutes />

    </div>
  );
}

export default App;
