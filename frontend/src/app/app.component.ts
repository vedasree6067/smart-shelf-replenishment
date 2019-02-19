import { Component } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dashboard';
  videoInput1 = "";
  videoInput2 = "";
  
  constructor(private socket:Socket){
    this.getMessageCam1();
    this.getMessageCam2();
    }

  // sendMessage(msg: string){
  //   this.socket.emit("message", msg);
  // }
  getMessageCam1() {
      return this.socket
          .fromEvent("cam1")
          .subscribe( data => {
            this.videoInput1 = 'data:image/jpeg;base64,'+data;
          });
  }
  getMessageCam2() {
    return this.socket
        .fromEvent("cam2")
        .subscribe( data => {
          this.videoInput2 = 'data:image/jpeg;base64,'+data;
        });
}
}