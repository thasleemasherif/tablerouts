import React from 'react';
import './App.css';
import GetRows from './GetRows';
import TableHeader from './TableHeader';
export const testContext = React.createContext();
const About=()=>{
    const studentInfo = [
        {
            id:1,
            firstName:"mariya",
            lastName:"Kumar",
            age:25,
            birthdate:"10-11-1990",
            country:"India",
            city:"ernakulam"
        },
        {
            id:2,
            firstName:"saroj",
            lastName:"Kumar",
            age:26,
            birthdate:"11-11-1990",
            country:"India",
            city:"palakkad"
        },
        {
            id:3,
            firstName:"manoj",
            lastName:"mn",
            age:20,
            birthdate:"12-10-2000",
            country:"India",
            city:"kozhikode"
        },
    ];
    const studentList = studentInfo.map(std => <GetRows std={std} />)
    return (
        <div>
            <h1 className="App">This is About Page</h1> 
            <TableHeader /> 
            {studentList}
        </div>
    );
}

export default About;