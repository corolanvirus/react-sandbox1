import { Component } from 'react'

import Navigation from '../components/Navigation'

class Header extends Component {
  render() {
    return (
      <div className="App" >
        <header className="bg-gray-800 shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-white">Cours JS DSP React</h1>
            <Navigation />
          </div>
        </header>
        <main>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <div className="px-4 py-6 sm:px-0">
              <div className="border-4 border-dashed border-gray-200 rounded-lg h-96">

                <p>Dans ce tuto, on dois voir certains essentiels pour bon nombres de framework en JS</p>
                <ul>
                  <li> - dotenv ❌</li>
                  <li> - axios/fetch ❌</li>
                  <li> - loader quand fetch gros spinner ✅</li>
                  <li> - navigation et routing ✅</li>
                  <li> - bases de react ❌</li>
                  <li> - tailwind ✅</li>
                  <li> - daisy ui ❌</li>
                  <li> - afficher meteo  img avec un switch img selon la valeur de temp  ❌</li>
                  <li> - aller en profondeur avec un fetch puis axios ❌</li>
                  <li> - découpage component ✅</li>
                  <li> - page 404 ❌</li>
                  <li> - input pour rechercher par ville ❌ ("http://api.airvisual.com/v2/city?city=Los Angeles&state=California&country=USA&key=")</li>

                </ul>
              </div>
            </div>
          </div>
        </main>

      </div>
    );
  }
}

export default Header;
