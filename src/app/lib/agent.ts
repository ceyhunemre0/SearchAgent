import { model } from "./model";
import { initializeAgentExecutorWithOptions } from "langchain/agents";
import { googleSearchTool } from "./tools/google";
import { initialize } from "next/dist/server/lib/render-server";

const tools = [googleSearchTool];

export const AgentExecutor = async () => {
    const executor = await initializeAgentExecutorWithOptions(
        tools,
        model,
        {
            verbose: true,
            agentType: "openai-functions"
        }
    );

    return executor;
};
