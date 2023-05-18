import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Create from './components/create';
import { useEffect, useState } from 'react';
import { crudRead } from './Functions/localStorageCrud';
import List from './components/list';

const KEY = 'bankAccounts';

export default function App() {

  const [accounts, setAccounts] = useState(null);

  useEffect(_ => {
    setAccounts(crudRead(KEY))
  },[]);

  return (
    <div className="App">
      <header className="App-header">
        <div className="container top-row">
          <div className="row">
            <div className="col-2">
                Logo
            </div>
            <div className="col-10">
                ReacT bankas
            </div>
          </div>
          </div>
        <div className="container content">
         
          <List accounts={accounts}/>

          <div>
            <Create />
          </div>
          {/* <button className='btn'>
              Pridėti sąskaitą
          </button> */}
        </div>
      </header>
    </div>
  );
}
