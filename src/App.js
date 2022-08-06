import "./App.css";
import Content from "./components/Content/Content";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";

const App = (props) => {
  return (
    <div className="App">
      <Header />
			<Sidebar />
			<Content userData={props.userData} chatData={props.chatData} exploreData={props.exploreData} postData={props.postData}/>
    </div>
  );
};

export default App;
