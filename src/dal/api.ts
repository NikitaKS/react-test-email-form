import {MailFormData} from "../components/email-form/emailForm";
import {instance} from "../redux/constants";


export const emailAPI = {
    sendMail(dataForMail: MailFormData) {
        return instance.post('send', dataForMail)
            .then(res => res.data)
    }
}
