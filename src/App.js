import "./App.css";
import Content from "./components/Content/Content";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";

const App = () => {
  return (
    <div className="App">
      <Header />
			<Sidebar />
			<Content />
    </div>
  );
};

export default App;