import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { ZodiacSelect } from "../zodiac/ZodiacSelect"

export const PersonEdit = () => {

//state of the thing we are editing
const  [person, setPerson] = useState({
    name: "",
    zodiacId: 0
})
//get id from route. don't forget to put in appviews
const {personId} = useParams()
const navigate = useNavigate()
useEffect(()=>{
    fetch(`http://localhost:8088/persons/${personId}`)
    .then(r => r.json())
    .then(person => setPerson(person))
    
},[])

const inputOnChange = (event) => {
       
    const copy = {...person}
    copy[`${event.target.name}`] = event.target.value
    setPerson(copy)

}

const handleSaveButtonClick = (event) => {
    event.preventDefault()

    const newPerson ={      
        id: personId,                   
        name: person.name,
        zodiacId: +person.zodiacId    // + === parseInt()
    }

  
        fetch (`http://localhost:8088/persons/${personId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newPerson),
        })
        .then(() => {
            navigate(`/zodiac`)
        })
        // .then(() => fetch(`http://localhost:8088/persons?_expand=zodiac`))
        // .then(r => r.json())
        // .then(returnedPersons => updatePersons(returnedPersons))
        // .then(()=> update({ name: "", zodiacId: ""}) )
    };


return (   <form className="personForm"
onSubmit={handleSaveButtonClick}
>
    <h2 className="personForm__title">Add a person</h2>
    <fieldset>
        <div className="form-group">
            <label htmlFor="name">name: </label>
            <input
            name="name"
                required autoFocus
                type="text"
                className="form-control"
                placeholder="type a name here ..."
                value={person.name}
                 onChange={inputOnChange}
                 
                />
        </div>
    </fieldset>
    <fieldset>
        <div className="form-group">
            <label htmlFor="zodiacId">Select your sign: </label>
            <ZodiacSelect  handleChange={inputOnChange} personState={person}/>
        </div>
    </fieldset>
    <button className="btn btn-primary">
        Submit Edit
    </button>
</form>)

}