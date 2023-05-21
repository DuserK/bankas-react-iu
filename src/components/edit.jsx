import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import CurrencyInput from "react-currency-input-field";

export default function Edit({ setEditData }) {

console.log(setEditData);

const addMoney = _ => {
    return
}

  return (
    <>
      <CurrencyInput
          id="input-example"
          name="input-name"
          placeholder="įrašykite sumą"
          allowNegativeValue={false}
          decimalsLimit={2}
          suffix=" €"
          groupSeparator= ' '
        />
      <div className="plus" onClick={addMoney}>
        <FontAwesomeIcon icon={faPlus} />
      </div>
      <div className="minus">
        <FontAwesomeIcon icon={faMinus} />
      </div>
    </>
  );
}
