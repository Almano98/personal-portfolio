import React, { useRef } from "react";
import { SectionHeader, SectionHeaderText } from "../common/SectionElements";
import {
  ContactContainer,
  FormButton,
  FormContainer,
  FormInput,
  FormLabel,
  FormTextArea,
} from "./ContactElements";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactSection = () => {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        formRef.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          toast.success("Submitted succesfully!", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          e.target.reset();
        },
        (error) => {
          toast.error("Something went wrong! Please try again", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      );
  };

  return (
    <>
      <ToastContainer />
      <ContactContainer id="contact">
        <SectionHeader>
          <SectionHeaderText>Contact</SectionHeaderText>
        </SectionHeader>
        <FormContainer ref={formRef} onSubmit={handleSubmit}>
          <FormLabel htmlFor="name">Name</FormLabel>
          <FormInput id="name" type="text" name="full_name"></FormInput>
          <FormLabel htmlFor="email">Email</FormLabel>
          <FormInput id="email" type="email" name="email"></FormInput>
          <FormLabel htmlFor="message">Message</FormLabel>
          <FormTextArea
            id="message"
            type="textarea"
            name="message"
          ></FormTextArea>
          <FormButton id="submit" type="submit">
            Send Message
          </FormButton>
        </FormContainer>
      </ContactContainer>
    </>
  );
};

export default ContactSection;
