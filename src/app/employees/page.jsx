'use client'

import { useEffect, useState } from "react"

export default function Employees(){
    const [employees, setEmployees] = useState([])
    useEffect( ()=>{
        async function getEmployees(){
            try {
                const response = await fetch('http://127.0.0.1:8000/employees')
                const data = await response.json()
                console.log(data)
    
                setEmployees(data)
            } catch (error) {
                console.log(error)
            }


        }

        getEmployees()

    }
        

    ,[])

    return <div>
        {employees.map(emp=>(
            <div className="bg-blue-500 rounded-lg p-3 w-[200px] mb-3">
                <p className="text-white text-lg">{emp.name}</p>
            </div>
        ))}

    </div>
}