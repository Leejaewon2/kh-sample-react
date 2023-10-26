// useEffect: 생명주기 메소드를 대체하는 React Hook 중 하나
// 컴포넌트가 렌더링될 때마다 특정 동작을 수행
// useEffect는 컴포넌트가 렌더링된 이후에 수행되며, 기본적으로는 매 랜더링 마다 수행 됨
// 의존성배열에 전달된 상태가 변경될 때 마다 수행되게 함
import { useState, useEffect } from "react";

const MemberInfo = () => {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  useEffect(() => {
    console.log("렌더링이 완료되었습니다.");
    console.log({ name, nickname });
  });

  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeNickname = (e) => {
    setNickname(e.target.value);
  };

  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName} />
        <input value={nickname} onChange={onChangeNickname} />
      </div>
      <div>
        <div>
          <b>이름 : </b> {name}
        </div>
        <div>
          <b>닉네임 : </b> {nickname}
        </div>
      </div>
    </div>
  );
};

export default MemberInfo;
