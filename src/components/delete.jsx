export default function Delete ({deleteModalData, setDeleteModalData, setDeleteData}) {
    
    const destroy = _ => {
        setDeleteData(deleteModalData);
        setDeleteModalData(null)
    }

    if (null === deleteModalData) {

        return null
    }
    if (deleteModalData.Balance !== 0) {
        return
    } else {

    return (
        <div className="modal">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Sąskaitos panaikinimas</h5>
                    <button type="button" className="btn-close" onClick={_=> setDeleteModalData(null)}></button>
                </div>
                <div className="modal-body">
                    <p>Ar tikrai norite pašalinti sąskaitą?</p>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" onClick={_=> setDeleteModalData(null)}>Atšaukti</button>
                    <button type="button" className="btn btn-danger" onClick={destroy}>Pašalinti</button>
                </div>
                </div>
            </div>
        </div>

    )
}
}