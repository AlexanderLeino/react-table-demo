import logo from './logo.svg';
import './App.css';
import { BasicTable } from './components/BasicTable'
import { SortingTable } from './components/SortingTable'
import {FilteringTable} from './components/FilteringTable'
import { PaginationTable } from './components/PaginationTable';
import { ColumnHiding } from './components/ColumnHiding';

function App() {
  return (
    <div className="App">
      <FilteringTable />
    </div>
  );
}

export default App;
