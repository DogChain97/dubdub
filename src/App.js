// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

/*global chrome*/
import React from 'react';
import { Button } from 'react-bootstrap';
import downloadVid from './download';

function App() {
  const downloadVideo = () => {
    downloadVid("hi",window.location.href)
    console.log(window.location.href)
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      
      // chrome.downloads.download({
      //   url: tabs[0].url,
      //   filename: tabs[0].title + '.mp4'
      //   });
        });
        };
        
        return (
        <div className="App">
        <h1>YouTube Downloader</h1>
        <p>Click the button below to download the current video:</p>
        <Button variant="primary" onClick={downloadVideo}>Download Video</Button>
        </div>
        );
        }
        
        export default App;
