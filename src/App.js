import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Todo from "./components/Todo";

function App() {
    return (
        <Router>
            <Routes>
                <Route path={`${process.env.PUBLIC_URL}/`} element={<Todo />} />
            </Routes>
        </Router>
    );
}

export default App;
