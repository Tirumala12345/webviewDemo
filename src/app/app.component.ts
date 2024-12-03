import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'webviewDemo';

  getFlutterDeviceToken(): void {
    if (window['flutter_inappwebview']) {
      window['flutter_inappwebview']
        .callHandler('getDeviceToken')
        .then((token: string) => {
          console.log('Received Device Token:', token);
          alert('Device Token: ' + token);
        })
        .catch((error: any) => {
          console.error('Error fetching device token:', error);
        });
    } else {
      console.error('Flutter InAppWebView is not available.');
      alert('Flutter InAppWebView is not available.');
    }
}
}
