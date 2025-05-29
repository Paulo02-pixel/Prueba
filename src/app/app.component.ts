import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {TranslatePipe, TranslateService} from '@ngx-translate/core';
import {environment} from '../environments/environment';
import {MatToolbar, MatToolbarRow} from '@angular/material/toolbar';
import {MatAnchor} from '@angular/material/button';
import {LanguageSwitcherComponent} from './public/components/language-switcher/language-switcher.component';
import {FooterContentComponent} from './public/components/footer-content/footer-content.component';

/**
 * @summary Root component of the Tend.
 * Responsible for layout structure, language initialization, and main navigation options.
 *
 * @description
 * The AppComponent contains the toolbar, router outlet, and footer.
 * It initializes the translation service with supported languages and sets the default language.
 *
 * @author Paulo Quincho
 */

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, MatToolbar, MatToolbarRow, MatAnchor, RouterLinkActive, TranslatePipe, LanguageSwitcherComponent, FooterContentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tend-app';

  options = [
    { link: '/home', label: 'home.title' },
    { link: '/inspections/:id', label: 'INSPECTION.title' },
  ];

  constructor(private translateService: TranslateService) {
    translateService.use('en');
    translateService.setDefaultLang('en');
    translateService.addLangs(['en', 'es']);
  }

}
