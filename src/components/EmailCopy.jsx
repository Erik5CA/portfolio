import { useRef, useState } from "react";
import { CopyCheckIcon, CopyIcon } from "./Icons";

export function EmailCopy() {
  const [fill, setFill] = useState(false);
  const email = useRef();
  const handleCopy = () => {
    navigator.clipboard.writeText(email.current.value);
    setFill(true);
    setTimeout(() => setFill(false), 1500);
  };
  return (
    <div className="container-contact-copy">
      <input
        type="text"
        ref={email}
        value={"erik.castillo.anzures@gmail.com"}
        readOnly
      />
      <div onClick={handleCopy} className="icon">
        {!fill ? <CopyIcon /> : <CopyCheckIcon />}
      </div>
    </div>
  );
}
