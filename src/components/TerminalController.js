// src/components/TerminalController.js
import React, { useState } from 'react';
import Terminal, { ColorMode, TerminalInput, TerminalOutput } from 'react-terminal-ui';
import { commandHandler } from './CommandHandler';

const TerminalController = () => {
  const [colorMode, setColorMode] = useState(ColorMode.Dark);
  const [terminalLineData, setTerminalLineData] = useState([
    <TerminalOutput key="welcome">Welcome to Devashish's Terminal 🚀</TerminalOutput>,
    <TerminalOutput key="instructions">Type 'help' to see available commands.</TerminalOutput>,
  ]);

  const handleInput = (terminalInput) => {
    const output = commandHandler(terminalInput, colorMode, handleLinkClick);

    if (output === 'clear') {
      setTerminalLineData([]);
      return;
    }

    if (output === 'ignore') {
      setTerminalLineData(prev => [
        ...prev,
        <TerminalInput key={`input-${prev.length}`}>{`${terminalInput}`}</TerminalInput>,
      ]);
      return;
    }

    setTerminalLineData(prev => [
      ...prev,
      <TerminalInput key={`input-${prev.length}`}>{`${terminalInput}`}</TerminalInput>,
      <TerminalOutput key={`output-${prev.length}`}>{output}</TerminalOutput>,
    ]);
  };

  const handleLinkClick = (command) => {
    handleInput(command);
  };


  return (
    <div className="container" style={{ height: '100vh', backgroundColor: '#111' }}>
      <Terminal
        name="Devashish Taneja"
        colorMode={colorMode}
        onInput={handleInput}
      >
        {terminalLineData}
      </Terminal>
    </div>
  );
};

export default TerminalController;
