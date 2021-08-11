import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="text-center">
      <header className="bg-dark min-h-screen flex flex-col justify-center items-center text-2xl text-white">
        <img
          src={logo}
          className="h-10-screen w-auto pointer-events-none animate-spin-slow"
          alt="logo"
        />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="text-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
