import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import { useContext, useRef, useState } from "react";
import emailjs from "emailjs-com";
import { ThemeContext } from "../../context";

import { useForm, set } from "react-cool-form";
import Joi from "joi";

const JoiSchema = Joi.object({
  user_name: Joi.string().required(),
  user_email: Joi.string().email({ tlds: false }).required(),
  user_subject: Joi.string().required().min(6),
  user_message: Joi.string().required().min(10),
});

let errors = {};
// Reusable validation function for Joi
const validateWithJoi = (schema) => (values) => {
 

  const { error: joiError } = schema.validate(values, { abortEarly: false });

  if (joiError)
    joiError.details.forEach(({ path, message }) =>
      set(errors, path[0], message)
    );

return errors;
};

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false)
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const { form, use } = useForm({
    defaultValues: { user_name: "", user_email: "", user_subject: "",user_message:"" },
    
    validate: validateWithJoi(JoiSchema),
    onSubmit: (values) => console.log("onSubmit: ", values),
    onError: (errors) => console.log("onError: ", errors),
  });
  const errors = use("errors", { errorWithTouched: true });

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_okw1gzy",
        "template_s096dhy",
        form.current,
        "DmjAsI0kX04gncf5U"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true)
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss your project</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +216 52 2626 41
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Email} alt="" />
              yassine.trabelsi1@esprit.tn
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Address} alt="" />
              Tunisia,Tunis
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What’s your story?</b> Get in touch. Always available for
            freelancing if the right project comes along with me.
           
            <hr className="style11"/>
            <br></br>
            Want a fitness plan customized for your personal goals and lifestyle ? 
            You are in the right place!
          </p>
          <form ref={form} onSubmit={handleSubmit} noValidate>
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Name" name="user_name" required />
            {errors && <p>{errors.user_email}</p>}
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Subject" name="user_subject" required/>
   
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Email" name="user_email" required />
         
            <textarea style={{backgroundColor: darkMode && "#333"}} rows="5" placeholder="Message" name="message" required />
            <button>Send an email</button>
            {done && "Thank you..."}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
