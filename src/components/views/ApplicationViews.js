import { Route, Routes } from "react-router-dom"
import { PoisonList } from "../poisons/PoisonList"
import { Counter } from "../counter/Counter"
import {  ZodiacList } from "../zodiac/ZodiacList"
import { PersonList } from "../persons/PersonList"
import { PersonForm } from "../persons/PersonForm"


export const ApplicationViews = () => {




    return(
            <Routes>


                <Route path="/" element={<h1>Welcome to Chaos</h1>} />
                <Route path="/poisons" element={<PoisonList />} />
                <Route path="/counter" element={<Counter />} />
                <Route path="/zodiac" element={
                    <>
                    <PersonForm />
                <PersonList />
                <ZodiacList />
                    </>
                } />




            </Routes>

        )





}