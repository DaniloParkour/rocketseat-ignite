import { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
  console.log('evento recebido')

  //O stripe envia os eventos ao endpoint em fomra de streamming

  res.status(200).json({ ok: true })
}
