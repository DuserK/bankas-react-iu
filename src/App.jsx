import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {

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
          <button className='btn'>
              Pridėti sąskaitą
          </button>
        </div>
      </header>
    </div>
  );
}
