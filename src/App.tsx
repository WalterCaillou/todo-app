import React from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Mirror></Mirror>
        <p>
            yingshaoxo is your father.
        </p>
      </header>
    </div>
  );
}

interface Props { }
interface State { };
class Mirror extends React.Component<Props, State> {
    video_reference: HTMLVideoElement | null = null
    set_video_reference = (element: HTMLVideoElement) => {
        this.video_reference = element
    }
async componentDidMount() {
        if (this.video_reference) {
            let video_stream: MediaStream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "user" }, audio: false })
            this.video_reference.srcObject = video_stream
        }
    }
render() {
        return (
            <video ref={this.set_video_reference} id="player" autoPlay>
            </video>
        )
    }
}

export default App;
