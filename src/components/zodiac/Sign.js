

export const Sign = ({taco}) => {





return (    
    <>
        <h2>{taco.name}</h2>
        <ul>
            <li>{taco.mascot}</li>
            <li>{taco.dates}</li>
            <li>{taco.element}</li>
            <li>{taco.wvAnimal}</li>
        </ul>
    </>

)


}
// {
//     "id": 1,
//     "name": "Aries",
//     "mascot": "Ram",
//     "dates": "March 21-April 19",
//     "element": "Fire",
//     "wvAnimal": "Monarch Butterfly"
//     },