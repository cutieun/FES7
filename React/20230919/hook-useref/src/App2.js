import React, { useState, useRef } from "react";

const App = () => {
    const [emailValue, setEmailValue] = useState(""); // email state 값
    const [pwValue, setPwValue] = useState(""); // pw state 값
    const emailInput = useRef(null);
    const pwInput = useRef(null);
    // useRef 사용이유
    // 원래 값을 잃어버리고 싶지 않을 경우
    // 특정한 값을 선택하고 싶을 경우
    const inputCheck = (e) => {
        e.preventDefault();

        if(emailInput.current.value === "") {
            alert('이메일을 입력해주세요!');
            emailInput.current.focus();
            return;
        } else if(pwInput.current.value === ""){
            alert('비밀번호를 입력해주세요!');
            pwInput.current.focus();
            return;
        }

        setEmailValue(emailInput.current.value);
        setPwValue(pwInput.current.value);
    };

    return (
        <form onSubmit={inputCheck} style={{ display: "flex", flexDirection: "column" }}>
            <label>
                이메일 : <input type="email" ref={emailInput} />
            </label>
            <label>
                비밀번호 : <input type="password" ref={pwInput} />
            </label>

            <button type="submit" style={{ width: "100px" }}>
                로그인
            </button>
            <span>입력한 이메일 : {emailValue}</span>
            <span>입력한 비밀번호 : {pwValue}</span>
        </form>
    );
};

export default App;