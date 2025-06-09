import { SerpAPI } from "@langchain/community/tools/serpapi";

const tool = new SerpAPI(process.env.SERPAPI_API_KEY || "", {
    location:"Turkey",
    hl: "tr",
    }
);

export const googleSearchTool = tool;