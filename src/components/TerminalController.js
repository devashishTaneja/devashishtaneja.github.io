import React, { useState } from 'react';
import Terminal, { ColorMode, TerminalOutput } from 'react-terminal-ui';

const TerminalController = () => {
  const [terminalLineData, setTerminalLineData] = useState([
    <TerminalOutput>Welcome to the React Terminal UI Demo!</TerminalOutput>,
  ]);

  return (
    <div className="container">
      <Terminal
        name="Devashish Taneja"
        colorMode={ColorMode.Dark}
        onInput={(terminalInput) =>
          console.log(`New terminal input received: '${terminalInput}'`)
        }
      >
        {terminalLineData}
      </Terminal>
    </div>
  );
};

export default TerminalController;
