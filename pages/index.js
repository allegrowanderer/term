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
  const dummyRef = useRef(null);

  useEffect(() => {
    dummyRef.current?.scrollIntoView({ behavior: "smooth" });
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
    const commands = ["help", "telegram", "twitter", "virtuals", "clear", "about", "manifest", "dev"];
    const trimmedInput = input.trim();
    const newOutput = [...output];

    newOutput.push(`C:\\Users\\User> ${trimmedInput}`);

    if (commands.includes(trimmedInput)) {
      if (trimmedInput === "help") {
        newOutput.push("Available commands:");
        newOutput.push(" - help: Display this help text.");
        newOutput.push(" - about: Learn about the project.");
        newOutput.push(" - manifest: View the project's vision.");
        newOutput.push(" - telegram: View our Telegram channel.");
        newOutput.push(" - twitter: View our Twitter account.");
        newOutput.push(" - virtuals: Explore virtual features.");
        newOutput.push(" - dev: View the developer channel.");
        newOutput.push(" - clear: Clear the terminal.");
      } else if (trimmedInput === "about") {
        newOutput.push("Harness the power of artificial intelligence to analyze tokens on Base Chain.");
        newOutput.push("Our advanced AI models provide deep insights and predictive analytics to help you make smarter decisions.");
        newOutput.push("");
        newOutput.push("AI-Powered Analysis Features:");
        newOutput.push("");
        newOutput.push("*Quick Scan (1 credit)");
        newOutput.push("- AI-driven analysis of top 10 holders");
        newOutput.push("- Machine learning risk assessment");
        newOutput.push("- Neural network pattern detection");
        newOutput.push("- Predictive behavior analysis");
        newOutput.push("- Smart contract vulnerability scan");
        newOutput.push("- Developer credibility score");
        newOutput.push("");
        newOutput.push("*Deep Analysis (5 credits)");
        newOutput.push("- Advanced AI analysis of top 50 holders");
        newOutput.push("- Predictive analytics & trend forecasting");
        newOutput.push("- Cross-chain pattern recognition");
        newOutput.push("- ML-based holder clustering");
        newOutput.push("- Network effect modeling");
        newOutput.push("- Transaction pattern prediction");
        newOutput.push("- Temporal correlation analysis");
        newOutput.push("");
        newOutput.push("*AI Detection Systems:");
        newOutput.push("- Bot activity recognition");
        newOutput.push("- Suspicious pattern identification");
        newOutput.push("- Whale behavior analysis");
        newOutput.push("- Smart money tracking");
        newOutput.push("- Wash trading detection");
        newOutput.push("- Risk factor prediction");
        newOutput.push("");
        newOutput.push("*What Our AI Analyzes:");
        newOutput.push("- Historical holder behaviors");
        newOutput.push("- Token distribution patterns");
        newOutput.push("- Developer activity signatures");
        newOutput.push("- Cross-chain correlations");
        newOutput.push("- Network strength indicators");
        newOutput.push("- Predictive risk metrics");
        newOutput.push("- Market manipulation signals");
        newOutput.push("");
        newOutput.push("*AI Insights:");
        newOutput.push("- Real-time risk scoring");
        newOutput.push("- Holder sophistication metrics");
        newOutput.push("- Developer trust analysis");
        newOutput.push("- Network health assessment");
        newOutput.push("- Predictive trend analysis");
        newOutput.push("- Anomaly detection");
        newOutput.push("- Smart money movements");
        newOutput.push("");
        newOutput.push("*Credit System:");
        newOutput.push("- 1 free analysis credit on signup");
        newOutput.push("- Quick Scan: 1 credit");
        newOutput.push("- Deep Analysis: 5 credits");
        newOutput.push("- Purchase credits anytime");
      } else if (trimmedInput === "telegram") {
        newOutput.push(
          <a href="https://t.me/cabaltstrikeofficial" target="_blank" rel="noopener noreferrer">
            https://t.me/cabaltstrikeofficial
          </a>
        );
      } else if (trimmedInput === "twitter") {
        newOutput.push(
          <a href="https://x.com/cabaltstrike" target="_blank" rel="noopener noreferrer">
            https://x.com/cabaltstrike
          </a>
        );
      } else if (trimmedInput === "virtuals") {
        newOutput.push(
          <a href="https://fun.virtuals.io/" target="_blank" rel="noopener noreferrer">
            https://fun.virtuals.io/
          </a>
        );
      } else if (trimmedInput === "dev") {
        newOutput.push(
          <a href="https://t.me/cabaltstrikedev" target="_blank" rel="noopener noreferrer">
            https://t.me/cabaltstrikedev
          </a>
        );
      } else if (trimmedInput === "manifest") {
        newOutput.push("...In the ever-evolving landscape of digital assets, the cryptocurrency market has witnessed an unprecedented surge in sophisticated schemes and fraudulent activities.");
        newOutput.push("Traditional analytical methodologies have proven increasingly insufficient in confronting the complex challenges posed by modern cryptocurrency manipulation.");
        newOutput.push(
          "The emergence of cross-chain technologies, while revolutionary, has inadvertently provided malicious actors with intricate mechanisms to obscure their activities, necessitating a paradigm shift in how we approach token analysis and security."
        );
        newOutput.push("");
        newOutput.push("The Base Chain AI Analyzer emerges as a cutting-edge solution, leveraging artificial intelligence to decode the intricate patterns woven into blockchain transactions.");
        newOutput.push(
          "By processing vast quantities of on-chain data through advanced machine learning algorithms, our system identifies subtle correlations and behavioral patterns that often elude conventional analysis."
        );
        newOutput.push("This sophisticated approach to token analysis represents a fundamental advancement in risk mitigation and investment intelligence.");
        newOutput.push("");
        newOutput.push("The cryptocurrency ecosystem's vulnerability to sophisticated fraud mechanisms has reached critical levels, with billions in assets lost to carefully orchestrated deceptions.");
        newOutput.push(
          "These modern rug pulls exhibit increasingly complex characteristics, employing multi-chain strategies and automated systems to create an illusion of legitimate market activity."
        );
        newOutput.push(
          "Our AI-driven analysis platform addresses these challenges by implementing neural network architectures specifically designed to detect anomalous patterns across blockchain networks."
        );
        newOutput.push("");
        newOutput.push(
          "Through comprehensive analysis of wallet clustering, transaction velocity, and holder behavior patterns, the system constructs detailed risk profiles that extend beyond superficial metrics."
        );
        newOutput.push(
          "This deep learning approach enables the identification of suspicious activity patterns before they materialize into significant security threats."
        );
        newOutput.push(
          "By analyzing developer wallets' historical behaviors and cross-referencing them with known patterns of legitimate project development, our AI provides unprecedented insight into project credibility."
        );
        newOutput.push("");
        newOutput.push(
          "The system's predictive capabilities represent a quantum leap in proactive security measures."
        );
        newOutput.push(
          "By processing historical data of successful rug pulls and legitimate projects, our machine learning models have developed sophisticated pattern recognition capabilities that can identify potential threats in their nascent stages."
        );
        newOutput.push(
          "This predictive analysis provides investors with crucial time advantages in their decision-making processes."
        );
        newOutput.push("");
        newOutput.push(
          "For legitimate projects, our platform offers an opportunity to demonstrate transparency through quantifiable metrics and AI-verified analysis."
        );
        newOutput.push(
          "This data-driven approach to establishing credibility helps genuine developers distinguish themselves in an increasingly scrutinized market environment."
        );
        newOutput.push(
          "The system's ability to verify healthy token metrics and natural holder distributions provides invaluable validation for promising projects."
        );
        newOutput.push("");
        newOutput.push(
          "As the cryptocurrency landscape continues its rapid evolution, our AI system maintains its effectiveness through continuous learning and adaptation."
        );
        newOutput.push(
          "Each new analysis contributes to an expanding knowledge base, enabling the system to identify emerging fraud mechanisms and adapt to novel deception strategies."
        );
        newOutput.push(
          "This dynamic learning capability ensures that our analysis remains relevant and effective against evolving threats."
        );
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
    <div className="h-screen w-screen bg-black text-white font-mono p-4 overflow-y-auto">
      <div className="border-t-2 border-x-2 border-gray-600 p-4 rounded-t-md h-full overflow-y-auto">
        {output.map((line, index) => (
          <div key={index} className="whitespace-pre-wrap">
            {line}
          </div>
        ))}
        <div ref={dummyRef} />
        <form onSubmit={handleCommand} className="flex items-center mt-2">
          <span className="mr-2">C:\Users\User&gt;</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="bg-black text-white outline-none flex-1"
            autoFocus
          />
        </form>
      </div>
    </div>
  );
}
