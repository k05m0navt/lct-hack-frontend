import { BrowserRouter as Router, Route } from "react-router-dom";
import { LoginPage, MainPage } from "../organisms";

function MainRoute() {
    return (
        <Router>
            <Route
                exact
                path='/'
                render={() => (
                    <LoginPage className='login-page flex items-center h-screen justify-center' />
                )}
            />
            <Route
                exact
                path='/home'
                render={() => <MainPage className='main-page flex ml-10' />}
            />
        </Router>
    );
}

export default MainRoute;
