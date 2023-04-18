import { useEffect, useState } from "react"
import { Sign } from "./Sign"

export const ZodiacList = () => {
const [zodiacSigns, setZodiacSigns] = useState([])


useEffect(() => {
    fetch(`http://localhost:8088/zodiacs`)
    .then(r => r.json())
    .then( signs => setZodiacSigns(signs))
}, [])

    return (

        <>
            <h1>WV Zodiac Signs</h1>
            <div className="signList">
                {
                zodiacSigns.map(sign => <Sign key={sign.id}  taco={sign}  />)
                }
            </div>
        </>
    )
}


