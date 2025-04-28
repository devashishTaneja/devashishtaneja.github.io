import { FaGithub, FaLinkedin, FaYoutubeSquare, FaEnvelope } from 'react-icons/fa'; // Importing the icons
import { ColorMode } from 'react-terminal-ui';
import { linkToAction } from '../utils/LinkHandler';

export const commandHandler = (input, colorMode, onHandleClick) => {
    const cmd = input.trim().toLowerCase();

    const commands = {
        whoami: [
            <span>
                <ul>
                    <li>
                        <strong>Backend Engineer</strong> — 4+ Years of Experience
                        <ul>
                            <li>Currently working at <strong>Amazon</strong> as a Backend Engineer.</li>
                            <li>Previously worked at <strong>Enphase Energy</strong>, where I was responsible for
                                architecting and building scalable backend systems.
                            </li>
                            <li>Experience in building microservices, REST APIs, and distributed systems.</li>
                        </ul>
                        <ul>
                            <li>Proficient in <strong>Java</strong>, <strong>Ruby</strong>, and <strong>C++</strong> with a focus on distributed systems, APIs, low-latency, and scalability.</li>
                            <li>Contributed to open-source projects such as{' '}
                                <a href="https://github.com/jobrunr" target="_blank"
                                   className={colorMode === ColorMode.Dark ? 'dark-link' : 'light-link'}>JobRunr</a>,{' '}
                                <a href="https://github.com/hashicorp" target="_blank"
                                   className={colorMode === ColorMode.Dark ? 'dark-link' : 'light-link'}>HashiCorp</a>,
                                and{' '}
                                <a href="https://github.com/faker-ruby/faker" target="_blank"
                                   className={colorMode === ColorMode.Dark ? 'dark-link' : 'light-link'}>faker-ruby/faker</a>.
                            </li>
                            <li>My interests include distributed systems, APIs, low-latency, and scalability.</li>
                        </ul>
                    </li>
                    <br/>

                    <li>
                        <strong>Education</strong> — IIT Guwahati (2017 - 2021)
                        <ul>
                            <li>BTech in Electronics and Communication Engineering</li>
                            <li>CGPA: 8.36</li>
                        </ul>
                    </li>
                    <br/>

                    <li>
                        <strong>Skills</strong>
                        <ul>
                            <li><strong>Programming Languages:</strong> Java • Ruby • Go • Python</li>
                            <li><strong>Build Tools:</strong> Git • Jenkins • Docker</li>
                            <li><strong>Frameworks:</strong> Ruby on Rails • Spring Boot • Airflow • GraphQL</li>
                            <li><strong>Cloud Services:</strong> AWS • Redis • MongoDB • MySQL • Elasticsearch • S3 • SQS</li>
                        </ul>
                    </li>
                </ul>
            </span>
            ,
            'Get to know about yours truly 🧐'],

        linkedin: [
            (
                <span>
                    Ah, looking for my professional side? Here’s my LinkedIn:
                    <a href="https://linkedin.com/dtaneja123" target="_blank" rel="noopener noreferrer"
                       className={colorMode === ColorMode.Dark ? 'dark-link' : 'light-link'}> Devashish Taneja <FaLinkedin/> </a>
                </span>

            ),
            'Where I pretend to be professional 👔'
        ],
        github: [
            (
                <span>
                    Oh, you want to peek into my code, huh? Here's my GitHub:
                    <a href="https://github.com/devashishTaneja" target="_blank" rel="noopener noreferrer"
                       className={colorMode === ColorMode.Dark ? 'dark-link' : 'light-link'}> Devashish Taneja <FaGithub/> </a>
                </span>
            ),
            "My code, my mess 💻"
        ],
        music: [
            (
                <span>
                        Time to jam out! Here’s my Playlist:
                        <a href="https://music.youtube.com/playlist?list=PL5BwGpDR1UK63eCMc81cre-c-cEG_npCv&si=XBvgH-cJDtFv-b8Z/"
                           target="_blank" rel="noopener noreferrer"
                           className={colorMode === ColorMode.Dark ? 'dark-link' : 'light-link'} right-align> Devashish Taneja <FaYoutubeSquare/> </a>
                    </span>
            ),
            "Jams that fuel the chaos 🎶"
        ],
        todo: [
            <span>
                <span style={{ marginRight: '40px'}}>Today's ToDo list:</span>
                <ol>
                    <li>Drink coffee ☕</li>
                    <li>Write code 💻</li>
                    <li>Break things 🔥</li>
                </ol>
            </span>,
            'My never-ending battle list 📋'
        ],
        contact: [
            (<span>
                <ul>
                    <li>GitHub: <a href="https://github.com/devashishTaneja" target="_blank" rel="noopener noreferrer"
                                  className={colorMode === ColorMode.Dark ? 'dark-link' : 'light-link'}> Devashish Taneja <FaGithub/> </a></li>
                    <li>LinkedIn: <a href="https://linkedin.com/in/dtaneja123" target="_blank" rel="noopener noreferrer"
                                     className={colorMode === ColorMode.Dark ? 'dark-link' : 'light-link'}> Devashish Taneja <FaLinkedin/> </a></li>
                    <li>Email: <a href="mailto:taneja.devashish@gmail.com" target="_blank" rel="noopener noreferrer"
                                  className={colorMode === ColorMode.Dark ? 'dark-link' : 'light-link'} > taneja.devashish@gmail.com <FaEnvelope/></a> </li>
                </ul>
            </span>),
            'Send me a digital pigeon 🕊️'
        ],
        clear: [
            'clear',
            'Clear the ground 🧹'
        ],
        experience: [
            (
            <span>
            <ul>
                <li>
                    <strong>SDE II</strong> — Amazon, AVS Team (2024 - Present)
                    <ul>
                        <li>Building backend services for AVS to enhance vendor integrations and large-scale workflow
                            automation.
                        </li>
                    </ul>
                </li>
                <br/>

                <li>
                    <strong>Staff Engineer</strong> — Enphase Energy (2024 - Present)
                    <ul>
                        <li>Designed horizontally scalable Site Search Microservice using OpenSearch and Kafka for
                            real-time syncing.
                        </li>
                        <li>Developed Fleet Upgrade tool with Spring Boot to remotely upgrade customer sites in bulk.
                        </li>
                    </ul>
                </li>
                <br/>

                <li>
                    <strong>Senior Software Engineer</strong> — Enphase Energy (2022 - 2024)
                    <ul>
                        <li>Re-architected legacy Ruby on Rails monolith into modular MVC-based services.</li>
                        <li>Migrated deployments from AMI to Docker for improved scalability and deployment
                            efficiency.
                        </li>
                        <li>Built Spring Cloud Gateway for Kubernetes-based microservices with Canary deployments.</li>
                        <li>Developed AB Gating microservice using Spring Boot, MySQL, and Distributed Redis caching.
                        </li>
                    </ul>
                </li>
                <br/>

                <li>
                    <strong>Software Engineer</strong> — Enphase Energy (2021 - 2022)
                    <ul>
                        <li>Created Support Dashboard tool in Ruby on Rails and MongoDB to track 2M+ customer sites and
                            automate case creation in Salesforce.
                        </li>
                        <li>Optimized RSpec test execution by parallelizing tests across Docker containers, reducing
                            runtime by 90%.
                        </li>
                    </ul>
                </li>
            </ul>
        </span>
        ),
            'Stories from the trenches 🏅'
        ],
        oss: [
            (
            <ul>
                <li>
                    <strong>JobRunr</strong> — Java
                    <ul>
                        <li>Implemented support for auto-scheduling background jobs by annotating service interfaces,
                            reducing boilerplate code and created dynamic proxies using Spring to convert method calls
                            into scheduled jobs automatically.
                        </li>
                    </ul>
                </li>
                <br/>

                <li>
                    <strong>HashiCorp/Nomad</strong> — Go
                    <ul>
                        <li>Added support for labeling Docker containers with Nomad parent job IDs for periodic and
                            dispatch jobs.
                        </li>
                        <li>Enhanced Nomad job version retention by allowing user-defined count settings.</li>
                    </ul>
                </li>
                <br/>

                <li>
                    <strong>Faker-Ruby/Faker</strong> — Ruby
                    <ul>
                        <li>Added the ability to combine multiple data generators into a single composite generator.
                        </li>
                        <li>Fixed bugs causing failures in data generation for specific locales and formats.</li>
                    </ul>
                </li>
            </ul>
        ),
            'Giving back, one bug at a time 🐞'
        ],
        'ls': []


};

    const availableCommands = Object.keys(commands);

    commands['ls'] = [
        availableCommands.map((cmd) => (
            <span key={cmd} style={{ marginLeft: '20px', color: '#00ff00' }}>
                {linkToAction(cmd, colorMode, onHandleClick, `${cmd + "/"}`)}
        </span>)),
        'Take a peek inside 👀'
    ];


    const links = availableCommands.map((cmd) => (
        <span key={cmd} style={{ display: 'block', marginLeft: '20px', color: '#00ff00' }}>
        <span style={{ marginRight: '10px', color: '#00ff00' }}>&gt; </span>
        {linkToAction(cmd, colorMode, onHandleClick, `${cmd.padEnd(15, ' ')}(${commands[cmd][1]})`)}
        <br />
    </span>
    ));

    if (!cmd) return 'ignore';


    commands['help'] = [
            (<span>
                Look at you, asking for help like a pro 🧐. Don’t worry, this is totally between us! 🙊<br/>
                These links should make things easier… I hope 😅<br/>
                {links}
            </span>),
        "help"
        ];

    commands['more'] = [(
        <span>
            Oh wow, you want more? 🥹 I didn’t think anyone would get this far!<br/>
            I’m honestly flattered... and a little nervous 😅<br/>
            Here’s some extra stuff I managed to put together 👉<br/>
                    {links}
          </span>
            ),
        "more"];

    if (commands.hasOwnProperty(cmd)) {
        if (!['help', 'more', 'clear'].includes(cmd)) {
            return (
                <span>
                    {commands[cmd][0]}
                    <br/> <br/>
                    <span style={{marginRight: '20px', color: '#00ff00'}}></span>
                    {linkToAction('more', colorMode, onHandleClick, 'Click here for more awesome stuff 👇')}
                </span>
            );
        }
        return commands[cmd][0];
    }

    return <span>
        Uh-oh! Looks like we have a mystery on our hands... 🔍 <br/>
        This command doesn’t exist. Maybe trying one of these ways will help you out!` <br/>
        {links}
    </span>;
};
