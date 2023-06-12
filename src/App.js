import AllRoutes from 'Routes/AllRoutes';
import './App.css';
import {BottomNav, Sidebar} from "components";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <AllRoutes />
      <BottomNav />

    </div>
  );
}

export default App;
