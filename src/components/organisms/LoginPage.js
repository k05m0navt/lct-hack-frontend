import { useState } from "react";
import { Redirect } from "react-router-dom";

function LoginPage(props) {
    const rightLogin = "k05m0navt";
    const [login, setLogin] = useState("");
    const [isLog, setIsLog] = useState(false);

    const handleChange = (e) => {
        setLogin(e.target.value);
    };

    const handleSubmit = () => {
        console.log(login === rightLogin);
        if (login === rightLogin) setIsLog(true);
    };

    const renderRedirect = () => {
        if (isLog) {
            return <Redirect to='/home' />;
        }
    };

    return (
        <div className={props.className}>
            {renderRedirect()}
            <div className='shadow-2xl p-20'>
                <p className='font-bold text-xl'>Войти</p>
                <div className='form mt-5'>
                    <input
                        className='border-solid border-2 border-gray-600'
                        type='text'
                        placeholder='Логин'
                        value={login}
                        onChange={handleChange}
                    />
                    <button
                        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-5'
                        onClick={handleSubmit}
                    >
                        Вход
                    </button>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
