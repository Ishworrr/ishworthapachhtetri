const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey:
"YOUR_API_KEY",
});
const openai = new OpenAIApi(configuration);

export async function sendMsgOpenAI(message) {
  const res = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: message,
    temperature: 0.7,
    max_tokens: 256,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  }
  // ,{
  //   headers: {
  //     Authorization: `Bearer `,
  // }
);
  return res.data.choices[0].text;
}