import { useState } from "react";

import styles from "../styles/ContactForm.module.css";

const ContactForm: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleConfirm = () => {
    // Do something with the data (e.g., send it to an API)
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
  };

  return (
    <div>
      <form className={styles.form__container}>
        <section className={styles.form_info__container}>
          <section className={styles.form_info__subcontainer}>
            <article>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </article>
            <article>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </article>
          </section>
          <section className={styles.form_info__subcontainer}>
            <article>
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </article>
          </section>
        </section>
        <button
          className={styles.form_send__button}
          type="button"
          onClick={handleConfirm}
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
