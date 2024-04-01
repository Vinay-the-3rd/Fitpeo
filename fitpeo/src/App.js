import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Header from './components/header/Header';
import Card from './components/card/Card';
import Charts from './components/chart/Charts';
import TableDisplay from './components/table/TableDisplay';

function App() {
  
  return (
    <div className="App">
      <Sidebar />
      <div className="content">
        <Header />
        <Card />
        <Charts />
        <TableDisplay />
      </div>
    </div>
  );
}

export default App;
