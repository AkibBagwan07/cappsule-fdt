import React, { useEffect, useState } from 'react'
import styles from "./SearchBar.module.css"
import {ReactComponent as SearchIcon} from "../images/searchIcon.svg"
import DisplayMedicines from '../displayMedicines/DisplayMedicines'
import axios from "axios"

const SearchBar = () => {
    const [search,setSearch] = useState(null)
    const [searchedMedicinesData,setSearchedMedicniesData] = useState([])
    const [showBanner,setShowBanner] = useState(true)

    useEffect(()=>{
       (async function(){
        try {
            let data = await axios.get(`https://backend.cappsule.co.in/api/v1/new_search?q=${search}&pharmacyIds=1,2,3`)
             setSearchedMedicniesData(data.data.data.saltSuggestions)
             console.log(data.data.data.saltSuggestions)
        } catch (error) {
            console.log(error)
        }
       }
       )
       ()
    },[search])

    return (
    <div>
        <SearchIcon className={styles.SearchIcon}/>
        <form onSubmit={(e)=>{
            e.preventDefault()
            if (e.target.input.value){
            setSearch(e.target.input.value)
            setShowBanner(false)
            }
        }}>
        <input placeholder='Type your medicine name here' name='input' className={styles.inputBar} type="text" />
        <button type='submit' className={styles.searchBtn}>Search</button>
        </form>
        <hr className={styles.line}/>
        <div>
        {searchedMedicinesData && <DisplayMedicines medicines={searchedMedicinesData}/>}
        {showBanner===true && <h1 className={styles.banner}>"Find Medicines with amazing Discount"</h1>}
        </div>
    </div>
  )
}

export default SearchBar