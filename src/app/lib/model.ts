import { ChatOpenAI } from "@langchain/openai";

const model = new ChatOpenAI({
    modelName: "gpt-4o-mini",
    temperature: 0.2
})

export { model };