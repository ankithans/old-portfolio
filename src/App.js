import { Name, Body, Social, Techstack, Blog, Footer } from "./components";

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

      <div className="bg-gray-800 mt-10 w-screen lg:pl-48 md:pl-20 pt-10 pb-5 lg:pr-40 md:pr-20">
        <Blog />
      </div>

      <Footer />
    </div>
  );
}

export default App;
