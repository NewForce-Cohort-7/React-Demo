
export const Person = ({person}) => {





    return ( 
        <p>{person.name} is {person.zodiac?.name}. That means they were born between {person.zodiac?.dates}. That also makes their WV animal a {person.zodiac?.wvAnimal}</p>
    )
    
    
    
    }