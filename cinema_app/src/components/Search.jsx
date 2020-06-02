import React from 'react'

function search({handleInput, search}) {
    return (
        <section className = "searchbox-wrap">
            <input type ="text"
             placeholder= "Search for a movie..." 
             className = "searchBox"
            onChange ={handleInput}
            onKeyPress={search}
            /> 
        </section>
    )
}

export default search