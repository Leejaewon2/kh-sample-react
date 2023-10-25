import { useState } from "react";

const Table = () => {
  const data = [
    { id: 1, name: "장원영", age: 20 },
    { id: 2, name: "이서", age: 18 },
    { id: 3, name: "가을", age: 22 },
    { id: 4, name: "리즈", age: 21 },
  ];
  const handleTableRowClick = (item) => {
    console.log(item);
  };
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>이름</th>
          <th>나이</th>
        </tr>
      </thead>
      <tbody>
        {/* map에서는 id값이 없으면 warning이 떨어지기 때문에 id값이 필요함 
            map을 쓸때는 key값을 넣어야 성능을 좋게할수있음 key값을 안넣어도 
            문제는 없지만 식별자 역할을 못해서 성능저하를 유발함
        */}
        {data.map((item) => (
          <tr key={item.id} onClick={() => handleTableRowClick(item)}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.age}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
