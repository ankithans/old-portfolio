import { Name, Body, Social, Techstack } from "./components";

function App() {
  return (
    <div>
      <div className="bg-gray-900 h-screen pl-40 pr-40">
        <Name />
        <Body />

        <Social />
      </div>
      <div className="bg-gray-800 pl-40 pr-40">
        <Techstack />
      </div>
    </div>
  );
}

export default App;
