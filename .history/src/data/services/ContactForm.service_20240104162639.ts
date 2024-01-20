import httpClient from "../httpClient";
import { ContactForm } from "./../model/form.model";

const RESOURCE = "/contact-form";

export const ContactFormService = {
  sendForm(form: ContactForm) {
    return httpClient.post(`${RESOURCE}`, form);
  },
};
