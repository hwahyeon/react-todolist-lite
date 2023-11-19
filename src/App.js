import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Todo from "./components/Todo";

function App() {
    return (
        <Router basename={process.env.PUBLIC_URL}>
            <Routes>
                <Route path="/" element={<Todo />} />
            </Routes>
        </Router>
    );
}

export default App;
