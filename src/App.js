import AllRoutes from 'Routes/AllRoutes';
import './App.css';
import {BottomNav, Header, Sidebar} from "components";

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <AllRoutes />
      <BottomNav />

    </div>
  );
}

export default App;
