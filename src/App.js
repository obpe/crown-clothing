import './App.css';
import HomePage from "./pages/homepage/homepage";
import ShopPage from "./pages/shop/shop";
import Header from "./components/header/header";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up";
import {Switch, Route} from 'react-router-dom';
import {auth} from './firebase/firebase.utils';
import {useState, useEffect} from "react";

function App() {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(()=>{
        auth.onAuthStateChanged(user=>{
            setCurrentUser(user);
            console.log(currentUser);
        })
    }, [currentUser])

    return (
        <div>
            <Header currentUser={currentUser}/>
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route  path='/shop' component={ShopPage} />
                <Route path='/sign-in' component={SignInAndSignUp}/>
            </Switch>
        </div>
    );
}

export default App;
