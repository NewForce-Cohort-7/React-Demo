import { useState } from "react"
import { Link } from "react-router-dom"
import { InlineEdit } from "./InlineEdit"

export const Person = ({person, updatePersons}) => {
const [showEdit, setShowEdit] = useState(false)




    return ( 
       !showEdit ?
        <p
        onDoubleClick={() => setShowEdit(true)}
        >{person.name} is a <Link to={`/zodiac/Details/${person.zodiacId}`} >{person.zodiac?.name}</Link>. That means they were born between {person.zodiac?.dates}. That also makes their WV animal a {person.zodiac?.wvAnimal}</p>

        : 

        < InlineEdit personProp={person} updatePersons={updatePersons} setShowEdit={setShowEdit}/>
        
    )
    
    
    
    }