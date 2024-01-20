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
    // ⚠️ wypadałoby zrobić jakąkolwiek walidacje tego, co wysyłamy.
    // niekoniecznie w tym pliku, ale w ogóle.
    // const validForm = validateForm(form);
    const response = await ContactFormService.sendForm(form);

    if (response.status !== 200) throw new Error("Error while sending form");
  } catch (e) {
    throw new Error(`Error while sending form ${e}`);
  }
};
