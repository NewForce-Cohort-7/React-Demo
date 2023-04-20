import React, { useState, useEffect } from "react";
import { Poison } from "./Poison";




export const PoisonList = () =>{

const [poisons, setPoisons] = useState([])


    useEffect(()=>{
      fetch(`http://localhost:8088/poisons`)
      .then(r => r.json())
      .then(returnedPoisons => setPoisons(returnedPoisons))
    },[])

    return (
      <div>
            <section className="poisonList">
            {poisons.map(singlePoison => <Poison key={singlePoison.id} poison={singlePoison} />)}
        </section>

        <section>This is a second section</section>
      </div>
        )


}

