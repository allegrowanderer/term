import { useState, useEffect, useRef } from "react";

export default function Home() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState([
    `░█████╗░░█████╗░██████╗░░█████╗░██╗░░░░░████████╗  ░██████╗████████╗██████╗░██╗██╗░░██╗███████╗`,
    `██╔══██╗██╔══██╗██╔══██╗██╔══██╗██║░░░░░╚══██╔══╝  ██╔════╝╚══██╔══╝██╔══██╗██║██║░██╔╝██╔════╝`,
    `██║░░╚═╝███████║██████╦╝███████║██║░░░░░░░░██║░░░  ╚█████╗░░░░██║░░░██████╔╝██║█████═╝░█████╗░░`,
    `██║░░██╗██╔══██║██╔══██╗██╔══██║██║░░░░░░░░██║░░░  ░╚═══██╗░░░██║░░░██╔══██╗██║██╔═██╗░██╔══╝░░`,
    `╚█████╔╝██║░░██║██████╦╝██║░░██║███████╗░░░██║░░░  ██████╔╝░░░██║░░░██║░░██║██║██║░╚██╗███████╗`,
    `░╚════╝░╚═╝░░╚═╝╚═════╝░╚═╝░░╚═╝╚══════╝░░░╚═╝░░░  ╚═════╝░░░░╚═╝░░░╚═╝░░╚═╝╚═╝╚═╝░░╚═╝╚══════╝`,
    "",
    `██╗░░░██╗░░░░█████╗░░░░░█████╗░░░░░░███╗░░`,
    `██║░░░██║░░░██╔══██╗░░░██╔══██╗░░░░████║░░`,
    `╚██╗░██╔╝░░░██║░░██║░░░██║░░██║░░░██╔██║░░`,
    `░╚████╔╝░░░░██║░░██║░░░██║░░██║░░░╚═╝██║░░`,
    `░░╚██╔╝░░██╗╚█████╔╝██╗╚█████╔╝██╗███████╗`,
    `░░░╚═╝░░░╚═╝░╚════╝░╚═╝░╚════╝░╚═╝╚══════╝`,
    "",
    "Type 'help' to see list of available commands.",
  ]);

  const inputRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    containerRef.current.scrollTop = containerRef.current.scrollHeight;
  }, [output]);

  useEffect(() => {
    const handleClick = () => {
      inputRef.current?.focus();
    };

    window.addEventListener("click", handleClick);
    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, []);

  const handleCommand = (event) => {
    event.preventDefault();
    const commands = ["help", "telegram", "twitter", "virtuals", "clear"];
    const trimmedInput = input.trim();
    const newOutput = [...output];

    newOutput.push(`C:\\Users\\User> ${trimmedInput}`);

    if (commands.includes(trimmedInput)) {
      if (trimmedInput === "help") {
        newOutput.push("Available commands:");
        newOutput.push(" - telegram: View our Telegram channel.");
        newOutput.push(" - twitter: View our Twitter account.");
        newOutput.push(" - virtuals: Explore virtual features.");
      } else if (trimmedInput === "telegram") {
        newOutput.push("Telegram: https://t.me/CabaltStrike");
      } else if (trimmedInput === "twitter") {
        newOutput.push("Twitter: https://x.com/CabaltStrike");
      } else if (trimmedInput === "virtuals") {
        newOutput.push("Virtuals: Discover our virtual features!");
      } else if (trimmedInput === "clear") {
        setOutput([
          `░█████╗░░█████╗░██████╗░░█████╗░██╗░░░░░████████╗  ░██████╗████████╗██████╗░██╗██╗░░██╗███████╗`,
          `██╔══██╗██╔══██╗██╔══██╗██╔══██╗██║░░░░░╚══██╔══╝  ██╔════╝╚══██╔══╝██╔══██╗██║██║░██╔╝██╔════╝`,
          `██║░░╚═╝███████║██████╦╝███████║██║░░░░░░░░██║░░░  ╚█████╗░░░░██║░░░██████╔╝██║█████═╝░█████╗░░`,
          `██║░░██╗██╔══██║██╔══██╗██╔══██║██║░░░░░░░░██║░░░  ░╚═══██╗░░░██║░░░██╔══██╗██║██╔═██╗░██╔══╝░░`,
          `╚█████╔╝██║░░██║██████╦╝██║░░██║███████╗░░░██║░░░  ██████╔╝░░░██║░░░██║░░██║██║██║░╚██╗███████╗`,
          `░╚════╝░╚═╝░░╚═╝╚═════╝░╚═╝░░╚═╝╚══════╝░░░╚═╝░░░  ╚═════╝░░░░╚═╝░░░╚═╝░░╚═╝╚═╝╚═╝░░╚═╝╚══════╝`,
          "",
          `██╗░░░██╗░░░░█████╗░░░░░█████╗░░░░░░███╗░░`,
          `██║░░░██║░░░██╔══██╗░░░██╔══██╗░░░░████║░░`,
          `╚██╗░██╔╝░░░██║░░██║░░░██║░░██║░░░██╔██║░░`,
          `░╚████╔╝░░░░██║░░██║░░░██║░░██║░░░╚═╝██║░░`,
          `░░╚██╔╝░░██╗╚█████╔╝██╗╚█████╔╝██╗███████╗`,
          `░░░╚═╝░░░╚═╝░╚════╝░╚═╝░╚════╝░╚═╝╚══════╝`,
          "",
          "Type 'help' to see list of available commands.",
        ]);
        setInput("");
        return;
      }
    } else if (trimmedInput) {
      newOutput.push(`'${trimmedInput}' is not recognized as an internal or external command,`);
      newOutput.push("operable program, or batch file.");
    }

    setOutput(newOutput);
    setInput("");
  };

  return (
    <div
      ref={containerRef}
      className="h-screen w-screen bg-black text-white font-mono p-4 overflow-y-auto"
    >
      <div className="border-2 border-gray-600 p-4 rounded-md h-full">
        {output.map((line, index) => (
          <pre key={index} className="whitespace-pre-wrap">{line}</pre>
        ))}
        <form onSubmit={handleCommand} className="flex items-center mt-2 relative">
          <span className="mr-2">C:\Users\User&gt;</span>
          <div className="flex-1 relative">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="bg-black text-white outline-none w-full pr-2"
              style={{ caretColor: "transparent" }}
              autoFocus
            />
            <span
              className="absolute top-0 left-0 h-full animate-blink"
              style={{
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                fontSize: "1em",
                color: "white",
                left: `${input.length * 0.6}em`,
              }}
            >
              |
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}
