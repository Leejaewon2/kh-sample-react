// props 기본값 설정 : defaultProps ({중괄호가 들어가 있으면 구조분해라고 생각하면됨})
// const MyComponent = ( {name, age, children} ) => {} 해도 아래와 똑같고 이렇게 했을경우
//   const { name, age, children } = props; 이 값을 지우고 써야함

const MyComponent = (props) => {
  // 비구조화할당(구조 분해) : props 객체의 속성과 값을 변수에 각각 대입 함
  const { name, age, children } = props;
  return (
    <div>
      안녕하세요. 제 이름은 {name} 이며, 나이는 {age}, 인사말
      {children}
    </div>
  );
};

MyComponent.defaultProps = {
  name: "기본이름",
  age: 20,
};

export default MyComponent;
