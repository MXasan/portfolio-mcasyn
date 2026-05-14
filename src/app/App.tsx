import LeftSide from "../leftSide/leftSide";
import RightSide from "../rightSide/rightSide";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="left">
        <LeftSide />
      </div>
      <div className="right">
        <div className="bg-fixed"></div>
        <RightSide />
      </div>
    </div>
  );
}

export default App;
