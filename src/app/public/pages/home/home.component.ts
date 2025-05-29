import {Component, OnInit} from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef,
  MatTable
} from '@angular/material/table';
import {DatePipe, NgIf} from '@angular/common';
import {MatButton} from '@angular/material/button';
import {RouterLink} from '@angular/router';
import {Plot} from '../../../monitoring/model/plots.entity';
import {PlotService} from '../../../monitoring/services/plots.service';

/**
 * @summary Component that displays the home page with a hero section and translated text.
 *
 * @description
 * This component is responsible for rendering the landing section of the application.
 *
 * @author Paulo Quincho
 */

@Component({
  selector: 'app-home',
  imports: [
    TranslatePipe,
    MatTable,
    NgIf,
    MatColumnDef,
    MatHeaderCell,
    MatHeaderCellDef,
    MatCell,
    MatCellDef,
    DatePipe,
    MatButton,
    RouterLink,
    MatHeaderRow,
    MatRow,
    MatHeaderRowDef,
    MatRowDef
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  plots: Plot[] = [];
  columns: string[] = ['id', 'name', 'location', 'hectares', 'monitoringStartDate', 'actions'];

  constructor(private plotService: PlotService) {}

  ngOnInit(): void {
    this.plotService.getAll().subscribe((data) => {
      this.plots = data;
    });
  }

  isFutureDate(dateStr: string): boolean {
    const today = new Date();
    const inputDate = new Date(dateStr);
    return inputDate > today;
  }
}
