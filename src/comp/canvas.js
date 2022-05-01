import React from "react"
import { atom, atomFamily, selector, useRecoilState, useSetRecoilState, useRecoilValue } from "recoil"
import './dude.css'

const elementsList = atom({
    key: 'elements',
    default: [],
})

const elementState = atomFamily({
    key: 'element',
    default: {
        value: 0,
    }
})

const selectedElement = atom({
    key: 'selected',
    default: null,
})

function Rect({id}){
    const [element,setElement] = useRecoilState(elementState(id))

    console.log(`\t<element ${id} = ${element.value} `)

    const click = (ev)=>{
        setElement({
            value: element.value+1,
        })
    }
    return (
        <div 
            style={{
                margin: '8px',
                padding: '8px',
                backgroundColor: '#ddd',
            }}
            onClick={click}
            > {id} : {element.value}</div>
    )
}

function AddRect(){
    const setElements = useSetRecoilState(elementsList)
    
    const click = ()=>{
        setElements(elements=>[...elements,elements.length])
    }
    return (
        <div>
            <button onClick={click}>CLICK</button>
        </div>
    )
}

export default function Page(){

    const elements = useRecoilValue(elementsList)

    console.log('<List ')

    return (
        <div>
            <h2> <a href="https://gist.github.com/jacques-blom/54bbc7773422c040f0ea218ef492eaca">Canvas : Rectangles example </a></h2>
            
            <div>
                <AddRect />
            </div>
            <div>
                {elements.map(id=>(
                    <Rect key={id} id={id} />
                ))}
            </div>
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

