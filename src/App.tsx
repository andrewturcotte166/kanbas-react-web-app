import Labs from "./labs";
import HelloWorld from "./labs/a3/HelloWorld";
import { HashRouter } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router";

function App() {
  return (
    <HashRouter>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="/Labs" />} />
          <Route path="/Labs/*" element={<Labs />} />
          <Route path="/hello" element={<HelloWorld />} />
        </Routes>
      </div>
    </HashRouter>
  );
}
export default App;