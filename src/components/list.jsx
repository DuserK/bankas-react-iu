import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Edit from "./edit";

export default function List({ accounts, setEditData, setDeleteModalData }) {
    const destroy = (a) => {
        setDeleteModalData(a);
    };

    return (
        <>
            <ul className="list-group row">
                {accounts
                    ? accounts.length
                        ? accounts.map((a) => (
                            <li key={a.id} className="list-group-item row col-12">
                                <div className="col-3">
                                    {a.Surname} {a.Name}
                                </div>

                                <div className="col-3">{a.AccountNum}</div>

                                <div className="col-2">{a.Balance} €</div>

                                <div className="col-3 change">
                                   <Edit 
                                   a={a}
                                   setEditData={setEditData}
                                   />
                                </div>

                                <div className="col-1 delete" onClick={(_) => destroy(a)}>
                                    <FontAwesomeIcon icon={faTrash} />
                                </div>
                            </li>
                        ))
                        : "  Nėra sukurtų sąskaitų..."
                    : "Kraunama..."}
            </ul>
        </>
    );
}
