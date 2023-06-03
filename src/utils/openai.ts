const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  organization: "org-KYrUJZQVviNd5xFF1iJBajqZ",
  apiKey: process.env.OPENAI_KEY,
});

const Openai = new OpenAIApi(configuration);
export default Openai;
