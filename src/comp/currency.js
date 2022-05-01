import { atom, selector, useRecoilState, useRecoilValue } from 'recoil'

const exchangeRate = 1.3

const euroAtom = atom({
    key: 'euro',
    default: 1.0
})

const usdSelector = selector({
    key: 'usd',
    get: ({get})=>get(euroAtom) * exchangeRate,
    set: ({set},newVal)=>{
        set(euroAtom, newVal/exchangeRate)
    }
})

function Currency(){
    const [euro,setEuro] = useRecoilState(euroAtom)
    const [usd,setUsd] = useRecoilState(usdSelector)

    return(
        <div>
            
            <label>EUR (state)</label>
            <input type="text" value={euro} onChange={ev=>setEuro(ev.target.value)} />
            <label> - </label>
            <label>USD (selector)</label>
            <input type="text" value={usd} onChange={ev=>setUsd(ev.target.value)} />
            
        </div>
    )
}


export default function Home(){
    return (
        <div>
            <p>
                A selector is derived from anotehr state, 
                but can also be given a set function for the affects the state is was derived from
                this allows data to flow both ways, and state to stay in sync easily
            </p>
            <h2>Currency </h2>
            <Currency />
        </div>
    )
}