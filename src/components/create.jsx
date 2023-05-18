export default function Create () {


    return (
        <div className="card">
            <h5 className="card-header">Sukurti naują sąskaitą</h5>
            <div className="card-body">
                <div className="mb-3">
                    <label className="htmlForm-label">Vardas: </label>
                    <input type="text" className="htmlForm-control" id="name" placeholder="Vardas" />
                 </div>
                <div className="mb-3">
                    <label className="htmlForm-label">Pavardė: </label>
                    <input type="text" className="htmlForm-control" id="surname" placeholder="Pavardė" />
                 </div>
                <button className="btn btn-primary" >Patvirtinti</button>
            </div>
        </div>
    )
}