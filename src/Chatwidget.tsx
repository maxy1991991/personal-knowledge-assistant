import { useState } from "react" 

export function Chatwidget() {
    let fakemessages = [
        { text: "Hi", sender: "User", timestamp: 12312 },
        { text: "Die", sender: "Bot", timestamp: 23222 }
    ]
    
    const [messages, setMessages] = useState(fakemessages)
    const [input, setInput] = useState("")

    function handleSend(e: React.SubmitEvent) {
        e.preventDefault();
        const newmessage = { text: input, sender: "User", timestamp: Date.now() }
        setMessages([...messages, newmessage]);
        setInput(""); 
        const clickedButton = e.nativeEvent.submitter as HTMLButtonElement;
        console.log(clickedButton.type);
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
                type="text"
                placeholder="Have a question?"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit">Send</button>
        </form>
    )
}