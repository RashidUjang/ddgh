import { Inter } from "@next/font/google";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();
  const [playerName, setPlayerName] = useState("");

  const url = "http://localhost:4000/api/v1/room";
  const url2 = "http://localhost:4000/api/v1/session";

  const handleTextChange = (e: any) => {
    setPlayerName(e.target.value);
  };

  useEffect(() => {
    const fetchPlayerName = async () => {
      const response = await fetch(url2, {
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

  const handleClick = async () => {
    await fetch(url2, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ playerName }),
      credentials: "include",
    });

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    const body = await response.json();

    router.push(`/room/${body.room_code}`);
  };

  return (
    <>
      <label htmlFor="player-id">Player Name</label>
      <input
        type="text"
        name="player-name"
        id="player-id"
        value={playerName}
        onChange={handleTextChange}
      ></input>
      <div>
        <button type="button" onClick={handleClick}>
          Create Room
        </button>
      </div>
    </>
  );
}
