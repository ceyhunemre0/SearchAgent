import { AgentExecutor } from '@/app/lib/agent';

export async function POST(request: Request) {
    const body = await request.json();
    const { question } = body;
    if (!question) {
        return new Response(JSON.stringify({ error: 'Question is required' }), {
            status: 400,
            headers: { 'Content-Type': 'application/json' },
        });
    }
    try {
        const executor = await AgentExecutor();
        const response = await executor.invoke({ input: question });
        return new Response(JSON.stringify(response), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error('Error processing request:', error);
        return new Response(JSON.stringify({ error: 'Failed to process request' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}