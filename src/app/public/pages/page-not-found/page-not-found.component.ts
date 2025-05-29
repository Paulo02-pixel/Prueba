import {Component, inject, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MatButton} from '@angular/material/button';
import {TranslatePipe} from '@ngx-translate/core';

/**
 * @summary Component that handles 404 Page Not Found errors.
 *
 * @description
 * Displays a message indicating that the requested path is invalid,
 * and provides a button to navigate back to the home page.
 * Extracts the invalid path from the current route for display purposes.
 *
 * @author Paulo Quincho
 */

@Component({
  selector: 'app-page-not-found',
  imports: [
    MatButton,
    TranslatePipe
  ],
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.css'
})
export class PageNotFoundComponent implements OnInit {
  protected invalidPath: string = '';
  private route: ActivatedRoute = inject(ActivatedRoute);
  private router: Router = inject(Router);

  ngOnInit(): void {
    this.invalidPath = this.route.snapshot.url.map(url => url.path).join('/');
  }

  protected onNavigateHome(): void {
    this.router.navigate(['home']).then();
  }

}
