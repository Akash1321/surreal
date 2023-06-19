
import './App.css';
import {BottomNav, Sidebar} from "components";
import { useAuth } from 'context/AuthContext';
import AllRoutes from 'Routes/AllRoutes';

function App() {

  const {token} = useAuth();
  return (
    <div className="App">

      {token && (
        <>
        <Sidebar />
        <BottomNav />
        </>
      )}

      <AllRoutes />

    </div>
  );
}

export default App;
