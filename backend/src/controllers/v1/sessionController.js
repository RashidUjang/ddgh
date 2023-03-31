import supabase from "../../configs/supabase.js";
import { generateSessionId } from "../../utils/utils.js";

export const createAndFetchSession = async (req, res) => {
  try {
    let session = req.session;
    let sessionId = generateSessionId()
    session.sessionid = sessionId
    console.log(`session in sessionController: ${session}`)

    let { data, error } = await supabase
      .from("sessions")
      .insert({ session_id: sessionId })
      .select()

    return res.send(data);
  } catch (e) {
    console.log(e);
  }
};