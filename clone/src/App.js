import gptLogo from "./assets/chatgpt.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="sideBar">
        <div className="upperSide">
          <div className="upperSideTop">
            <img src={gptLogo} alt="" className="logo" />
            <span className="brand"></span>
            <button className="midBtn">
              <img src="" alt="" className="addBtn" />
              New Chat
            </button>

            <div className="upperSidebottom">
              <button className="query">
                <img src="" alt="" />
                What is Programming?
              </button>
              <button className="query">
                <img src="" alt="" />
                What is Programming?
              </button>
            </div>
          </div>
        </div>
        <div className="lowerSide"></div>
      </div>
      <div className="main"></div>
    </div>
  );
}

export default App;
