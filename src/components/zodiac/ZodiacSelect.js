import { useState, useEffect } from "react"




export const ZodiacSelect = ({handleChange, personState}) => {

    const [zodiacSigns, setZodiacSigns] = useState([])


    useEffect(() => {
    fetch(`http://localhost:8088/zodiacs`)
    .then(r => r.json())
    .then( signs => setZodiacSigns(signs))
    }, [])






    return(

            <select value={personState.zodiacId} name="zodiacId" required className="zodiacSelect" onChange={handleChange}>
                <option  value="">Select a sign</option>
                {zodiacSigns.map(sign => <option key={sign.id} value={sign.id}>{sign.name}</option>)}
            </select>
    )
}