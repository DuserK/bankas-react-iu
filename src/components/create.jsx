import { useRef, useState } from "react"
import rand from "../Functions/rand";

export default function Create ( {setCreateData}) {

    const nameRef = useRef(null);
    const surnameRef = useRef(null);


    const save = _ => {

        const name = nameRef.current.value;
        const surname = surnameRef.current.value;
        setCreateData({
            Name: name,
            Surname: surname,
            Balance: 0,
            AccountNum: 'LT00 ' + '3500 0' + rand(100,999) +' '+ rand(1000,9999),
        });

        nameRef.current.value = '';
        surnameRef.current.value = ''
    }

    return (
        <div className="card">
            <h5 className="card-header">Sukurti naują sąskaitą</h5>
            <div className="card-body">
                <div className="mb-3">
                    <label className="htmlForm-label">Vardas: </label>
                    <input type="text" className="htmlForm-control" id="name" ref={nameRef} required/>
                 </div>
                <div className="mb-3">
                    <label className="htmlForm-label">Pavardė: </label>
                    <input type="text" className="htmlForm-control" id="surname" ref={surnameRef} />
                 </div>
                <button className="btn btn-primary" type="submit" onClick={save}>Patvirtinti</button>
            </div>
        </div>
    )
}