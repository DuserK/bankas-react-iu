import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import CurrencyInput from "react-currency-input-field";
import { useState } from "react";

export default function Edit({ setEditData, a }) {
    
    const [moneyChange, setMoneyChange] =useState(0);
    
    const ammountTyped = at => {
        setMoneyChange(at);
    }


const addMoney = a => {
    const sum = parseFloat(moneyChange) + a.Balance;
    setEditData ({...a, Balance: sum, id:a.id});
    setMoneyChange(0);
}
const displayValue = moneyChange === 0 ? '' : moneyChange;

if (a.Balance === null){
    return null;
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
          value={displayValue}
          onValueChange={ammountTyped}
        />
      <div className="plus" onClick={_=>addMoney(a)}>
        <FontAwesomeIcon icon={faPlus} />
      </div>
      <div className="minus">
        <FontAwesomeIcon icon={faMinus} />
      </div>
    </>
  );
}
