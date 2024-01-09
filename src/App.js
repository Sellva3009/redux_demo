import Header from "./components/Header";
import Main from "./components/Main";
import Rightbar from "./components/Rightbar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
      <div className="app">
        <Header />
        <div className="main-container">
          <Sidebar />
          <Main />
          <Rightbar />
        </div>
      </div>
  );
}

export default App;
