import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { ZodiacSelect } from "../zodiac/ZodiacSelect"


export const PersonForm = () => {

    const [person, update] = useState({

    })

    const handleSaveButtonClick = (event) => {
        event.preventDefault()

        const newPerson ={                         
            name: person.name,
            zodiacId: +person.zodiacId
        }

      
            fetch (`http://localhost:8088/persons`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newPerson),
            });
        };
        
    

    const inputOnChange = (event) => {
       
            const copy = {...person}
            copy[`${event.target.name}`] = event.target.value
            update(copy)
        
    }

    return (
        <form className="personForm"
        onSubmit={handleSaveButtonClick}>
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
                    <ZodiacSelect  taco={inputOnChange}/>
                </div>
            </fieldset>
            <button className="btn btn-primary">
                Submit person
            </button>
        </form>
    )
}