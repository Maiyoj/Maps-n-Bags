import {useState} from "react"

function Search({setData}){
    function handleChange(e){
        setData(e.target.value)
    }


    return (
        <>
        <div className="form">
            <input placeholder="Search Blog" onChange={handleChange}></input>
        </div>
        </>
    )
}
export default Search