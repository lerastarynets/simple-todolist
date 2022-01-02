import { useState } from "react";
import s from "./Todo.module.css";

const Todo = () => {
  let [list, setList] = useState([]);
  let [inputVal, setInputVal] = useState("");

  const handleClick = () => {
    setList([...list, inputVal]);
    setInputVal("");
  };
  const handleChange = (e) => {
    setInputVal(e.currentTarget.value);
  };
  return (
    <div className={s.listContainer}>
      <h1 className={s.listName}>Simple To-Do List</h1>
      <input
        className={s.listInput}
        type="text"
        value={inputVal}
        onChange={handleChange}
      />
      <button className={s.listButton} onClick={handleClick}>
        Add
      </button>
      <div className={s.list}>
        {list.map((i, idx) => {
          return <li key={idx}>{i}</li>;
        })}
      </div>
    </div>
  );
};

export default Todo;
