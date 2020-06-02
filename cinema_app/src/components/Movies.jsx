import React, {useState} from 'react';
import Search from './Search';
import axios from 'axios';
import Results from './Results';
import Popup from './Popup';


function Movies() {
    const [state, setState] = useState({
      s: "",
      results: [],
      selected: {}
    });

    const apiurl = "http://www.omdbapi.com/?apikey=101f247f";

   
  const search = (e) => {
    if (e.key === "Enter") {
      axios(apiurl + "&s=" + state.s).then(({ data }) => {
        let results = data.Search;

        setState(prevState => {
          return { ...prevState, results: results }
        })
      });
    }
  }
   
    const handleInput = (e) => {
       let s = e.target.value;
          
        setState(prevState => {
          return {...prevState, s: s}
        });
    }

    const openPopup = id => 
    { axios(apiurl + "&i=" + id ). then (({data}) => {
      let result = data;

            console.log (result);

      setState(prevState => {
        return { ...prevState, selected :result}
      })
    })
  }


    const closePopup = () => {
      setState(prevState => {
        return { ... prevState, selected: {} }
      });
    }


  return (
    <div className="movieWrap">
       <main>
        
            <Search handleInput={handleInput} search={search} />
            <Results results={state.results} openPopup={openPopup} />
  
{/* if equals to undefined it won't show the popup but if it is defined it will show the popup */}
            {(typeof state.selected.Title != "undefined") ? <Popup selected = {state.selected} closePopup={closePopup} /> :false}
           
        </main>

       
    </div>
  );
}

export default Movies;