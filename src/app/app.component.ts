import { Component, OnInit } from '@angular/core';
import { PseudoSocketService } from './services/pseudo-socket/pseudo-socket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public filteredData = [];
  public worker: any = null;

  constructor(private readonly pseudoSocketService: PseudoSocketService) {}

  ngOnInit() {
    if (typeof Worker !== 'undefined') {
      const worker = new Worker(new URL('./app.worker', import.meta.url));

      this.worker = worker;

      worker.onmessage = ({ data }) => {
        if (this.pseudoSocketService.getAdditionalArrayIds().length === 0) {
          this.filteredData = JSON.parse(data).slice(-10);
        } else {
          this.filteredData = JSON.parse(data)
            .filter((item: never) =>
              this.pseudoSocketService
                .getAdditionalArrayIds()
                .includes(item['id'])
            )
            .slice(-10);
        }
      };
    } else {
      // Web Workers are not supported in this environment.
      // You should add a fallback so that your program still executes correctly.
    }

    this.pseudoSocketService.setWorker(this.worker);
  }
}
