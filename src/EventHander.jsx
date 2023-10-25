import { useState } from "react";

const EventHandler = () => {
  const [userName, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const onChangeUserName = (e) => setUsername(e.target.value);
  const onChangeMessage = (e) => setMessage(e.target.value);
  const onClick = () => {
    alert(userName + " : " + message);
    setUsername("");
    setMessage("");
  };
  const onKeyPress = (e) => {
    if (e.key === "Enter") onClick();
  };

  return (
    <>
      <h1>이벤트 연습</h1>
      <input
        type="text"
        placeholder="사용자명"
        value={userName}
        onChange={onChangeUserName}
      />
      <input
        type="text"
        placeholder="메세지를 입력하세요."
        value={message}
        onChange={onChangeMessage}
        onKeyDown={onKeyPress}
      />
      <button onClick={onClick}>확인</button>
    </>
  );
};

export default EventHandler;
