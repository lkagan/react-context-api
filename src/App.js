import React, { useState } from 'react';
import Login from "./Components/Login";
import Profile from "./Components/Profile";
import { LoginContext } from "./Contexts/LoginContext";

const App = () => {
    const [showProfile, setShowProfile] = useState(false);
    const [username, setUsername] = useState('');

    const context = {
        showProfile,
        setShowProfile,
        username,
        setUsername
    }

    return (
        <div className="App container-lg">
            <LoginContext.Provider value={context}>
                { showProfile ? <Profile/> : <Login/> }
            </LoginContext.Provider>
        </div>
    );
};

export default App;