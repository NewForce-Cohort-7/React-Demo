import React, { useState, useEffect } from "react";
import { Person } from "./Person";




export const PersonList = ({tacos,updatePersons}) =>{


    return (
            <section className="personList">
            {tacos.map(singlePerson => <Person key={singlePerson.id} person={singlePerson} updatePersons={updatePersons} />)}
        </section>
        )


}