import { Routes, Route } from "react-router";

import LeftSide from "./leftSide";
import RightSide from "./rightSide";
import Cursor from "../components/cursor";
import "./App.css";
import PersonalSpace from "./personalSpace";
function App() {
  return (
    <div className="App">
      <Cursor />
      <div className="left">
        <LeftSide />
      </div>
      <div className="right">
        <div className="bg-fixed"></div>
        <Routes>
          <Route path="/" element={<RightSide />} />
          <Route path="/personal-space" element={<PersonalSpace />} />
        </Routes>
      </div>
    </div>
  );
}
export default App;
