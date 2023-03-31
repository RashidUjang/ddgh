import { Inter } from "@next/font/google";
import { useRouter } from "next/router";
import { useEffect } from "react";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();
  const url = "http://localhost:4000/api/v1/room";
  const url2 = "http://localhost:4000/api/v1/session";

  const handleClick = async () => {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include"
    });

    const body = await response.json();

    console.log(document.cookie);

    router.push(`/room/${body.room_code}`);
  };

  useEffect(() => {
    const fetchData = async () => {
      await fetch(url2, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include"
      });
    };

    fetchData();
  }, []);

  return (
    <>
      <label htmlFor="player-id">Player Name</label>
      <input type="text" name="player-name" id="player-id"></input>
      <div>
        <button type="button" onClick={handleClick}>
          Create Room
        </button>
      </div>
    </>
  );
}
