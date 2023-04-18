import { useState, useEffect } from "react"




export const ZodiacSelect = ({taco}) => {

    const [zodiacSigns, setZodiacSigns] = useState([])


    useEffect(() => {
    fetch(`http://localhost:8088/zodiacs`)
    .then(r => r.json())
    .then( signs => setZodiacSigns(signs))
    }, [])






    return(

            <select name="zodiacId" className="zodiacSelect" onChange={taco}>
                <option  value="0">Select a sign</option>
                {zodiacSigns.map(sign => <option key={sign.id} value={sign.id}>{sign.name}</option>)}
            </select>
    )
}