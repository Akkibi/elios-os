// WindowManager.js
import React, { useState } from 'react';
import folderStructure from '../data/folderStructure.json';

const WindowManager = () => {

  return (
    <div className="fixed inset-0 w-full h-full">
      <h1>Welcome</h1>
      <div>
        <h2>Documents</h2>
        <ul>
          {folderStructure.folders[0].content.map((file) => (
            <li key={file}>{file}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WindowManager;