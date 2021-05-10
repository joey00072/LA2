import React, { useState } from 'react'
import './form.css'
import { Link } from 'react-router-dom'
const Form = () => {
    const [name, setName] = useState('')
    const [city, setCity] = useState('')
    const [branch, setBranch] = useState('')
    const [date, date] = useState('')
    const handleSubmit = (e) => {
        alert(`
            Name: ${name}
            City: ${city}
            Branch: ${branch}
            date: ${date}
        `)
        e.preventDefault();
    }


    return (
        <div className='page'>
            <h1>AWAMAD LA1 date Form</h1>
            <form className='conf-form' onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input onChange={e => { setName(e.target.value) }} value={name} id="name" type="text" name="Name" />
                <label htmlFor="city">City</label>
                <input onChange={e => { setCity(e.target.value) }} value={city} id="city" type="text" name="City" />
                <label htmlFor="branch">Branch</label>
                <input onChange={e => { setBranch(e.target.value) }} value={branch} id="branch" type="text" name="Branch" />
                <label htmlFor="date">date</label>
                <input onChange={e => { date(e.target.value) }} value={date} id="date" type="text" name="date" />

                <input type="submit" value="Submit" />

            </form>
        </div>
    )
}

export default Form
