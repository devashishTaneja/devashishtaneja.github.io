import { FaGithub, FaLinkedin, FaSpotify } from 'react-icons/fa'; // Importing the icons
import { ColorMode } from 'react-terminal-ui';


export const commandHandler = (input, colorMode, onHandleClick) => {
    const cmd = input.trim().toLowerCase();

    const availableCommands = ['whoami', 'ls', 'projects', 'linkedin', 'github', 'spotify', 'todo', 'contact', 'clear'];

    const links = availableCommands.map((cmd) => (
        <span key={cmd}>
            <a
                href="#"
                className={colorMode === ColorMode.Dark ? 'dark-link' : 'light-link'}
                onClick={(e) => {
                    e.preventDefault();
                    onHandleClick(cmd); // Handle the link click event
                }}
            >
                {cmd}
            </a>
            {', '}
        </span>
    ));

    const commands = {
        help: 'Available commands: ' + availableCommands.join(', '),
        whoami: 'You are a brave explorer of Devashish\'s portfolio! 🧭',
        ls: 'projects/  linkedin/  github/  spotify/  todo/  contact/',
        projects: 'Projects: 🚀 Space Invaders Clone, 🛒 E-commerce App, 📚 Learning Platform',
        linkedin: (
            <span>
                Ah, looking for my professional side? Here’s my LinkedIn:
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className={colorMode === ColorMode.Dark ? 'dark-link' : 'light-link'}> Devashish Taneja <FaLinkedin /> </a>
            </span >

        ),
        github: (
            <span>
                Oh, you want to peek into my code, huh? Here's my GitHub:
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className={colorMode === ColorMode.Dark ? 'dark-link' : 'light-link'}> Devashish Taneja <FaGithub /> </a>
            </span >
        ),
        spotify: (
            <span>
                Time to jam out! Here’s my Spotify:
                <a href="https://open.spotify.com/" target="_blank" rel="noopener noreferrer" className={colorMode === ColorMode.Dark ? 'dark-link' : 'light-link'}> Devashish Taneja <FaSpotify /> </a>
            </span >
        ),
        todo: 'Today\'s ToDo: 1. Drink coffee ☕ 2. Write code 💻 3. Break things 🔥',
        contact: 'Contact Devashish: 📧 taneja.devashish@gmail.com',
        clear: 'clear'
    };

    if (!cmd) return 'ignore';

    if (commands.hasOwnProperty(cmd)) {
        return commands[cmd];
    }

    return <span>
        Uh-oh! Looks like we have a mystery on our hands... 🔍
        This command doesn’t exist. Maybe trying one of these ways {links}
        will help you out!`
    </span>;
};
