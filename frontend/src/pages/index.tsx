import { Inter } from "@next/font/google";
import { useRouter } from "next/router"
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();
  const url = "http://localhost:4000/api/v1/room";

  const handleClick = async () => {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const body = await response.json()

    console.log(body)

    router.push(`/room/${body.room_code}`)
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
