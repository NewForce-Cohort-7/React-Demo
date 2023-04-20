import { useEffect, useState } from "react"
import { PersonForm } from "./PersonForm"
import { PersonList } from "./PersonList"




export const PersonContainer = () => {

    const [persons, setPersons] = useState([])


    useEffect(()=>{
      fetch(`http://localhost:8088/persons?_expand=zodiac`)
      .then(r => r.json())
      .then(returnedPersons => setPersons(returnedPersons))
    },[])


    return (
        <>
            <PersonForm  updatePersons={setPersons}/>
            <PersonList tacos={persons} />
        </>
    )
}