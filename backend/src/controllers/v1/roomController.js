import supabase from "../../configs/supabase.js";
import { generateRoomCode } from "../../utils/utils.js";

export const createAndFetchRoom = async (req, res) => {
  try {
    let { data, error } = await supabase
      .from("rooms")
      .insert({ room_code: generateRoomCode(5) })
      .select("room_code");

      console.log(`req.session in roomController: ${req.session}`)
    return res.send(data[0]);
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
