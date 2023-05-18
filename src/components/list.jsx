
export default function List({ accounts }) {

    return (
        <>
            <ul className="list-group row">
                {
                    accounts ?  accounts.map(a => (

                        <li key={a.id} className="list-group-item row col-12">

                            <div className="col-4">{a.Surname}, {a.Name}</div>
                            
                            <div className="col-3">{a.AccountNum}</div>
        
                            <div className="col-2">{a.Balance} €</div>
        
                            <div className="col-2">+ / -</div>
        
                            <div className="col-1">delete</div>
                        </li>
                    )) : ''
                }
            </ul>
        </>
    )
}