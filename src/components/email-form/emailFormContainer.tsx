import React, {FC} from 'react';
import EmailForm, {MailFormData} from "./emailForm";
import {useDispatch, useSelector} from "react-redux";
import {actions, OperationStatus, sendMail} from "../../redux/app-reducer";
import {AppStateType} from "../../redux/store";
import EmailFormPopUp from "../pop-ups/emailFormPopUp";

const EmailFormContainer: FC = () => {
    const dispatch = useDispatch()
    const {requestStatus, popUpStatus} = useSelector((state: AppStateType) => state.app)

    const sendEmail = (formData: MailFormData) => {
        dispatch(sendMail(formData))
    }

    const closePopUp = () => {
        dispatch(actions.setPopUpStatus(OperationStatus.Closed))
    }

    return (
        <div className='email-form-wrapper'>
            <div className="container">
                <div className="email-form-in">
                    <div className="left">
                        <div className="top-block">
                            <span>Get in touch</span>
                            <span>Let us know <br/> how we can help</span>
                        </div>
                        <div className="form-block">
                            <EmailForm sendEmail={sendEmail} requestStatus={requestStatus}/>
                        </div>
                    </div>
                    <div className="right">
                        <div className="info-block">
                            <div className="title">What's next</div>
                            <div className="body">
                                <span>
                                    We’ll contact you within a few hours with our next steps. We normally schedule a call
                                    with our engineers to discuss your project in more detail. If you’d like to sign an
                                    NDA,
                                    please let us know. We’ll prepare it for you.
                                </span>
                                <span>
                                    Since we live on two different continents (Australia and Europe) we are available
                                    around
                                    the clock.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {
                popUpStatus === OperationStatus.InProgress &&
                <EmailFormPopUp closePopUp={closePopUp}/>
            }
        </div>
    )
};

export default EmailFormContainer;