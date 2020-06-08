import React, {FC} from 'react';
import EmailForm, {MailFormData} from "./email-form";
import {useDispatch, useSelector} from "react-redux";
import {sendMail} from "../../redux/app-reducer";
import {AppStateType} from "../../redux/store";

const EmailFormContainer: FC = () => {
    const dispatch = useDispatch()
    const {requestStatus} = useSelector((state: AppStateType) => state.app)

    const sendEmail = (formData: MailFormData) => {
        dispatch(sendMail(formData))
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
        </div>
    )
};

export default EmailFormContainer;