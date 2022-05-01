import React from "react"
import { atom, selector, useRecoilState, useRecoilValue } from "recoil"
import './dude.css'


const memoize = (fn) => {
    let cache = {};
    return (...args) => {
        let n = args[0];  // just taking one argument here
        if (n in cache) {
        return cache[n];
        }
        else {
        let result = fn(n);
        cache[n] = result;
        return result;
        }
    }
}

// * * * * * * Recoil

const itemsState = atom({
    key: 'items',
    default: [],
})

const itemWithID = memoize( id=> atom({
    key: `item${id}`, default: { x: 0, y:0 }
}))


const statState = selector({
    key: `statItem`,
    get: ({get})=>{
        const items = get(itemsState)
        const total = items.length        
        const sum = items.map(id=>get(itemWithID(id))).reduce((t,x)=>t+x.x,0)

        return {
            total, sum, 
        }
    }
})


var ID = 0;
const getId = ()=>ID++;

export default function Page(){

    const [items,setItems] = useRecoilState(itemsState)

    console.log('<Home : ', items)

    return (
        <div>
            <h2>add</h2>
            <Additem adder={()=>setItems([...items,getId()])} />

            <h2>Guys</h2>
            <div >
                {items.map(id=>(<Item key={id} id={id} />))}
            </div>

            <h2>GALS</h2>
            <div>
                {items.map(id=>(<Other key={id} id={id} />))}
            </div>
            
            <h2>Stats</h2>
            <Total ids={items} />
        </div>
    )
}

function Item({id}){
    const [itemState,setItemState] = useRecoilState(itemWithID(id))
    console.log('  <item id:',id, itemState)

    const click = ({target})=>{
        let _state = {...itemState}
        _state.x ++;
        _state.y += 2;
        setItemState(_state)    
    }

    return (
        <div onClick={click} className="block" >{JSON.stringify(itemState)}</div>
    )
}

function Other({id}){
    const [itemState,setItemState] = useRecoilState(itemWithID(id))
    console.log('   <other id:',id,itemState)

    return (
        <div>{JSON.stringify(itemState)}</div>
    )
}


function Total({ids}){
    const stats = useRecoilValue(statState)
    
    console.log('    <total :',stats)
    return(
        <div>
            <div>total : {stats.total} </div>
            <div>Sum : {stats.sum} </div>
        </div>
    )
}
function Additem({adder}){

    return(
        <div>
            add new one :
            <button onClick={adder} >+</button>
        </div>
    )
}

const randomColor = ()=>{
    let str = '#'
    for(let x=0;x<3;x++){
        let i = Math.floor( Math.random() * 10)
        str += `${i}`
    }
    return str;
}

