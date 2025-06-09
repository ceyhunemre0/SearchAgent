'use client'
import React, { useState, useRef, useEffect } from "react";

interface Message {
    id: number;
    sender: "user" | "bot";
    text: string;
}

const Chat: React.FC = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);
    const [dotCount, setDotCount] = useState(0); // "Yazıyor..." için nokta sayısı animasyonu
    const messagesEndRef = useRef<HTMLDivElement | null>(null);

    // Loading sırasında "Yazıyor..." animasyonu için interval
    useEffect(() => {
        if (!loading) {
            setDotCount(0);
            return;
        }

        const interval = setInterval(() => {
            setDotCount((prev) => (prev + 1) % 4); // 0,1,2,3 nokta sayısı döner
        }, 500);

        return () => clearInterval(interval);
    }, [loading]);

    const sendMessage = async () => {
        if (!input.trim()) return;

        const userMessage: Message = {
            id: Date.now(),
            sender: "user",
            text: input,
        };

        setMessages((prev) => [...prev, userMessage]);
        setInput("");
        setLoading(true);

        try {
            const res = await fetch("/api/agent", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ question: userMessage.text }),
            });

            const data = await res.json();

            const botMessage: Message = {
                id: Date.now() + 1,
                sender: "bot",
                text: data?.output || "Bir hata oluştu.",
            };

            setMessages((prev) => [...prev, botMessage]);
        } catch (e) {
            setMessages((prev) => [
                ...prev,
                {
                    id: Date.now() + 2,
                    sender: "bot",
                    text: "Bir hata oluştu.",
                },
            ]);
        } finally {
            setLoading(false);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter" && !loading) {
            sendMessage();
        }
    };

    return (
        <div className="w-full h-screen border border-gray-200 flex flex-col bg-gray-50 shadow-md relative text-gray-900">
            <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-3">
                {messages.map((msg) => (
                    <div
                        key={msg.id}
                        className={`
                            max-w-[75%] px-4 py-2 rounded-2xl text-base break-words mb-1
                            ${msg.sender === "user"
                                ? "self-end bg-blue-600 text-white"
                                : "self-start bg-gray-200 text-gray-900"}
                        `}
                    >
                        {msg.text}
                    </div>
                ))}

                {/* Bot yazıyor animasyonu */}
                {loading && (
                    <div className="max-w-[75%] px-4 py-2 rounded-2xl text-base break-words mb-1 self-start bg-gray-200 text-gray-900">
                        Thinking{'.'.repeat(dotCount)}
                    </div>
                )}

                <div ref={messagesEndRef} />
            </div>

            <div className="flex border-t border-gray-100 p-3 bg-white items-center sticky bottom-0">
                <input
                    className="flex-1 text-base px-3 py-2 rounded-full border border-gray-300 outline-none mr-2"
                    type="text"
                    placeholder="Bir soru yazın..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    disabled={loading}
                />

                <button
                    className="px-5 py-2 rounded-full border-none bg-blue-600 text-white font-semibold cursor-pointer text-base disabled:opacity-50"
                    onClick={sendMessage}
                    disabled={loading || !input.trim()}
                >
                    Gönder
                </button>
            </div>
        </div>
    );
};

export default Chat;
