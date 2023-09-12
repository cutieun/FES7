import React, {useState} from 'react'
import Login from './Components/Login';
import Homepage from './Components/Homepage';
import Modal from './Components/Modal';

export default function App3() {
    const user = {
        idUser: 'jieun',
        pwUser: 1234
    }

    // 로그인 상태를 판단하는 state
    const [login, setLogin] = useState(false);
    // 모달이 보여지는 여부를 판단하는 state
    const [modalShow, setModalShow] = useState(true);

    return (
        <>
            {login ? <Homepage setLogin = {setLogin}/> : <Login infoUser={user} setLogin = {setLogin}/>}
            {modalShow && <Modal setModalShow={setModalShow}/> }
            
        </>
    );
}