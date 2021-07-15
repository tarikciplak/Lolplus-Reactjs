import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { ChevronIcon, SearchIcon } from '../icons/Icons'


const SearchBar = ({ setNickname }) => {

    const [change, setChange] = useState("");
    const history = useHistory();


    const handleSubmit = () => {
        if (change !== null && change !== undefined) {
            setNickname(change)
            history.replace({pathname:`/summoner/${change}`})
        }
    }
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h3 className="text-3xl font-bold text-amber300">League Of Legends</h3>
            <h1 className="text-5xl font-bold text-violetlight">LOLPlus Game statics</h1>
            <div className="mt-5 px-1 border-2 focus-within:ring-1 focus-within:ring-amber300">
                <form onSubmit={() => { handleSubmit() }} className="flex w-96 h-20 items-center justify-between mx-auto ">
                    <input type="text" value={change} onChange={e => setChange(e.target.value)} className="focus:outline-none text-2xl rounded-lg bg-transparent text-amber300"
                        placeholder="Summoner Name..." ></input>
                    <button><ChevronIcon></ChevronIcon></button>
                    <button type="submit" value="Submit"><SearchIcon /></button>
                </form>

            </div>


        </div>
    )
}

export default SearchBar
