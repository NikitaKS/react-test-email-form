import React, {FC} from 'react';

const EmailFormContainer: FC = () => {
    return (
        <div className='email-form-wrapper'>
            <div className="container">
                <div className="email-form-in">
                    <div className="left">

                    </div>
                    <div className="right">
                        <div className="info-block">
                            <div className="title">What's next</div>
                            <div className="body">
                                We’ll contact you within a few hours with our next steps. We normally schedule a call
                                with our engineers to discuss your project in more detail. If you’d like to sign an NDA,
                                please let us know. We’ll prepare it for you.

                                Since we live on two different continents (Australia and Europe) we are available around
                                the clock.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default EmailFormContainer;