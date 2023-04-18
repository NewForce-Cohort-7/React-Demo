import React, { useState, useEffect } from "react";
import { Person } from "./Person";




export const PersonList = () =>{

const [persons, setPersons] = useState([])


    useEffect(()=>{
      fetch(`http://localhost:8088/persons?_expand=zodiac`)
      .then(r => r.json())
      .then(returnedPersons => setPersons(returnedPersons))
    },[])

    return (
            <section className="personList">
            {persons.map(singlePerson => <Person key={singlePerson.id} person={singlePerson} />)}
        </section>
        )


}