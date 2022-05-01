import React from 'react';
import { atom, selector, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'


const todoListState = atom({
    key: 'todoListState',
    default: [],
  });

const todoListFilterState = atom({
    key: 'todoListFilterState',
    default: 'Show All',
});


const filteredTodoListState = selector({
    key: 'filteredTodoListState',
    get: ({get}) => {
      const list = get(todoListState);
      const filter = get(todoListFilterState);
  
      switch (filter) {
        case 'Show Completed':
          return list.filter((item) => item.isComplete);
        case 'Show Uncompleted':
          return list.filter((item) => !item.isComplete);
        default:
          return list;
      }
    },
  });
  
const todoListStatsState = selector({
    key: 'todoListStatsState',
    get: ({get})=>{
        const todoList = get(todoListState)
        
        return {
            total: todoList.length,
            completed: todoList.filter(it=>it.isComplete).length,
            uncompleted: todoList.filter(it=>!it.isComplete).length,
        }
    }
})

var id = 0;
const getId = ()=>{
    return id++;
}

const ItemCreator = ()=>{
    const [inputValue, setInputValue] = React.useState('');

    const setTodoList = useSetRecoilState(todoListState)

    const type = (ev)=>{
        if(ev.keyCode===13){
            setTodoList((old)=>[...old,{
                id: getId(),
                text: inputValue,
                isComplete: false,
            }])
            setInputValue('')
        }
    }

    return (
    <div>
        <div>Add to DO : </div>
        <input type="text" value={inputValue} onInput={(ev)=>setInputValue(ev.target.value)} onKeyDown={type} />
    </div>)
}

// { id, text, isCOmplete}
const ListItem = ({data})=>{

    const [todoList,setTodoList] = useRecoilState(todoListState)
    const index = todoList.findIndex(li=>li===data)
    
    console.log('<Li ', index, data)

    const toggle = ()=>{
        setTodoList( (old)=> [...old.slice(0,index),{...data,isComplete: !data.isComplete },...old.slice(index+1) ] )
    }
    const remove = ()=>{
        setTodoList( (old)=> [...old.slice(0,index), ...old.slice(index+1) ] )
    }
    const update = (ev)=>{
        setTodoList( (old)=> [...old.slice(0,index),{...data,text: ev.target.value },...old.slice(index+1) ] )
    }
    return (
        <li>
            <input type="checkbox" checked={data.isComplete} onChange={toggle}  />
            <input type="text" value={data.text} onChange={update} />
            <button onClick={remove} >X</button>
        </li> 
    )
}

function TodoListFilters() {
    const [filter, setFilter] = useRecoilState(todoListFilterState);
  
    const updateFilter = ({target: {value}}) => {
      setFilter(value);
    };
  
    return (
      <>
        Filter:
        <select value={filter} onChange={updateFilter}>
          <option value="Show All">All</option>
          <option value="Show Completed">Completed</option>
          <option value="Show Uncompleted">Uncompleted</option>
        </select>
      </>
    );
  }


  function Stats(){
    const stats = useRecoilValue(todoListStatsState)

    console.log('  <Stats ')
    return (
        <div>STATs :: {JSON.stringify(stats)} </div>
    )
  }
  
export default function ToDo(){

    // const todoList = useRecoilValue(todoListState);
    const todoList = useRecoilValue(filteredTodoListState);


    return (
        <div>
            <h2>TO DO LIST</h2>
            <TodoListFilters />
            <main>
                <ItemCreator />
                <ul>
                    {todoList.map((item)=>(
                        <ListItem key={item.id} data={item} />
                    ))}
                </ul>
                <Stats />
            </main>
        </div>
    )
}