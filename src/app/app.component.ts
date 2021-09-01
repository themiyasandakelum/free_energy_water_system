import { Component } from '@angular/core';
import { LottieSplashScreen } from '@ionic-native/lottie-splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private lottieSPlashScreen: LottieSplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.lottieSPlashScreen.show();
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      setTimeout(()=>{
        this.lottieSPlashScreen.hide();
      },4000);
      
    });
  }}
