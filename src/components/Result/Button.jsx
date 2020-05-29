import React from 'react';
import { useHistory } from "react-router-dom";
import fillnamenext from '../../asserts/pic/fillnamenext.png';

export default function Button(props){
    let history = useHistory();

    const name = props.name;
    const gender = props.gender;
    const result = props.result;

    function handleClick() {
        if(name !== "" && gender !=="")
        {
            history.replace("/" + result + "/" + name);
        }
        else if (gender === ""){
            alert("请选择性别");
        }
        else if (name === ""){
            alert("请输入姓名");
        }
    }

    return (
        <div className="App-fillname-circle" onClick={handleClick}>
            <img src={fillnamenext} alt='getresult'></img>
        </div>
    );
}