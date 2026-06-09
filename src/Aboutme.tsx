import { FaJava, FaPython, FaGitAlt, FaGithub, FaReact } from 'react-icons/fa'
import { SiCplusplus, SiC, SiR, SiJavascript, SiHtml5, SiCss, SiTypescript, SiPostgresql, SiLinux, SiPytorch } from 'react-icons/si'
import { TbBrandVscode } from 'react-icons/tb'
import resumePdf from './assets/Maxwell_Yang_Resume.pdf'

export function Aboutme () {
    return (
    <div>
      <div className="about-intro">
        <h1>About Me</h1>
        <p> From: Portland, Oregon</p>
        <p>Major: Computer Science at Oregon State University</p>
        <p>Fun fact: I've never broken a bone</p>
      </div>
      <div className='Links'>
        <h3>Links</h3>
        <a href="https://www.linkedin.com/in/maxwellyang/">Linkedin</a>
        <a href="https://github.com/maxy1991991">Github</a>
        <a href="https://www.chess.com/member/maxy1991991991">Chess.com</a>
        <a href={resumePdf} target="_blank">Resume</a>

      </div>

      <h2 className="skills-title">Technical skills</h2>
      <div className="skills-grid">
        <div className="skill-section">
          <h3>Frontend & UI/UX</h3>
          <div className="skill-items">
            <span className="skill-badge"><SiHtml5 /> HTML5</span>
            <span className="skill-badge"><SiCss /> CSS3</span>
            <span className="skill-badge"><SiJavascript /> JavaScript</span>
            <span className="skill-badge"><FaReact /> React</span>
            <span className="skill-badge"><SiTypescript /> TypeScript</span>
          </div>
        </div>

        <div className="skill-section">
          <h3>Backend & Database</h3>
          <div className="skill-items">
            <span className="skill-badge"><FaPython /> Python</span>
            <span className="skill-badge"><FaJava /> Java</span>
            <span className="skill-badge"><SiCplusplus /> C++</span>
            <span className="skill-badge"><SiC /> C</span>
            <span className="skill-badge"><SiR /> R</span>
            <span className="skill-badge"><SiPostgresql /> PostgreSQL</span>
          </div>
        </div>

        <div className="skill-section">
          <h3>Tools</h3>
          <div className="skill-items">
            <span className="skill-badge"><FaGitAlt /> Git</span>
            <span className="skill-badge"><FaGithub /> GitHub</span>
            <span className="skill-badge"><TbBrandVscode /> VS Code</span>
            <span className="skill-badge"><SiLinux /> Linux/Unix</span>
            <span className="skill-badge"><SiPytorch /> PyTorch</span>
          </div>
        </div>

        <div className="skill-section">
          <h3>Achievements</h3>
          <div className="skill-items">
            <span className="skill-badge">🥇 ICPC Div 2 Winner</span>
            <span className="skill-badge">🥇 USACO Gold</span>
            <span className="skill-badge">📐 AIME Qualifier</span>
          </div>
        </div>
      </div>
    </div>
  )
}
