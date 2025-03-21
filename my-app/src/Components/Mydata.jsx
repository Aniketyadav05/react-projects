import React from 'react'
import JsonData from '../Mydata/Data.json'
const Mydata=()=>{
    const DisplayData=JsonData.map(
        (info)=>{
            return(
                <tr className="hover:bg-black">
                    <td className="pl-8 border border-black px-4 py-2">{info.id}</td>
                    <td className="border border-black px-4 py-2">{info.name}</td>
                    <td className="border border-black px-4 py-2">{info.city}</td>
                </tr>
            )
        }
    )

    return(
        <div>
            <table className="table-auto border-collapse border border-black w-full">
                <thead>
                    <tr className="bg-black">
                    <th className="border border-black px-4 py-2">Name</th>
                    <th className="border border-black px-4 py-2">Age</th>
                    <th className="border border-black px-4 py-2">Country</th> 
                    </tr>
                </thead>
                <tbody>
                    {DisplayData}
                </tbody>
            </table>
        </div>
    )
 }

 export default Mydata;