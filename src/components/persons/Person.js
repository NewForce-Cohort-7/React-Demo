import { Link } from "react-router-dom"

export const Person = ({person}) => {





    return ( 
        person.name === "Sarah" 
        ? 
        ""
        :
        person.name === "Tommy"
        ?
        ""
        :
        <p>{person.name} is a <Link to={`/zodiac/Details/${person.zodiacId}`} >{person.zodiac?.name}</Link>. That means they were born between {person.zodiac?.dates}. That also makes their WV animal a {person.zodiac?.wvAnimal}</p>
        
    )
    
    
    
    }