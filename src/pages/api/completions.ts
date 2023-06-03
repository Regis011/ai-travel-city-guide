// https://nextjs.org/docs/pages/building-your-application/routing/api-routes
import openai from "@/utils/openai";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  response: Object;
  error: boolean;
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  //const { name, message } = req.body;

  const params = {
    prompt: "What is 2 + 3",
    model: "text-davinci-003",
  };

  try {
    const completion = await openai.createCompletion(params);

    const response = completion.data.choices[0].text;
    res.status(200).json({ response, error: false });
  } catch (err) {
    res
      .status(500)
      .send({ response: `failed to fetch data -> ${err}`, error: true });
  }
};

export default handler;
