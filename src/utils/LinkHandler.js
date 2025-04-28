import { ColorMode } from 'react-terminal-ui';


export const linkToAction = (cmd, colorMode, handleInput, cmdText) => {
    return (
        <a
            href="#"
            className={colorMode === ColorMode.Dark ? 'dark-link' : 'light-link'}
            onClick={(e) => {
                e.preventDefault();
                handleInput(cmd);
            }}
        >
            {cmdText || cmd}
        </a>
    );
};
