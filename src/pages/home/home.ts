import { Component } from '@angular/core';
import { NavController, AlertController} from 'ionic-angular';
import { AudioRecorder, AudioRecorderState } from '../../services/audiorecorder';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [AudioRecorder]

})
export class HomePage {
  AudioRecorderState = AudioRecorderState;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public audioRecorder: AudioRecorder) {

  }

  playerIcon: string = 'play';
  playing: boolean = false;
  recording: boolean = false;
  toggleRecording() {
      try {
        if (this.audioRecorder.state = AudioRecorderState.Ready) {
          this.audioRecorder.startRecording();
          this.recording = true;
        }
        else {
          this.audioRecorder.stopRecording();
          this.recording = false;
        }
      }
      catch (e) {
        this.showAlert('Could not start recording.');
      }
    }

    togglePlayback() {
      try {
        if (this.audioRecorder.state = AudioRecorderState.Playing) {
            this.playing = true;
            this.playerIcon = 'square';
            this.audioRecorder.startPlayback();
        }
        else {
            this.playing = false;
            this.playerIcon = 'play';
            this.audioRecorder.stopPlayback();
        }

      }
      catch (e) {
        this.playerIcon = 'play';
        this.playing = false;
        this.showAlert('Could not play recording.');
      }
    }

  showAlert(message) {
    let alert = this.alertCtrl.create({
        title: 'Error',
        subTitle: message,
        buttons: ['OK']
    });
    alert.present();
  }

}
