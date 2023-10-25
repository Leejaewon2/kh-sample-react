import { Fragment } from "react";
import "./App.css";
// import MyComponent from "./MyComponent";
// import WelcomeProp from "./WelcomeProps";
// import Section from "./Section";
// import puppyImg from "./images/puppy1.jpg";
// import Say from "./Say";
// import Clock from "./Clock";
// import EventPractice from "./onChange";
// import EventHandler from "./EventHander";
// import FruitSelect from "./FruitSelect";
// import RadioButton from "./RadioButton";
// import Table from "./Table";
// import TableMap from "./TableMap";
import CreateRef from "./UseRef";

function App() {
  // const name = "이재원";
  // const member = {
  //   name: "이재원",
  //   job: "개발자",
  //   age: 28,
  //   addr: "경기도 광주시",
  //   gender: "남성"

  // const getGeeting = (user) => {
  //   return (user) ? (<h1>환영합니다. {member.name}</h1>) : (<h1>환영합니다. 방문자님.</h1>)
  // }

  // 스타일 이름은 전부 카멜 표기법으로 변경 됨
  // const test = {
  //   backgroundColor: "#222",
  //   color: "royalBlue",
  //   fontSize: "2em",
  // }

  // 코딩하는곳 화면을 보여주는곳 + 이벤트 처리하는곳
  return (
    // Fragment 쓰거나<></> 빈태그를 써서 영역으로 감싸줘야함 아니면 에러발생함
    // <Fragment>
    //   <h1 style={{color: "blue"}}>안녕하세요. 제 이름은 {member.name} 이고, 나이는{member.age}이며, 주소는 {member.addr} 입니다.</h1>
    //   {/* 조건부 렌더링 : 3항 연산자 사용하는 방법 */}
    //   {member.name === "리액트" ? <h1>제 이름은 리액트 입니다.</h1> : <h2>제 이름은 리액트가 아닙니다.</h2>}
    //   {/* 조건부 렌더링 : AND 연산자 사용 */}
    //   {member.name === "이재원" && <h1 style={test}>이재원님이 로그인 하셨습니다.</h1>}
    //   <div className="App">
    //     <p className="title-name">안녕하세요. 저는 {member.name} 입니다.</p>
    //     <p className="title-name">직업 : {member.job}</p>
    //     <p className="title-name">주소 : {member.addr}</p>
    //     <p className="title-name">성별 : {member.gender}</p>
    //     <div>{getGeeting(true)}</div>
    //   </div>
    //   <br/>
    // </Fragment>

    // <>
    //   <WelcomeProp name="이재원" addr="경기도 광주시" age= {28}/>
    //   <WelcomeProp name="유신재" addr="경기도 광주시" age= {28}/>
    //   <WelcomeProp name="윤준형" addr="경기도 광주시" age= {28}/>
    // </>

    // <>
    //   <Section title="스포츠" content="This is the content for section 1."/>
    //   <Section title="정치" content="This is the content for section 2."/>
    // </>
    <>
      {/* <MyComponent name="이재원" age={30}>
        안녕하세요^^
      </MyComponent> */}
      {/* <Say /> */}
      {/* <Clock /> */}
      {/* <EventPractice /> */}
      {/* <EventHandler /> */}
      {/* <FruitSelect /> */}
      {/* <RadioButton /> */}
      {/* <Table /> */}
      {/* <TableMap /> */}
      <CreateRef />
    </>
  );
}

export default App;
