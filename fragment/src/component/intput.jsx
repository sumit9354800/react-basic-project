import style from './input.module.css'

const Input = ({ hendalKeydown }) => {
  return <input type="text"
    className={`${style.Input}`} 
    placeholder='Enter Item'
    onKeyDown={hendalKeydown}
      />;
}

export default Input;
