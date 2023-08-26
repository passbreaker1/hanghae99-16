import React from "react";
import { useState } from "react";
function Login() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  function changeId(event) {
    setId(event.target.value);
  }
  function changePassword(event) {
    setPassword(event.target.value);
  }
  function onClick() {
    alert(
      `고객님이 입력하신 아이디는 ${id} 이며, 비밀번호는 ${password} 입니다.`
    );
    setId("");
    setPassword("");
  }

  return (
    <div>
      아이디 : <input onChange={changeId} value={id} type="text" />
      <br />
      비밀번호 :
      <input onChange={changePassword} value={password} type="password" />
      <br />
      <button onClick={onClick}>로그인</button>
    </div>
  );
}

export default Login;
