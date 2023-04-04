import crypto from "crypto";

export const generateRoomCode = (length) => {
  let listOfCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let roomCode = "";

  for (let i = 0; i < length; i++) {
    roomCode = roomCode.concat(
      listOfCharacters.charAt(parseInt(listOfCharacters.length * Math.random()))
    );
  }

  return roomCode;
};