import logo from "./logo.svg";

function App() {
  return (
    <div className="text-center">
      <header className="p-8 relative bg-dark min-h-screen flex flex-col justify-center items-center text-2xl text-white">
        <img
          src={logo}
          className="h-10-screen w-auto pointer-events-none animate-spin-slow"
          alt="logo"
        />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="text-link mt-2"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <footer className="text-right text-sm absolute bottom-0 right-0 tracking-tight whitespace-nowrap text-blue-200 p-4 opacity-90">
          create by <a className="text-yellow-300 underline cursor-pointer font-semibold active:text-gray-100 hover:text-yellow-500" href="https://github.com/swekiiz">swekiiz</a>
        </footer>
      </header>
    </div>
  );
}

export default App;
