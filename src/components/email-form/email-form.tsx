import React, {FC, useEffect} from 'react';
import {useForm} from "react-hook-form";
import {RequestStatus} from "../../redux/app-reducer";
import Preloader from '../../assets/Preloader.svg';

type PropsType = {
    sendEmail: (formData: MailFormData) => void
    requestStatus: RequestStatus
}

export type MailFormData = {
    name: string;
    email: string;
    message: string;
};

const EmailForm: FC<PropsType> = ({requestStatus, sendEmail}) => {
    const {register, handleSubmit, errors, reset} = useForm<MailFormData>();
    const onSubmit = handleSubmit((data) => {
        sendEmail(data)
    });
    useEffect(() => {
        if (requestStatus === RequestStatus.Success) {
            reset()
        }
    }, [requestStatus])
    return (
        <div className='email-form'>
            <form onSubmit={onSubmit} className='form'>
                <div className='form-item'>
                    <input placeholder='Name' type={'text'} name="name" required={!!errors.name}
                           ref={register({required: true})}/>
                </div>
                <div className='form-item'>
                    <input placeholder='Email' type={'email'} name="email" required={!!errors.email}
                           ref={register({required: true})}/>
                </div>
                <div className='form-item'>
                    <textarea placeholder='Message' name="message" required={!!errors.message}
                              ref={register({required: true})}/>
                </div>
                <div className='button-block'>
                    <button type="submit" disabled={requestStatus === RequestStatus.Loading}>
                        SEND
                    </button>
                    {
                        requestStatus === RequestStatus.Loading &&
                        <img src={Preloader} alt="Loading..."/>
                    }
                </div>
            </form>
        </div>
    );
}

export default EmailForm;