import { create, Whatsapp } from "venom-bot";
import type { NextApiRequest, NextApiResponse } from "next";

const sessions: any[] = [];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { sessionName } = req.body; //TODO: Verificar si la sesion es nueva (no exist already)
    sessions.push(sessionName);
    console.log(`Nombre de la session del formulario: ${sessionName}`);
    //const venom = await create(sessionName);
    /*
  venom.onStreamChange((_, stream) => {
    // Send the stream to the client via WebSocket API
  });

  venom.onQR((qrCode) => {
    // Send the QR code to the client via WebSocket API
  });

  // Wait for the client to scan the QR code

  await venom.waitForLogin();
  */
    res
      .status(200)
      .json({ sessionName: `Session created successfully ${sessionName}` });
  } else if (req.method === "GET") {
    res.status(200).json({ msg: sessions });
  }
}
