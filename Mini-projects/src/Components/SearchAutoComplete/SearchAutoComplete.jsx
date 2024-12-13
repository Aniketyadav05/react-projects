import React, { useEffect, useState } from 'react'
import Suggestions from './Suggestions'

const SearchAutoComplete = () => {
    const [loading, setLoading] = useState(false)
    const [users, setUsers] = useState([])
    const [error, setError] = useState(null)
    const [searchParam, setSearchParam] = useState('')
    const [showDropdown, setShowDropdown] = useState(false)
    const [FilteredUsers, setFilteredUsers] = useState([])

    function handleChange(e) {
        const query = e.target.value.toLowerCase()
        setSearchParam(query)
        if (query.length > 1) {
            const filteredData = users && users.length ?
                users.filter(item => item.toLowerCase().indexOf(query) > -1)
                : []
            setFilteredUsers(filteredData)
            setShowDropdown(true)

        }
        else{
            setShowDropdown(false)
        }
    }

    function handleClick(event){
        setShowDropdown(false)
        setSearchParam(event.target.innerText)
        setFilteredUsers([])
    }

    async function fetchListofUsers() {
        try {
            setLoading(true)
            const response = await fetch('https://dummyjson.com/users')
            const data = await response.json()

            console.log(data);
            if (data && data.users && data.users.length) {
                setUsers(data.users.map((userItem) => userItem.firstName))
                setLoading(false)
                setError(null)
            }
        } catch (e) {
            setLoading(false)
            console.log(e);

            setError(e)
        }
    }

    useEffect(() => {
        fetchListofUsers()
    }, [])
    console.log(FilteredUsers);

    return (

        <div className='place-items-center m-8'>
            {
                loading ? <h1>Loading data</h1>:(
            
            <input onChange={handleChange} value={searchParam} type="text" name='search-users' placeholder='Search users here' />)}
            {
                showDropdown && <Suggestions handleClick ={handleClick} data={FilteredUsers}/>
            }
        </div>
    )
}

export default SearchAutoComplete