import React, { useState } from "react";

import { ContactFormData } from "../@types";
import { contactFormURL } from "../constants";

const ContactForm: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [responseError, setResponseError] = useState<boolean>(false);
  const [responseMessage, setResponseMessage] = useState<string>("");

  const isReady = name.length > 3 && email.length > 3 && message.length > 5;
  const responseTextClass: string = responseError
    ? "text-red-500"
    : "text-green-500";

  const handleConfirm = async (): Promise<void> => {
    // Check if the form data is ready
    if (isReady) {
      // Prepare the contact form data
      const contactFormData: ContactFormData = {
        name: name,
        email: email,
        message: message,
      };

      try {
        // Send a POST request to the API
        const response = await fetch(contactFormURL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(contactFormData),
        });

        // Check the status code of the response
        if (response.ok) {
          // If the request was successful (status code 200), display a success message
          setResponseError(false);
          setResponseMessage("Message sent successfully!");
          setName("");
          setEmail("");
          setMessage("");
        } else {
          setResponseError(true);
          // If there was an error, display an error message
          setResponseMessage("Failed to send message. Please try again later.");
        }
      } catch (error) {
        // If there was a network error, display an error message
        setResponseError(true);
        setResponseMessage(
          "An error occurred while sending the message. Please try again later."
        );
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-min">
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
            value={name}
            className="w-full border-b-2 border-white-300 focus:border-indigo-500 focus:outline-none py-2 px-4"
          />
        </div>

        <div className="mb-6">
          <input
            placeholder="Email"
            value={email}
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
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            id="message"
            name="message"
            rows={4}
            className="w-full border-b-2 border-white-300 focus:border-indigo-500 focus:outline-none py-2 px-4"
          />
        </div>
        {responseMessage && (
          <div className={`mb-6 text-center ${responseTextClass}`}>
            {responseMessage}
          </div>
        )}

        <div className="flex justify-end">
          <button
            disabled={!isReady}
            onClick={handleConfirm}
            type="button"
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
