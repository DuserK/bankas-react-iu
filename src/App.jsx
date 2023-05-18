import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Create from './components/create';
import { useEffect, useState } from 'react';
import { crudCreate, crudRead } from './Functions/localStorageCrud';
import List from './components/list';
import Navigation from './components/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuildingColumns } from '@fortawesome/free-solid-svg-icons'


const KEY = 'bankAccounts';

export default function App() {

  const [listUpdate, setListUpdate] = useState(Date.now());

  const [accounts, setAccounts] = useState(null);

  const [createData, setCreateData] =useState(null);

  useEffect(_ => {
    setAccounts(crudRead(KEY)); 
  },[listUpdate]);

  useEffect(_=> {
    if (null === createData) {
      return
    } crudCreate(KEY, createData)
    setListUpdate(Date.now())
  },[createData])

  return (
    <div className="App">
      <header className="App-header">
        <div className="container top-row">
          <div className="row">
            <div className="col-2" style={{textAlign:'center'}}>
            <FontAwesomeIcon icon={faBuildingColumns} />
            </div>
            <div className="col-10">
                ReacT bankas
            </div>
          </div>
          </div>
        <div className="container content">
          
          <Navigation/>

          <List accounts={accounts}/>

          <div>
            <Create setCreateData={setCreateData}/>
          </div>
          {/* <button className='btn'>
              Pridėti sąskaitą
          </button> */}
        </div>
      </header>
    </div>
  );
}
