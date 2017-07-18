import { MediaPlugin } from 'ionic-native';
import { Injectable } from '@angular/core';

@Injectable()
export class AudioRecorder {


  mediaPlugin: MediaPlugin = null;


  get MediaPlugin(): MediaPlugin {
    if (this.mediaPlugin == null) {
      this.mediaPlugin = new MediaPlugin('../Library/NoCloud/recording.wav');
    }

    return this.mediaPlugin;
  }


  state: AudioRecorderState = AudioRecorderState.Ready;
  startRecording() {
    this.MediaPlugin.startRecord();
    this.state = AudioRecorderState.Recording;
  }

  stopRecording() {
    this.MediaPlugin.stopRecord();
    this.state = AudioRecorderState.Recorded;
  }

  startPlayback() {
    this.MediaPlugin.play();
    this.state = AudioRecorderState.Playing;
  }

  stopPlayback() {
    this.MediaPlugin.stop();
    this.state = AudioRecorderState.Ready;
  }

}

export enum AudioRecorderState {
    Ready,
    Recording,
    Recorded,
    Playing
}
