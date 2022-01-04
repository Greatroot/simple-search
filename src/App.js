import React, {useEffect, useState, useRef } from 'react';
import Axios from './Axios';
import SearchBar from "./SearchBar/SearchBar";
import SearchResult from "./SearchResult/SearchResult";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const Results = () => {
    // Supposed to be an array, NOT an object!!! How I fixed the "setInput not a func" error.
    const [ input, setInput ] = useState(""); // The input the user types in.
    const [ fruits, setFruits ] = useState([])// The fruits the user searched for
    // const [ filteredFruit, setFilteredFruit ] = useState([]); // The fruits the user filtered for.

    const firstUpdate = useRef(true); // True if component hasn't mounted yet, false if it already has.
    // Being used so that we can have the useEffect hook do 2 different things based
    // on whether it has run for the first time or sometime after.

    // Should it only get fruits every page refresh or more frequently than that?
    // Play around with the difference between getting data once per page refresh or more. Test performance.

    // Acts as "componentDidMount"
    // useEffect(() => {
    //     // Fill this out later when we connect to the backend.
    //     // The idea will be to make an api call after every full second
    //     // of the user not typing anything into the search bar, no hitting
    //     // enter required.
    //
    //     if(firstUpdate.current) { // if this is the first time we are mounting the page, then get our fruits from the database.
    //         getFruits();
    //         console.log(`Got reviews in useEffect(): ${fruits}` )
    //         firstUpdate.current = false;
    //     }
    //
    // }, [fruits]);

    // For when the input field updates (so when the user enters a keystroke into the searchbar).
    useEffect(() => {
        const eventObj = { target: { value: input } };
        console.log(`eventObj.target.value = ${eventObj.target.value}`)
        getFruits(eventObj.target.value); // TODO: Change if possible.
    }, [input]);

    const renderResults = () => {
        if(fruits !== undefined)
        {
            return fruits.map((fruit) => { // The logic below is for passing the parsed entryDate of each record to their SearchResults component.

                return (
                    <div className="item" key={fruit.id}>
                        <SearchResult genus={fruit.genus}
                                      name={fruit.name}
                                      family={fruit.family}
                                      order={fruit.order}
                                      nutritions={fruit.nutritions}
                        />
                    </div>
                );
            });
        }
    };

    const getFruits = (searchTerm) => {
        Axios.get(`${searchTerm}`).then((response) => {
            console.log(response);
            // Filter the fruits so that they are initially in order by most recent to least recent.
            const reviewsInOrder = response.data.reverse();
            console.log(response.data);
            setFruits(response.data);
        }).catch(({response}) => {
            // Put stuff in here if you want to handle heroku crashing in a user friendly way.
        });
    }

    // TODO: Currently runs every single keystroke. Make it so there is a delay before running setInput().
    const handleUserTyping = (event) => {
        setInput(event.target.value);
        // // getFruits(); Should it only get fruits every page refresh or more frequently than that?
        // searchResults(event);
    };

    return(
        <>
            <Header bottomBorder="true" />
            <div className="results-container">
                <div className="searchBar-container">
                    <SearchBar type = "text"
                               placeholder = "Search for a fruit"
                               name = "fruitName"
                               value = { input }
                               onChange = { handleUserTyping }
                    />
                </div>
                <div className="search-term">
                    {(input !== "") ? (
                            <h1>{`Results for "${input}"`}</h1>
                        ) :
                        null
                    }
                </div>
                <div className="search-results">
                    {/*{renderResults()}*/}
                </div>
                {/*<Footer />*/}
            </div>
        </>
    );
};

export default Results;
