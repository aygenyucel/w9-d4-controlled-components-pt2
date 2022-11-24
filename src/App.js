import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import WarningSign from "./components/WarningSign";
import MyBadge from "./components/MyBadge";
import BookList from "./components/BookList";

function App() {
  return (
    <div className="App">
      <WarningSign />
      <MyBadge />
      <BookList />
    </div>
  );
}

export default App;
