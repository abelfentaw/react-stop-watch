
function List(){
const fruits=[{id:1, name:'orange', calories:32},
              {id:2, name:'banana', calories:54},
              {id:3, name:'apple', calories:55},
              {id:4, name:'coconut', calories:25},
              {id:5, name:'pinaple', calories:85}
]
fruits.sort((a,b)=>a.calories-b.calories);
// const highCala=fruits.filter(fruit=>fruit.calories>=2)

const fruitItem=fruits.map(fruit=><li key={fruit.id}>{fruit.name}: &nbsp; <b>{fruit.calories}</b></li>)
    return(<ol>{fruitItem}</ol>);
}
export default List