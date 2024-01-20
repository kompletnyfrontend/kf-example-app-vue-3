import httpClient from "../httpClient";
import { ContactForm } from "./../model/form.model";

const RESOURCE = "/contact-form";

export const ContactFormService = {
  sendForm(form: ContactForm) {
    return httpClient.post(`${RESOURCE}`, form);
  },
};

export const sendForm = async (form: ContactForm): Promise<void> => {
  try {
    const response = await ContactFormService.sendForm(form);

    if (response.status !== 200) throw new Error("Error while sending form");
  } catch (e) {
    throw new Error(`Error while sending form ${e}`);
  }
};

// ⚠️ tutaj nie ma potrzeby sprawdzania zwrotki, bo polegamy tylko na statusie odpowiedzi
// O ile serwer nie zwróci 200 z błedem 🙃
