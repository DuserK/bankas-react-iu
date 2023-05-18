import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Create from './components/create';
import { useEffect, useState } from 'react';
import { crudRead } from './Functions/localStorageCrud';

const KEY = 'bankAccounts';

export default function App() {

  const [accounts, setAccounts] = useState(null);

  useEffect(_ => {
    setAccounts(crudRead(KEY))
  },[]);

  return (
    <div classNameName="App">
      <header classNameName="App-header">
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
          <div className="row info">
            <div className="col-4">
              Pavardė, vardas
            </div>
            
            <div className="col-3">
              Sąskaitos numeris
            </div>

            <div className="col-2">
              Balansas
            </div>

            <div className="col-2">
              Pridėti / išimti
            </div>

            <div className="col-1">
              Pašalinti
            </div>
          </div>
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
