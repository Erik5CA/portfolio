import { useRef, useState } from "react";
import clipboard from "../assets/clipboard.svg";
import cCheck from "../assets/clipboard-check.svg";

export function EmailCopy() {
    const [fill, setFill] = useState(false)
    const email = useRef();
    const handleCopy = () => {
      navigator.clipboard.writeText(email.current.value);
      setFill(true);
    };
  return (
    <div className="container-contact-copy" onClick={handleCopy}>
      <input
        type="text"
        ref={email}
        value={"erik.castillo.anzures@gmail.com"}
        readOnly
      />
      <img src={ !fill ?  clipboard : cCheck} alt="" />
    </div>
  );
}
