
import './App.css';
import {BottomNav, Header, Sidebar} from "components";
import { useAuth } from 'context/AuthContext';
import AllRoutes from 'Routes/AllRoutes';

function App() {

  const {token} = useAuth();
  return (
    <div className="App">

      {token && (
        <>
        <Header />
        <Sidebar />
        <BottomNav />
        </>
      )}

      <AllRoutes />

    </div>
  );
}

export default App;
