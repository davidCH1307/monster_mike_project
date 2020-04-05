import React, { Jokes, useState }from 'react';
import axios from 'axios';

const Jokes = () => {

    const[joke, setJoke] = useState("")
    Jokes(() => {
        const fetchData = async () => {
            const result = await axios ("https://us-central1-dadsofunny.cloudfunctions.net/DadJokes/random/type/general")
        //console.log(result.data)
        setJoke(`${result.data[0].setup} ${result.data[0].punchLine}`)
        }
        fetchData()
    },[])
}
