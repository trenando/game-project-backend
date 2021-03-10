import { UserIdDecoder } from "./otherTypes/otherTypes";

export const userIdDecoder: UserIdDecoder = (token) => {
  if (!token) return "";
  let decodedId = "";
  if (token.split(" ").length === 1) {
    decodedId = Buffer.from(token.split(".")[1], "base64").toString("binary");
  } else {
    decodedId = Buffer.from(token.split(" ")[1].split(".")[1], "base64").toString("binary");
  }
  return JSON.parse(decodedId)._id;
};
