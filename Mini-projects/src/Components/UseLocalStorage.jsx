import React, { useEffect, useState } from 'react'

const UseLocalStorage = (key, defaultValue) => {
    const [ value, setValue] = useState(()=> {
        let currentValue

        try {
            currentValue = JSON.parse(localStorage.getItem(key) || string(defaultValue))
            
        } catch (e) {
            console.log(e);
            currentValue= defaultValue
            
        }
        return currentValue
    })


 useEffect(() =>{
    localStorage.setItem(key, JSON.stringify(value))
 },[key,value])

 return [value , setValue]
}

export default UseLocalStorage