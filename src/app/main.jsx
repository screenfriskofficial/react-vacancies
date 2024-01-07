import ReactDOM from "react-dom/client";
import "./index.css";
import "./firebase.js";
import { AppRouter } from "~app/providers/router-provider/index.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(<AppRouter />);
