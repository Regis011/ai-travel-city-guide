const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_KEY,
});

const Openai = new OpenAIApi(configuration);
export default Openai;
