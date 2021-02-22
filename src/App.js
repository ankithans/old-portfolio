import { Name, Body, Social, Techstack } from "./components";

function App() {
  return (
    <div>
      <div className="h-screen w-screen lg:pl-40 md:pl-20 lg:pr-40 md:pr-20">
        <Name />
        <Body />

        <Social />
      </div>
      <div className="bg-gray-800 w-screen lg:pl-48 md:pl-20 lg:pr-40 md:pr-20">
        <Techstack />
      </div>
    </div>
  );
}

export default App;
