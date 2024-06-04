import React, { useState } from "react";

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

  const isReady = name.length > 3 && email.length > 3 && message.length > 5;

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form className="w-full max-w-lg p-8 rounded-lg shadow-lg">
        <div className="mb-6">
          <input
            placeholder="Your Name Goes Here"
            onChange={(e) => {
              setName(e.target.value);
            }}
            type="text"
            id="name"
            name="name"
            className="w-full border-b-2 border-white-300 focus:border-indigo-500 focus:outline-none py-2 px-4"
          />
        </div>

        <div className="mb-6">
          <input
            placeholder="Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            id="email"
            name="email"
            className="w-full border-b-2 border-white-300 focus:border-indigo-500 focus:outline-none py-2 px-4"
          />
        </div>

        <div className="mb-6">
          <textarea
            placeholder="Enter a message"
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            id="message"
            name="message"
            rows={4}
            className="w-full border-b-2 border-white-300 focus:border-indigo-500 focus:outline-none py-2 px-4"
          />
        </div>

        <div className="flex justify-end">
          <button
            disabled={!isReady}
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
