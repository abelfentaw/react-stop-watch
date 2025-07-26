import style from './button.module.css'

function Button(){
  let count = 0;
const handleClick= (e)=>e.target.textContent= "hello Abel"
  return(
    <button className={style.button} onDoubleClick={ (e) => handleClick(e)}>Click Me</button>
  );
}
export default Button