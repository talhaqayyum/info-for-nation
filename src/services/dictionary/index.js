import React, { useState } from 'react';
import axios from 'axios'



function Dictionary() {

    const [data, setData] = useState([]);

    // const [input, setInput] = useState("")


    const handleInput = () => {
        console.log("clicked")
    }


    axios
        .get("https://api.dictionaryapi.dev/api/v2/entries/en_US/car")
        // .then(res => console.log(res))
        .then(function (result) {
            // console.log(result)
            let d = result.data[0]
            console.log(d)
            setData(d)
        })
        .catch(err => {
            console.log(err);

        });



    return (
        <div>
            <form onSubmit={handleInput()} >
                <input type="text" />
                <button type="submit" >search</button>
            </form>
            <div>
                <h2>word</h2>
                <h1>{data?.word}</h1>
                {/* {
                    data?.phonetics.map((c,i) => (
                        <div>
                            <h1>{c.text}</h1>
                        </div>
                    ))
                } */}
            </div>


        </div>
    );
}

export default Dictionary;
