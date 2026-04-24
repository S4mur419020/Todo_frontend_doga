import { AdatProvider } from "./context/AdatContext";
import MainContent from "./components/MainContent";
import './App.css';

function App() {
  return (
    <AdatProvider>
      <div className="container">
        <header className="text-center my-4">
          <h1>Saját Teendők</h1>
        </header>
        <MainContent />
      </div>
    </AdatProvider>
  );

}
export default App;