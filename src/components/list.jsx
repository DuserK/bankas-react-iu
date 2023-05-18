export default function List() {

    return (
        <>
            <div className="row info">
                <div className="col-4">Pavardė, vardas</div>
                
                <div className="col-3">Sąskaitos numeris</div>

                <div className="col-2">Balansas</div>

                <div className="col-2">Pridėti / išimti</div>

                <div className="col-1">Pašalinti</div>
            </div>

            <ul className="list-group container">
                {
                    accounts.map(a => (

                        <li className="list-group-item row">

                            <div className="col-4">Pavardė, vardas</div>
                            
                            <div className="col-3">Sąskaitos numeris</div>
        
                            <div className="col-2">Balansas</div>
        
                            <div className="col-2">Pridėti / išimti</div>
        
                            <div className="col-1">Pašalinti</div>
                        </li>
                    ))
                }


            </ul>
        </>
    )
}