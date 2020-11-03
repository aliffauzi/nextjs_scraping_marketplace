import { NextApiRequest, NextApiResponse } from "next";
import { getProfile } from "../../services/api";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  res.json(await getProfile());
};
