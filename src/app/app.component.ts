import { Component } from '@angular/core';

@Component({
  selector: "app-root",
  templateUrl: './app.component.html',
  styles: [
    `
    .boundary {
      background: green;
      width: 50%;
      height: 5000px;
    }
      .example-box {
        width: 200px;
        height: 200px;
        padding: 10px;
        box-sizing: border-box;
        border: solid 1px #ccc;
        color: rgba(0, 0, 0, 0.87);
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        background: #fff;
        border-radius: 4px;
        position: fixed;
        z-index: 1;
        transition: box-shadow 200ms cubic-bezier(0, 0, 0.2, 1);
        box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2),
          0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
      }

      .example-box.free-dragging {
        box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),
          0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);
      }

      .example-handle {
        position: absolute;
        top: 10px;
        right: 10px;
        color: #ccc;
        cursor: move;
        width: 24px;
        height: 24px;
      }
    `,
  ],
})
export class AppComponent {
  title = "angular-free-dragging";
}
