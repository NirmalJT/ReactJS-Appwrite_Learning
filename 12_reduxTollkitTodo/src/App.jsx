import { Provider } from "react-redux";
import "./App.css";
import AddTodo from "./components/AddTodo";
import { store } from "./app/store";
import Todos from "./components/Todos";

function App() {
  return (
    <Provider store={store}>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <AddTodo />
      <Todos />
    </Provider>
  );
}

export default App;
