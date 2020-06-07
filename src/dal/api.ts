import {MailFormData} from "../components/email-form/email-form";
import {instance} from "../redux/constants";


export const emailAPI = {
    sendMail(dataForMail: MailFormData) {
        return instance.post('send', dataForMail)
            .then(res => res.data)
    }
}
