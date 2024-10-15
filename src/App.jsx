import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { UseEffect } from "./UseEffect";
import { Card } from "./Card";
import ErrorBoundary from "./Error-boundary";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Card>hi there this is my app</Card>
        <ErrorBoundary>
          <Card1></Card1>
        </ErrorBoundary>
        <Card2></Card2>
        <Card>
          <UseEffect />
        </Card>
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

function Card1() {
  throw new Error("Error while rendering"); // this line causes the whole website to crash

  return (
    <div>
      <Card>Hi there from card 1</Card>
    </div>
  );
}

function Card2() {
  return (
    <div>
      <Card>Hi there from card 2</Card>
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

export default App;
