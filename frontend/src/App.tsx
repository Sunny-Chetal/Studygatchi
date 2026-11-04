import "./App.css";
import { useState } from "react";
import SettingsMenu from "./components/SettingsMenu";
import NavBar from "./components/NavBar"; //
import Timer from "./components/Timer";
import ToDoList from "./ToDoList";
import GooberMenu from "./components/GooberMenu";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from './components/ThemeProvider';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  // had to add because bootstrap defaults to light mode
  document.documentElement.setAttribute("data-bs-theme", "dark");

  // Current Players data
  const [currentXP, setXP] = useState(50);
  const [level, setLevel] = useState(9);
  const [money, setMoney] = useState(0);
  const [currentHealth, setHealth] = useState(50);
  // Keep the timer's focus status available to Goober.
  const [isFocusMode, setIsFocusMode] = useState(false);

  return (
    <ThemeProvider>
      <Router>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div>
            <NavBar />
          </div>
          <GooberMenu
            setXP={setXP}
            setLevel={setLevel}
            setMoney={setMoney}
            setHealth={setHealth}
            currentXP={currentXP}
            level={level}
            money={money}
            currentHealth={currentHealth}
            isFocusMode={isFocusMode}
          />
          <Routes>
            <Route path="/settings" element={<SettingsMenu />} />
            <Route
              path="/timer"
              element={<Timer onFocusChange={setIsFocusMode} />}
            />
            <Route path="/todo" element={<ToDoList />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
