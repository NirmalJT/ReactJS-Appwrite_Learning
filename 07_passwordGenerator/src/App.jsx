import { useState, useCallback, useEffect, useRef } from "react";

import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const [copied, setCopied] = useState("Copy");
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) string += "1234567890";
    if (charAllowed) string += "!@#$%^&*(){}[]?";
    for (let i = 1; i <= length; i++) {
      let random = Math.floor(Math.random() * string.length);
      pass += string.charAt(random);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);
  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  const copyPassword = useCallback(() => {
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0,6)
    window.navigator.clipboard.writeText(password);
    setCopied("Copied");
    setTimeout(() => {
      setCopied("Copy");
    }, 1500);
  }, [password]);
  return (
    <>
      <div className=" bg-black h-screen w-full text-amber-800  flex">
        <div className="bg-gray-700 rounded-2xl w-1/2 m-auto h-50 p-4 ">
          <h1 className="text-center text-3xl font-bold">Password Generator</h1>
          <div className="password flex justify-center items-center mt-5">
            <input
              type="text"
              value={password}
              readOnly
              ref={passwordRef}
              className="bg-white outline-none rounded-bl-2xl rounded-tl-2xl text-2xl py-3 px-2 w-1/1"
            />
            <button
              onClick={copyPassword}
              className="bg-blue-600 text-white rounded-br-2xl rounded-tr-2xl px-3 py-3    cursor-pointer text-2xl"
            >
              {copied}
            </button>
          </div>
          <div className="container flex justify-center items-center gap-6 mt-3">
            <div className="input-lenght  flex justify-center items-center gap-3">
              <input
                type="range"
                min={1}
                max={50}
                onChange={(e) => {
                  setLength(Number(e.target.value));
                }}
              />
              <label>Lenght : {length}</label>
            </div>
            <div className="input-number  flex justify-center items-center gap-3">
              <input
                type="checkbox"
                onClick={() => {
                  setNumberAllowed((prev) => !prev);
                }}
              />
              <label>Numbers</label>
            </div>
            <div className="input-characters  flex justify-center items-center gap-3">
              <input
                type="checkbox"
                onClick={() => {
                  setCharAllowed((prev) => !prev);
                }}
              />
              <label>Characters</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
