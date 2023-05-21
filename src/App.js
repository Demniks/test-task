import { useDispatch } from "react-redux";
import "./App.css";
import { useEffect } from "react";
import { fetchUsers } from "./redux/usersSlice";
import Navigation from "./components/Navigation/Navigation";
import UseRoutes from "./UseRoutes";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div className="App">
      <main>
        <Navigation />
        <UseRoutes />
      </main>
    </div>
  );
}

export default App;
