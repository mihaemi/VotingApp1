// any variable that should impact the Update MUST BE changed using STATE mechanism
// using STATE HOOK ---> useState()

import { useState } from "react"

const VoteComponent = ({question, options}) => {
//  let votes = new Array(options.length).fill(0)
    let [votes, setVotes] = useState(new Array(options.length).fill(0))
        
    let buttons = options.map(
        (option, index) => <button data-idx={index} onClick={
            (e)=>{
                let idx = e.target.getAttribute('data-idx')
                votes[idx]++

                // clone the array using map
                //setVotes(votes.map( e => e ))

                // clone the array using spread
                setVotes([...votes])

                // react STATE values are considered IMMUTABLE!!
                console.log(votes)
            }
        }>{option} ({votes[index]})</button>
    )

    let totalVotes = votes.reduce((acc, vote) => acc + vote, 0)

    
    // HW3: render total votes
        
    // HW1: create and fill the array using at least 2 other variants
    //      hint: use map

    // let votes = new Array(options.length).map(()=>0)
    // console.log(votes)

    // let votes = new Array(options.length)
    // for (let i=0; i<options.length; i++) {
    //     votes[i]= 0
    // }
    // console.log(votes)

    // HW2: using the .map() and votes array - show the votes in brackets
    
    return (
        <div>
            <h2>{question}</h2>
            <h3>Total: {totalVotes}</h3>
            {buttons}
        </div>
    )
}

export default VoteComponent


/*
        container
-------------------------
|                       |
|                       |----> ReactDOM
|     initial_value     |
|                       |
-------------------------     
    |               |
    |               |
 variable       setVariable
    |               |
    ⌄               ^

const someFunctionalComponent = () => {
    let [variable, setVariable] = useState(initial_value)
    setVariable(new_value)

    return (
        ...
        template {variable}
        ...
    )
}


*/