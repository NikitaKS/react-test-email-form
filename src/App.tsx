import React from 'react';
import './App.css'
import s from './less/components/blocks/app.module.less'
import EmailFormContainer from "./components/email-form/emailFormContainer";


const App = () => {
    return (
        <div className="App">
            <EmailFormContainer/>
        </div>
    )
};

export default App;
