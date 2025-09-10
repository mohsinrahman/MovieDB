import React from "react";
import SliderSendBtn from "./SliderSendBtn";

export default {
  title: "Atoms/SliderSendBtn",
  component: SliderSendBtn,
};

export const Default = () => {
  const mockSendMessage = (sender, name, text) => {
    alert(`Message sent!\nSender: ${sender}\nName: ${name}\nText: ${text}`);
  };

  const mockVal = "Hello, this is a test message!";

  return <SliderSendBtn sendMessage={mockSendMessage} val={mockVal} />;
};
