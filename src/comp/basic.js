import { atom, selector, useRecoilState, useRecoilValue } from 'recoil'

const countState = atom({   key: 'count', default: 0,   })

function Counter(){

    const [count,setCount] = useRecoilState(countState)

    const increment = ()=>setCount(count+1)
    const decrement = ()=>setCount(count-1)

    console.log('\t<Basic ')

    return(
        <div>
            <div>Count : {count} </div>
            <div>
                change count
                <button onClick={()=>increment()} >Add</button>
                <button onClick={()=>decrement()} >Sub</button>
            </div>

        </div>
    )
}


const squareState = selector({
    key: 'square', 
    get: ({get})=>{
        const count = get(countState)
        return Math.pow(count,2)
    }
})

function Square(){
    const square = useRecoilValue(squareState)
    console.log('\t<Square ')

    return (
        <div>
            Derived state = selector
            <div>Square : {square} </div>
        </div>
    )
}

export default function Home(){
    console.log('<Home ')
    return (
        <div>
            <p>
                The most basic example : a counter state with set functions - add and sub
            </p>

            <h2>State</h2>
            <Counter />

            <p>
                A selector is like another separate state that is set to be derived from another state.
                This is automatically updated, when, and only when, the state it depends on changes
            </p>
            <h2>Selector</h2>
            <Square />
        </div>
    )
}