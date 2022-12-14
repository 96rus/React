import "./App.css";
import Content from "./components/Content/Content";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";

const App = (props) => {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <Content
        state={props.state}
        dispatch={props.dispatch}
        store={props.store}
      />
    </div>
  );
};

export default App;
