import './App.css';
import HomePage from "./pages/homepage/homepage";
import ShopPage from "./pages/shop/shop";
import Header from "./components/header/header";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up";
import {Switch, Route, Redirect} from 'react-router-dom';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import {useEffect} from "react";
import {connect} from "react-redux";
import {SetCurrentUser} from './redux/user/user.actions'

function App(props) {
    const {setCurrentUser} = props;

    useEffect(() => {
        auth.onAuthStateChanged(async userAuth => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth);

                userRef.onSnapshot(snapShot => {
                    setCurrentUser(
                        {
                            id: snapShot.id,
                            ...snapShot.data()
                        }
                    )
                })
            }
            setCurrentUser(userAuth)
        })
    }, [setCurrentUser]);

    return (
        <div>
            <Header/>
            <Switch>
                <Route exact path='/' component={HomePage}/>
                <Route path='/shop' component={ShopPage}/>
                <Route exact path='/sign-in' render={() =>
                    props.currentUser ? (
                        <Redirect to='/'/>
                    ) : (
                        <SignInAndSignUp/>
                    )
                }
                />
            </Switch>
        </div>
    );
}

const mapStateToProps = ({user}) => ({
    currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(SetCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
