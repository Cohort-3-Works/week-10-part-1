import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Card>hi there this is my app</Card>
        <Link to="/">Allen</Link>|
        <Link to="/neet/online-coaching-class-11">Class 11</Link>|
        <Link to="/neet/online-coaching-class-12">Class 12</Link>
        <Routes>
          <Route
            path="/neet/online-coaching-class-11"
            element={<Class11Program />}
          />
          <Route
            path="/neet/online-coaching-class-12"
            element={<Class12Program />}
          />
          <Route path="/" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function Landing() {
  return <div>Welcome to allen</div>;
}

function Class11Program() {
  return <div>NEET programs for Class 11th</div>;
}

function Class12Program() {
  return <div>NEET programs for Class 12th</div>;
}

// creating a card component for understanding children

const Card = ({ children }) => {
  return (
    <div
      style={{
        padding: 10,
        margin: 10,
        backgroundColor: "#b2babb",
        borderRadius: 10,
      }}
    >
      {children}
    </div>
  );
};

export default App;
