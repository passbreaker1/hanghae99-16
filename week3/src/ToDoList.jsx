import React, { useState } from "react";
import styles from "./ToDoList.module.css";
import ToDoListBox from "./ToDoListBox";

function ToDoList() {
  const [toDoList, setToDoList] = useState([
    { id: 0, title: "", content: "", isDone: false },
  ]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const notToDo = toDoList.filter((item) => item.isDone == false);
  const doneToDo = toDoList.filter((item) => item.isDone == true);

  const changeTitle = (event) => {
    setTitle(event.target.value);
  };
  const changeContent = (event) => {
    setContent(event.target.value);
  };

  const onClick = () => {
    const newToDoList = {
      id: toDoList.length + 1,
      title: title,
      content: content,
      isDone: false,
    };
    setToDoList([...toDoList, newToDoList]);
    setTitle("");
    setContent("");
  };

  const onToggle = (id) => {
    const newToDoList = toDoList.map((item) =>
      item.id === id ? { ...item, isDone: !item.isDone } : item
    );
    setToDoList(newToDoList);
  };

  const removeBtn = (id) => {
    const newToDoList = toDoList.filter((item) => item.id !== id);
    setToDoList(newToDoList);
  };

  return (
    <div className={styles.main}>
      <div className={styles.body}>
        <div className={styles.header}>
          <div>My Todo List</div>
          <div>React</div>
        </div>
        <div className={styles.input}>
          제목 <input type="text" value={title} onChange={changeTitle} />
          내용 <input type="text" value={content} onChange={changeContent} />
          <button onClick={onClick}>입력하기!</button>
        </div>
        <div className={styles.working}>Working..🔥</div>
        <div className={styles.app_style}>
          {notToDo.map((item) => (
            <ToDoListBox
              item={item}
              key={item.id}
              removeBtn={() => removeBtn(item.id)}
              onToggle={() => onToggle(item.id)}
            />
          ))}
        </div>
        <div className={styles.done}>Done..!🥳</div>
        <div className={styles.app_style}>
          {doneToDo.map((item) => (
            <ToDoListBox
              item={item}
              key={item.id}
              removeBtn={() => removeBtn(item.id)}
              onToggle={() => onToggle(item.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ToDoList;
