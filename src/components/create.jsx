export default function Create () {

    return (
        <div className="card">
            <h5 className="card-header">
                Sukurti naują sąskaitą
            </h5>
            <div className="card-body">
                <div className="card-title">Įveskite nurodytus duomenis</div>
                <div className="mb-3">
                    <label for="name" className="form-label">Vardas: </label>
                    <input type="text" className="form-control" placeholder="Vardas" />
                 </div>
                <div className="mb-3">
                    <label for="surname" className="form-label">Pavardė: </label>
                    <input type="text" className="form-control" placeholder="Pavardė" />
                 </div>
                <button className="btn btn-primary">Patvirtinti</button>
            </div>
        </div>
    )
}