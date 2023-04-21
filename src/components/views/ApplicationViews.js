import { Route, Routes } from "react-router-dom"
import { PoisonList } from "../poisons/PoisonList"
import { Counter } from "../counter/Counter"
import {  ZodiacList } from "../zodiac/ZodiacList"
import { PersonList } from "../persons/PersonList"
import { PersonForm } from "../persons/PersonForm"
import { PersonContainer } from "../persons/PersonContainer"
import { ZodiacDetail } from "../zodiac/ZodiacDetail"
import { PersonEdit } from "../persons/PersonEdit"


export const ApplicationViews = () => {




    return(
            <Routes>


                <Route path="/" element={<h1>Welcome to Chaos</h1>} />
                <Route path="/poisons" element={<PoisonList />} />
                <Route path="/counter" element={<Counter />} />
                <Route path="/zodiac" element={<PersonContainer />} />
                <Route path="/zodiac/Details/:zodiacId" element={<ZodiacDetail />} />
                <Route path="/person/Edit/:personId" element={<PersonEdit />} />





            </Routes>

        )





}