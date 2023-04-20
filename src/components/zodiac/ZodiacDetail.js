




import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


export const ZodiacDetail = () => {
    
    const [sign, setSign] = useState({})
    
    
    // useParam grabs the route Paramater called :zodiacId located in the route in AppViews
    const {zodiacId} = useParams()
    
    // useeffect that fetches a single zodiac sign ---Done
useEffect(()=>{
    fetch(`http://localhost:8088/zodiacs/${zodiacId}`)
    .then(r => r.json())
    .then(singleSign => setSign(singleSign))
    
},[])






return( <>
    <h2>{sign.name}</h2>
    <ul>
        <li>{sign.mascot}</li>
        <li>{sign.dates}</li>
        <li>{sign.element}</li>
        <li>{sign.wvAnimal}</li>
    </ul>
</>)


}