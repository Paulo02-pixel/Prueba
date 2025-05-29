import { Component } from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';

/**
 * @summary Component responsible for displaying the footer with credits and technology links.
 * @author Paulo Quincho
 */


@Component({
  selector: 'app-footer-content',
  imports: [
    TranslatePipe
  ],
  templateUrl: './footer-content.component.html',
  styleUrl: './footer-content.component.css'
})
export class FooterContentComponent {

}
