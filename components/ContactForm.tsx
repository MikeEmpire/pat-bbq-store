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
      <form className="w-full max-w-lg p-8 rounded-lg shadow-lg">
        <div className="mb-6">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-white-700"
          >
            Your Name Here
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full border-b-2 border-gray-300 focus:border-indigo-500 focus:outline-none py-2 px-4"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-white-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full border-b-2 border-gray-300 focus:border-indigo-500 focus:outline-none py-2 px-4"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-white-700"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="w-full border-b-2 border-gray-300 focus:border-indigo-500 focus:outline-none py-2 px-4"
          ></textarea>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-indigo-500 text-white font-medium py-2 px-4 rounded hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
