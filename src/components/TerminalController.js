// src/components/TerminalController.js
import React, { useState } from 'react';
import Terminal, { ColorMode, TerminalInput, TerminalOutput } from 'react-terminal-ui';
import { commandHandler } from './CommandHandler';
import { linkToAction } from '../utils/LinkHandler';

const TerminalController = () => {
    const [colorMode, setColorMode] = useState(ColorMode.Dark);

    const handleLinkClick = (command) => {
        handleInput('clear');
        handleInput(command);
    };

    const defaultText = [
        <TerminalOutput key="welcome">
            <div style={{paddingLeft: '15px'}}>
                Hey, hey! Welcome to Devashish's Terminal 🚀 💻.
            </div>
            <div style={{paddingLeft: '15px'}}>
                Need help? Just press Enter and we’ll pretend to know what we’re doing. 🤫✨
            </div>
            <div style={{paddingLeft: '15px'}}>
                (No judgment, I promise 😎)
            </div>
            <br/>
        </TerminalOutput>,
    ]

    const defaultTextOnClear = [
        <TerminalOutput key="welcome">
            <div style={{paddingLeft: '15px'}}>
                Hey, hey! Welcome to Devashish's Terminal 🚀 💻.
            </div>
            <div style={{paddingLeft: '15px'}}>
                Need help? Just type {linkToAction("help", colorMode, handleLinkClick)} and we’ll pretend to know what we’re doing. 🤫✨
            </div>
            <div style={{paddingLeft: '15px'}}>
                (No judgment, we promise 😎)
            </div>
            <br/>
        </TerminalOutput>,
    ]


    const [terminalLineData, setTerminalLineData] = useState(defaultText);

    const handleInput = (terminalInput) => {
    const output = commandHandler(terminalInput, colorMode, handleLinkClick);

    if (output === 'clear') {
      setTerminalLineData(defaultTextOnClear);
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
        <TerminalInput key={`input-${prev.length+1}`}></TerminalInput>,
    ]);
  };



  return (
      <div
          className="container"
          style={{
            height: '100vh', // Make the container fill the entire height of the screen
            backgroundColor: '#111', // Dark background for the terminal
            padding: '20px', // Add small gaps around the container
            boxSizing: 'border-box', // Include padding in the element's total width and height
          }}
      >
        <Terminal
            name="Devashish Taneja"
            colorMode={colorMode}
            onInput={handleInput}
            startingInputValue="whoami"
            height="900px"
            style={{
              // height: '100%', // Make the terminal fill the container height
              // width: '100%', // Make the terminal fill the container width
              // borderRadius: '20px', // Optional: Add rounded corners for a nicer effect
              // padding: '20px', // Add padding inside the terminal to create small gaps around the content
              // boxSizing: 'border-box', // Make sure padding is included in the element's total width and height
                flex: 1, // Make the terminal fill available space
                width: '100%', // Ensure it takes full width
                borderRadius: '20px', // Optional: rounded corners
                padding: '20px', // Padding inside terminal
                boxSizing: 'border-box', // Ensure padding is included in the total width/height

            }}
        >
          {terminalLineData}
        </Terminal>
      </div>
  );
};

export default TerminalController;
