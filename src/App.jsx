import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Create from './components/create';
import { useEffect, useState } from 'react';
import { crudCreate, crudDelete, crudRead } from './Functions/localStorageCrud';
import List from './components/list';
import Navigation from './components/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuildingColumns } from '@fortawesome/free-solid-svg-icons'
import Delete from './components/delete';


const KEY = 'bankAccounts';

export default function App() {

  const [listUpdate, setListUpdate] = useState(Date.now());

  const [accounts, setAccounts] = useState(null);

  const [createData, setCreateData] =useState(null);

  const [deleteModalData, setDeleteModalData] = useState(null);

  const [deleteData, setDeleteData] = useState(null);

  const [editData, setEditData] = useState(null);

  //Read
  useEffect(_ => {
    setAccounts(crudRead(KEY)); 
  },[listUpdate]);

  //Create
  useEffect(_ => {
    if (null === createData) {
      return
    } crudCreate(KEY, createData)
    setListUpdate(Date.now())
  },[createData]);

  //Delete
  useEffect(_ => {
    if (null === deleteData) {
      return
    } crudDelete(KEY, deleteData.id)
    setListUpdate(Date.now())
  },[deleteData]);

  return (

        <>
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
            <List accounts={accounts}
            setDeleteModalData={setDeleteModalData}/>
            <div>
              <Create setCreateData={setCreateData}/>
            </div>
            {/* <button className='btn'>
                Pridėti sąskaitą
            </button> */}

          </div>
          <Delete 
          deleteModalData={deleteModalData}
          setDeleteModalData={setDeleteModalData}
          setDeleteData={setDeleteData}/>
        </>
  );
}
