import React, { useState } from "react";
import styles from "./ToDoListBox.module.css";

function ToDoListBox({ item, onToggle, removeBtn }) {
  if (item.title == "") {
    return null;
  }
  return (
    <div className={styles.box_style} key={item.id}>
      {item.title}
      <br />
      {item.content}
      <br />
      <button className={styles.remove} onClick={removeBtn}>
        삭제하기!
      </button>
      <button className={styles.succes} onClick={onToggle}>
        완료!
      </button>
    </div>
  );
}

export default ToDoListBox;
