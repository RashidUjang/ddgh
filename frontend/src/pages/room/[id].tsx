import { useEffect, useState } from "react";
import Card from "@/components/Card";

export default function Room() {
  const [playerName, setPlayerName] = useState("");
  const tempDeck = [
    "oiqwdiqwjdwqwd",
    "9iqwjdiowqdjiowq",
    "foiwefjew",
    "owiefjewoifj",
    "fjwofie",
  ];

  const url = "http://localhost:4000/api/v1/session";

  useEffect(() => {
    const fetchPlayerName = async () => {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const body = await response.json();

      if (document.cookie) {
        setPlayerName(body.playerName || "");
      }
    };

    fetchPlayerName();
  }, []);

  return (
    <>
      <div>Welcome {playerName} Room code</div>
      {tempDeck.map((card, index) => {
        return <Card 
            text={card} key={index}
        />;
      })}
    </>
  );
}
