import React from 'react';

class Player extends React.Component {

   constructor(props) {
      super(props);
      this.state = {
        data: [],
        playAudio: false
      };
    }

    componentDidMount() {
      fetch('http://darryloctober.com/data/audioData.json')
        .then(response => response.json())
        .then(data => this.setState({ data }));
    }

    _toggleClick() {

       this.setState({
            playAudio: !this.state.playAudio,
            buttonIcon: !this.state.buttonIcon
          });

          if (!this.state.playAudio) {
             this.audio.play();

          } else {
              this.audio.pause();
          }
    }

    _handleClick() {

         if (!this.audio) {
             this.setState({
                buttonIcon: this.state.buttonIcon
            });

          } else {
              this.setState({
                 buttonIcon: !this.state.buttonIcon
             });
          }
    }

    render() {

        // var src = this.state.data.audio;

        if (this.props) {
            var domNodeClass = "player " + this.props.size
        }

    return (
      <div className={domNodeClass}>
          <div className="audioWrapper">
              <div className="button" onClick={this._toggleClick.bind(this)}><i className={this.state.buttonIcon ? 'pause icon' : 'play icon'} /></div>
              <div className="audioMeta">
                  <p className="audioTitle">{this.state.data.title}</p>
                  <img src={this.state.data.image} onClick={this._toggleClick.bind(this)} />
              </div>

              <audio id="t-rex-roar" controls ref={(audio) => { this.audio = audio }} onClick={this._handleClick.bind(this)}>
                      <source type="audio/mpeg" src="https://omnystudio.com/d/clips/5dcefa8e-00a9-4595-8ce1-a4ab0080f142/1ecba37a-6d83-4ee9-a295-a57100b7f2df/6f3d24bf-b9b7-4edf-ad4e-a95900e0749b/audio.mp3?in_playlist=fea13fc9-5335-475c-8d7f-a8f800d24e67" />
                      Your browser does not support the <code>audio</code> element.
              </audio>

              <div className="transparentLayer" onClick={this._toggleClick.bind(this)}></div>
          </div>

          <p className="description">{this.state.data.description}</p>

          <p><strong>Duration:</strong> {this.state.data.duration}</p>

          <p><strong>Playlist:</strong> {this.state.data.playlist_title}</p>


      </div>
    );
  }
}

export default Player;
