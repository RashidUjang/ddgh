import supabase from "../../configs/supabase.js";

export const createAndFetchSession = async (req, res) => {
  try {
    let session = req.session;
    
    let { data, error } = await supabase
      .from("players")
      .select()
      .eq("session_id", session.id);

    if (Array.isArray(data) && data.length === 0) {
      await supabase.from("players").insert({ session_id: session.id })
    }

    if (req.session.playerName !== req.body.playerName) {
      session.playerName = req.body.playerName;
    }

    return res.send({});
  } catch (e) {
    console.log(e);
  }
};

export const getSession = async (req, res) => {
  return res.send({ playerName: req.session.playerName });
};
