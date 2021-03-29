import { NextApiRequest, NextApiResponse } from "next";

export default (request: NextApiRequest, response: NextApiResponse) => {
  console.log('Event received');

  return response.status(200).json({ ok: true });
}