import { useState } from "react";

function Resume (props){
    // let like = 0;

    const [like, setLike] = useState("");

    function clickLike() {
        // like += 1;
        setLike(like === "" ? "like" : "");
        console.log(like);
    }

    return (
        <div style={{border: "1px solid black", width: "300px"}}>
            <h1>{props.name} 자기소개서</h1>
            <h2>{props.hello}</h2>
            <h3>취미 : {props.hobby}</h3>
            <h3>좋아하는 음식 : {props.food}</h3>
            <h3>좋아하는 색 : <span style={{color:props.color}}>{props.color}</span></h3>
            {/* <button onClick={clickLike}>like <span>{like}</span></button> */}
            <button onClick={clickLike}>like</button> <span>{like}</span>
        </div>
    )
}

export default Resume;