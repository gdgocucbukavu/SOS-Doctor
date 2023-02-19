import Chatbot from "react-best-chatbot";
import { FaTimes } from "react-icons/fa";
import { AiOutlineSend } from "react-icons/ai";
import { BiRefresh } from "react-icons/bi";
import { BiMessageSquareDots } from "react-icons/bi";
import { steps } from "../config/botdata";
import l from "../assets/bot.png";
export default function ChatContainer() {
  const options = {
    header: "SOS DOCTOR",
    endContent: "Bye 👋",
    hidden: false,
    messageDelay: 500,
    open: false,
    botAvatarSrc: l,
    sendComponentFunction: (disabled) => (
      <AiOutlineSend style={{ color: disabled ? "#DDDDDD" : "" }} />
    ),
    refreshComponent: (
      <BiRefresh
        fontSize={20}
        style={{
          color: "#39c3f6",
        }}
      />
    ),
    closeComponent: (
      <FaTimes
        style={{
          color: "#33359",
        }}
      />
    ),

    chatButtonComponent: (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#39c3f6",
          color: "#FFFFFF",
          borderRadius: "50%",
          height: 55,
          width: 55,
          cursor: "pointer",
        }}
      >
        <BiMessageSquareDots
          style={{
            fontSize: 28,
          }}
        />
      </div>
    ),

    openingCallback: () => console.log("Opening..."),
    sendingMessageCallback: (answers, toggleOpen) =>
      console.log("Sending message..."),
    endingCallback: (answers, toggleOpen, refresh) =>
      console.log("Ending...", answers),
    closingCallback: () => console.log("Closing..."),
  };

  const theme = {
    primaryColor: "#FFFFFF",
    secondaryColor: "#DA344D",
    textPrimaryColor: "#333333",
    textSecondaryColor: "#FFFFFF",
  };
  return (
    <div>
      <Chatbot steps={steps} options={options} theme={theme} />
    </div>
  );
}
