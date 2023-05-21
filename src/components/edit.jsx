import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

export default function Edit({}) {
    
    const sumRef
    const edit = (f, s) {
        if

    } 
//   const edit = (_) => {
//     setDeleteData(deleteModalData);
//     setDeleteModalData(null);
//   };

  return (
    <>
      <input type="number" placeholder="įveskite sumą" min="0"/ ref={sumRef}>
      <div className="plus" onClick={edit("+")}>
        <FontAwesomeIcon icon={faPlus} />
      </div>
      <div className="minus">
        <FontAwesomeIcon icon={faMinus} />
      </div>
    </>
  );
}
