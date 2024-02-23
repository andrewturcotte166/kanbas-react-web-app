import Nav from "../Nav";
import Assignment3 from "./a3";
import { Routes, Route, Navigate }
    from "react-router";
function Labs() {
    return (
        <div>
            <Nav />
            <Routes>
                <Route path="/"
                    element={<Navigate
                        to="a3" />} />
                <Route path="a3"
                    element={<Assignment3 />} />
            </Routes>
        </div>
    );
}
export default Labs;