import supabase from "../../configs/supabase.js";
import { generateRoomCode } from "../../utils/utils.js";

export const createAndJoinRoom = async (req, res) => {
  try {
    let { data: room, error: roomError } = await supabase
      .from("rooms")
      .insert({ room_code: generateRoomCode(5) })
      .select();

      let { data: player, error: playerError } = await supabase
      .from("players")
      .select()
      .eq("session_id", req.session.id);

    let { error: playersRoomsError } = await supabase.from("players_rooms").insert({room_id: room[0].id, player_id: player[0].id})

    return res.send({room_code: room[0].room_code});
  } catch (e) {
    console.log(e);
  }
};

export const getRoom = async (req, res) => {
  try {
    let { data } = await supabase.from("rooms").select();

    return res.send(data);
  } catch (e) {
    console.log(e);
  }
};
