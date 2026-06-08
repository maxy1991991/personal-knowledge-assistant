import { useState } from "react" 
import { GoogleGenAI } from '@google/genai';
import resume from './knowledge/resume.md?raw'
import interests from './knowledge/interests.md?raw'

const ai = new GoogleGenAI({apiKey: import.meta.env.VITE_GEMINI_API_KEY});

const SYSTEM_PROMPT = `You are a friendly assistant that answers questions about Max.

Here is everything you know about Max:

${resume}

${interests}

Only answer based on this information. If you don't know something, say "I don't have that information. You can ask me about Max's education, projects, skills, or personal interests!"`


async function askWidgetQuestion(userQuestion: string) {
    try {
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: userQuestion, 
            config: {
                systemInstruction: SYSTEM_PROMPT, 
            }
        });

        console.log("AI Response:", response.text);
        return response.text || "No response received";  // ← Add default
    } catch (error) {
        console.error("SDK Query Failed:", error);
        return "Sorry, I encountered an error. Please try again.";
    }
}


export function Chatwidget() {
    type Message = {
        text: string
        sender: string
        timestamp: number
    }

    const [messages, setMessages] = useState<Message[]>([])
    const [input, setInput] = useState("")

    async function handleSend(e: React.FormEvent) {
        e.preventDefault();
        const newUserMessage = { text: input, sender: "User", timestamp: Date.now() };

        setMessages([...messages, newUserMessage]);
        
        const currentInput = input;
        setInput("");

        const aiText = await askWidgetQuestion(currentInput); 
        
        const AiResponse = { text: aiText, sender: "Bot", timestamp: Date.now() };
        setMessages((prev) => [...prev, AiResponse]);
    }

    return (
        <form onSubmit={handleSend} className="chatwidget">
            <h3>Ask About Max</h3>
            <div className="chathistory">
                <h4>Chat history</h4>
                {messages.map((msg) => {
                    if (msg.sender === "User") {
                        return <p key={msg.timestamp}>User: {msg.text}</p>
                    }
                    if (msg.sender === "Bot") {
                        return <p key={msg.timestamp}>Bot: {msg.text}</p>
                    }
                    else {
                        return <p key={msg.timestamp}>{msg.text}</p>
                    }
                })}
            </div>
            <input
                id="chatwidgetinput"
                type="text"
                placeholder="Have a question?"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit">Send</button>
        </form>
    )
}