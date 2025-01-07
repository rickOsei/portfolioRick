/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useSelector } from "react-redux";
import { StateType } from "../pages/RootLayer";

const SendEmailComponent = () => {
  const {
    modeReducer: { currentMode },
  } = useSelector((state: StateType) => state);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      // Replace with your email API endpoint
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccessMessage("Your message has been sent!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error("Failed to send the message. Please try again later.");
      }
    } catch (error: any) {
      setErrorMessage(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="email-component w-full max-w-md mt-6">
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
          className={`bg-transparent px-4 py-2 border-[0.01px] ${
            currentMode === "light" ? "!border-[#eaeaea]" : "!border-[#14202b]"
          } rounded-md text-[#6C757D] font-normal placeholder:text-[#6C757D] ${
            currentMode === "light"
              ? " focus:bg-white focus:border-0px focus:border-transparent focus:outline-none"
              : "focus:bg-black focus:border-0 focus:border-transparent focus:outline-none"
          }`}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          className={`bg-transparent px-4 py-2 border-[0.01px] ${
            currentMode === "light" ? "!border-[#eaeaea]" : "!border-[#14202b]"
          } rounded-md text-[#6C757D] font-normal placeholder:text-[#6C757D]  ${
            currentMode === "light"
              ? " focus:bg-[#f6f6f6] focus:border-0px focus:border-transparent focus:outline-none"
              : "focus:bg-black focus:border-0 focus:border-transparent focus:outline-none"
          }`}
        />

        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          required
          className={`bg-transparent px-4 py-5 h-36 border-[0.01px] ${
            currentMode === "light" ? "!border-[#eaeaea]" : "!border-[#14202b]"
          } rounded-md text-[#6C757D] font-normal placeholder:text-[#6C757D] resize-none  ${
            currentMode === "light"
              ? " focus:bg-[#f6f6f6] focus:border-0px focus:border-transparent focus:outline-none"
              : "focus:bg-black focus:border-0 focus:border-transparent focus:outline-none"
          }`}
        ></textarea>

        {successMessage && (
          <p className="text-green-500 text-sm">{successMessage}</p>
        )}
        {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}

        <button
          type="submit"
          className=" p-4 w-full max-w-md bg-secondaryColor mt-7 text-white rounded-md md:max-w-[200px]"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
};

export default SendEmailComponent;
