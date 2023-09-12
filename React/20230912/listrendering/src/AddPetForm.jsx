import React from 'react'
import { useState } from 'react';

export default function AddPetForm({setPets}) {
    const [name, setName] = useState("");
    const [species, setSpecies] = useState("");
    const [age, setAge] = useState(0);

    function handleSubmit(event) {
        event.preventDefault();
        setPets((prev) => {
            // return prev.push({name, species, age, id:Date.now()});
            return [...prev, {name, species, age, id:Date.now()}];
            
        });
        setName('');
        setSpecies('');
        setAge(0);
    }

  return (
    <form onSubmit={handleSubmit}>
        <fieldset>
            <legend>새로운 애완동물을 추가해주세요!</legend>
            <label>
                이름 : 
                <input type="text" value={name} onChange={(e)=>
                     setName(e.target.value)}></input>
            </label>
            <label>
                종류 : 
                <input type="text" value={species} onChange={(e)=>
                     setSpecies(e.target.value)}></input>
            </label>
            <label>
                나이 : 
                <input type="number" value={age} onChange={(e)=>
                     setAge(e.target.value)}></input>
            </label>
            <button>추가하기</button>
        </fieldset>
    </form>
  )
}
