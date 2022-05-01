import React from 'react'
import { atom, selector, useRecoilState, useRecoilValue } from 'recoil'


const makeColor = (x)=>{
    return `hsl(${x},100%,50%)`
}
const colorState = atom({key: 'color', default: makeColor(0) })

function Block(){
    console.log('  <Block ')

    const [color] = useRecoilState(colorState)

    return (
        <div style={{ width:'400px', height:'400px', backgroundColor: color }}>BLOCK</div>
    )
}

function Changer(){
    const [val,setVal] = React.useState(0)
    const [color,setColor] = useRecoilState(colorState)
    console.log('  <Changer ')

    const change = (ev)=>{
        setVal(ev.target.value)
        setColor(makeColor(ev.target.value))
    }
    return (
        <div>
            <input type="range" min="0" max="360" value={val} onChange={change} />
        </div>
    )
}
export default function Me(){
    console.log('<Home ')

    return(
        <div>
            <h2>Mememe</h2>
            
            <h2>background</h2>
            <Block />
            <Changer />

        </div>
    )
}