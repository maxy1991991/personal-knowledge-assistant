export function Experience() {
    return (
        <div>
            <h2>Experience</h2>

            <div className="experience-item">
                <h3>Software Engineering Intern</h3>
                <p><strong>IBM</strong> | Baton Rouge, LA | May 2026 - July 2026</p>
                <p>Incoming summer 2026</p>
            </div>

            <div className="experience-item">
                <h3>Undergraduate Research Assistant</h3>
                <p><strong>Oregon State University</strong> | Corvallis, OR | August 2025 - May 2026</p>
                <p>I worked with graduate students to develop a self-evolving autonomous prediction agent. We used RAG to retrieve past failure cases and synthesize guidelines that made future predictions more accurate. I was responsible for integrating Gemini as an additional LLM option alongside GPT, and connecting the system to data pipelines (ProphetArena and FutureX) for testing and evaluation.</p>
            </div>
        </div>
    )
}