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

const ContactSection = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  const handleSubmit = () => {
    console.log(
      nameRef.current.value,
      emailRef.current.value,
      messageRef.current.value
    );
  };

  return (
    <>
      <ContactContainer id="contact">
        <SectionHeader>
          <SectionHeaderText>Contact</SectionHeaderText>
        </SectionHeader>

        <FormContainer>
          <FormLabel htmlFor="name">Name</FormLabel>
          <FormInput id="name" type="text" ref={nameRef}></FormInput>
          <FormLabel htmlFor="email">Email</FormLabel>
          <FormInput id="email" type="email" ref={emailRef}></FormInput>
          <FormLabel htmlFor="message">Message</FormLabel>
          <FormTextArea
            id="message"
            type="textarea"
            ref={messageRef}
          ></FormTextArea>
          <FormButton id="submit" type="submit" onClick={handleSubmit}>
            Send Message
          </FormButton>
        </FormContainer>
      </ContactContainer>
    </>
  );
};

export default ContactSection;
