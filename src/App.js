
import env from "react-dotenv";

function App() {
  return (
    <div className="App">

      <header className="bg-gray-800 shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-white">Cours JS DSP React</h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="border-4 border-dashed border-gray-200 rounded-lg h-96">

              <p>Dans ce tuto, on dois voir certains essentiels pour bon nombres de framework en JS</p>
              <ul>
                <li> - dotenv</li>
                <li> - axios/fetch</li>
                <li> - loader quand fetch</li>
                <li> - navigation et routing</li>
                <li> - bases de react</li>
                <li> - tailwind</li>
              </ul>
            </div>
          </div>
        </div>
      </main>

    </div>
  );
}

export default App;
