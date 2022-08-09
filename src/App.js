import "./App.css";
import Content from "./components/Content/Content";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";

const App = (props) => {
  return (
    <div className="App">
      <Header />
			<Sidebar />
			<Content updateNewPostText={props.updateNewPostText} state={props.state} addPost={props.addPost}/>
    </div>
  );
};

export default App;
