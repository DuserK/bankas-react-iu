import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus, faTrash,} from '@fortawesome/free-solid-svg-icons'

export default function List({ accounts }) {

    return (
        <>
            <ul className="list-group row">
                {
                    accounts ?  accounts.map(a => (

                        <li key={a.id} className="list-group-item row col-12">

                            <div className="col-3">{a.Surname} {a.Name}</div>
                            
                            <div className="col-3">{a.AccountNum}</div>
        
                            <div className="col-2">{a.Balance} €</div>
        
                            <div className="col-3 change">
                                <input type="text" />
                                <div className='plus'><FontAwesomeIcon icon={faPlus} /></div> 
                                <div className='minus'><FontAwesomeIcon icon={faMinus} /></div>    
                            </div>
        
                            <div className="col-1 delete"><FontAwesomeIcon icon={faTrash}/></div>
                        </li>
                    )) : ''
                }
            </ul>
        </>
    )
}