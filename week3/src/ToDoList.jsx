import React, { useState } from "react";
import styles from "./ToDoList.module.css";
import ToDoListBox from "./ToDoListBox";

function ToDoList() {
  const [toDoList, setToDoList] = useState([
    { id: "", title: "", content: "", isDone: false },
  ]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

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
    const newToDoList = toDoList.map((item) => {
      if (id == item.id) {
        return { ...item, isDone: !item.isDone };
      } else {
        return item;
      }
    });
    setToDoList(newToDoList);
  };

  const notToDo = toDoList.filter((item) => item.isDone == false);
  const doneToDo = toDoList.filter((item) => item.isDone == true);

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
            <ToDoListBox item={item} key={item.id} onToggle={onToggle} />
          ))}
        </div>
        <div className={styles.done}>Done..!🥳</div>
        <div className={styles.app_style}>
          {doneToDo.map((item) => (
            <ToDoListBox item={item} key={item.id} onToggle={onToggle} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ToDoList;
{
  /* 질문사항. */
}
{
  /* 왜? 이벤트 리스너 안에서 매개변수를 주려면 arrow function으로 감싸줘야하는지 */
}
{
  /* 컴포넌트를 분리하는 부분 다시 확인 필요. */
}
