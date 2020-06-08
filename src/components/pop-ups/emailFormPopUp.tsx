import React, {FC} from 'react';
import {OperationStatus} from "../../redux/app-reducer";


type PropsType = {
    closePopUp: () => void
}
const EmailFormPopUp: FC<PropsType> = ({closePopUp}) => {
    return (
        <>
            <div className="pop-up">
                <div className="title">Thanks for filling out our form!</div>
                <div className="body">
                    <span>
                        We will look over your message and Tatiana will get back to you in 24 hours.
                        In the meantime, you can check the <a href='#'>Foundation</a> section, 
                        look over our <a href='#'>projects collection</a> or browse through
                        our latest <a href='#'>blog posts</a>.
                    </span>
                    <span>
                        Your mate at MadAppGang, Jack Rudenko.
                    </span>
                </div>
                <button className='btn' onClick={closePopUp}>OK</button>
            </div>
            <div className="overlay"/>
        </>
    );
}

export default EmailFormPopUp;