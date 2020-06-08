import React, {FC, useEffect} from 'react';
import {useForm} from "react-hook-form";
import {RequestStatus} from "../../redux/app-reducer";

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
    const {register, handleSubmit, reset} = useForm<MailFormData>();
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
                    <input placeholder='Name' autoComplete={'off'} type={'text'} name="name" required={true}
                           ref={register({required: true})}/>
                </div>
                <div className='form-item'>
                    <input placeholder='E-mail' autoComplete={'off'} type={'email'} name="email" required={true}
                           ref={register({required: true})}/>
                </div>
                <div className='form-item'>
                    <textarea placeholder='Message' autoComplete={'off'} name="message" required={true}
                              ref={register({required: true})}/>
                </div>
                <div className='button-block'>
                    <button className='btn' type="submit" disabled={requestStatus === RequestStatus.Loading}>
                        {
                            requestStatus === RequestStatus.Loading
                                ?
                                'SENDING...'
                                :
                                'SEND'
                        }
                    </button>
                </div>
            </form>
        </div>
    );
}

export default EmailForm;