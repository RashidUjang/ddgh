import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const url = "http://localhost:4000/api/v1/room/123";
  const handleClick = async () => {
    const response = await fetch(url);
    console.log(await response.json());
  };

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
