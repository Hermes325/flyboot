"use client"
import React, { useState } from 'react'
import SdekTerminalModal from './SdekTerminalModal';

function TestCDEKPage() {
  const [sdekTerminalData, setSdekTerminalData] = useState<any>(null);
  console.log("sdekTerminalDatac >> ", sdekTerminalData);

  return (<main className='min-h-screen pt-[108px]'>
    <h1>TestCDEKPage</h1>
    <SdekTerminalModal setSdekTerminalData={setSdekTerminalData} />

  </main >)
}

export default TestCDEKPage