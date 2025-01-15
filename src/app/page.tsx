import './styles.css'

export default function Home() {
  return (
    <div>
      <section id='profile'>
        <h1 className='name'>Jaden Bertino</h1>
        <h3 className='position'>Web Developer</h3>
        <div className='contact-info'>
          <div className='email'>
            <a
              href='mailto:jadentbertino@gmail.com'
              target='_blank'
            >
              <i className='fa-solid fa-envelope'></i>
              <span>jadentbertino@gmail.com</span>
            </a>
          </div>
          {/* <div className='phone'>
            <i className='fa-solid fa-phone'></i>
            <span>714.925.0548</span>
          </div> */}
          <div className='location'>
            <i className='fa-solid fa-location-dot'></i>
            <span>Irvine, CA</span>
          </div>
          <div className='github'>
            <a
              href='https://github.com/jadenbertino'
              target='_blank'
            >
              <i className='fa-brands fa-github'></i>
              <span>GitHub</span>
            </a>
          </div>
          <div className='linkedin'>
            <a
              href='https://www.linkedin.com/in/jadenbertino/'
              target='_blank'
            >
              <i className='fa-brands fa-linkedin'></i>
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </section>
      <section id='skills'>
        <h2 className='section-title'>Technical Skills</h2>
        <div className='highlight skill-stack'>
          <div className='highlight-title-wrapper'>
            <h3 className='highlight-title'>Strong</h3>
            <p className='highlight-subtitle'>— React, JavaScript, HTML, CSS</p>
          </div>
        </div>
        <div className='highlight skill-stack'>
          <div className='highlight-title-wrapper'>
            <strong>Experienced</strong>
            <span className='highlight-subtitle'>
              — Google Cloud Platform, APIs, PostgreSQL, Express, AJAX, Bootstrap, Node.js, SASS
            </span>
          </div>
        </div>
        <div className='highlight skill-stack'>
          <div className='highlight-title-wrapper'>
            <strong>Tools</strong>
            <span className='highlight-subtitle'>
              — Git, GitHub, CI / CD, Linux, Docker, Figma, Chrome Dev Tools, Slack, OOP, Agile
              Workflow
            </span>
          </div>
        </div>
      </section>
      <section id='applications'>
        <h2 className='section-title'>Applications Developed</h2>
        <div className='highlight'>
          <header className='highlight-title-wrapper'>
            <h3 className='highlight-title'>Hourglass Calendar</h3>
            <div className='highlight-subtitle'>
              —
              <a
                href='https://github.com/jadenbertino/hourglass-calendar'
                target='_blank'
              >
                GitHub
              </a>
              |
              <a
                href='https://hourglass-calendar.web.app/'
                target='_blank'
              >
                Live
              </a>
            </div>
          </header>
          <em>
            Calendar application that enables users to create, view, and manage upcoming events.
          </em>
          <ul>
            <li>
              Built responsive user interface with <strong>React</strong> to display events in
              daily, weekly, and monthly views.
            </li>
            <li>
              Integrated with <strong>Google Firestore</strong> to ensure events are always up to
              date and sync across all devices.
            </li>
            <li>
              Setup <strong>Custom React Hooks</strong> to handle User Authentication, React
              Context, and
              <strong>AJAX Requests.</strong>
            </li>
            <li>
              Enhanced code readability with
              <strong>JSDoc Comments,</strong> React Components, and Utility Files.
            </li>
            <li>
              Configured <strong>Firebase Security Rules</strong> to guarantee data privacy for all
              users.
            </li>
          </ul>
        </div>
        <div className='highlight'>
          <header className='highlight-title-wrapper'>
            <h3 className='highlight-title'>Level Up Library</h3>
            <div className='highlight-subtitle'>
              —
              <a
                href='https://github.com/jadenbertino/level-up-library'
                target='_blank'
              >
                GitHub
              </a>
              <span className='divider'>|</span>
              <a
                href='https://level-up-library.web.app/'
                target='_blank'
              >
                Live
              </a>
            </div>
          </header>
          <em>Online bookstore that helps customers discover new "self-help" books to read.</em>
          <ul>
            <li>
              Initiated <strong>Google Cloud Platform Buckets</strong> and Google Firestore to store
              book data.
            </li>
            <li>
              Built payment processor with <strong>Stripe API</strong> to ensure fast and secure
              transactions for customers.
            </li>
            <li>
              Implemented <strong>Bootstrap Components</strong> and
              <strong>Skeleton Loading State</strong> to improve user experience.
            </li>
            <li>
              Configured <strong>GitHub Actions</strong> and <strong>Firebase Hosting</strong> to
              auto-deploy new commits to live website.
            </li>
          </ul>
        </div>
      </section>
      <section id='experience'>
        <h2 className='section-title'>Professional Experience</h2>
        <div className='highlight'>
          <header className='highlight-title-wrapper'>
            <h3 className='highlight-title'>Soccer Coach</h3>
            <span className='highlight-subtitle'>— Irvine Soccer Academy</span>
            <span className='date'>04/2021 — Current</span>
          </header>
          <ul>
            <li>
              Conduct 180-minute trainings 3 times per week to enhance players' technical and
              teamwork abilities.
            </li>
            <li>
              Direct teams of 18 players to maintain focused and productive training sessions.
            </li>
            <li>
              Mentor new staff to ensure they have the necessary skills to deliver high-quality
              coaching.
            </li>
          </ul>
        </div>
        <div className='highlight'>
          <header className='highlight-title-wrapper'>
            <h3 className='highlight-title'>Math Tutor (Trigonemtry, Pre-Calculus, Statistics)</h3>
            <span className='highlight-subtitle'>— Self-Employed</span>
            <span className='date'>06/2021 — 12/2021</span>
          </header>
          <ul>
            <li>Tutored 3 high school students, boosting the average student grade by 22%.</li>
            <li>
              Implemented study techniques like Active Recall and Spaced Repetition to improve
              student memory.
            </li>
            <li>
              Produced concise reference materials that students can review during independent study
              time.
            </li>
          </ul>
        </div>
      </section>
      <section id='education'>
        <h2 className='section-title'>Education</h2>
        <div className='highlight'>
          <header className='highlight-title-wrapper'>
            <h3 className='highlight-title'>
              Certificate In CS50 Introduction To Computer Science
            </h3>
            <span className='highlight-subtitle'>— Harvard University</span>
            <span className='date'>06/2024</span>
          </header>
          <ul>
            <li>
              Mastered key computer science concepts such as abstraction, algorithms, data
              structures, encapsulation, resource management, security, and web development.
            </li>
          </ul>
        </div>
        <div className='highlight'>
          <header className='highlight-title-wrapper'>
            <h3 className='highlight-title'>Web Development Bootcamp</h3>
            <span className='highlight-subtitle'>— Learning Fuze</span>
            <span className='date'>09/2023</span>
          </header>
          <ul>
            <li>
              Gained extensive experience in full-stack development through immersive, project-based
              learning.
            </li>
            <li>
              Invested 36-weeks and 800+ hours into developing applications in an agile work
              environment.
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}
