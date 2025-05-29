import {Component, OnInit} from '@angular/core';
import {Inspection} from '../../model/inspection.entity';
import {ActivatedRoute, Router} from '@angular/router';
import {InspectionService} from '../../services/inspection.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {
  InspectionCreateAndEditComponent
} from '../../components/inspection-create-and-edit/inspection-create-and-edit.component';

/**
 * @summary
 * Component to manage the inspection registration process.
 *
 * Displays the inspection registration form and handles form submission,
 * including validation, saving the inspection via InspectionService,
 * and showing feedback messages with Angular Material SnackBar.
 * Supports navigation and cancellation.
 *
 * @author
 * Paulo Quincho
 */

@Component({
  selector: 'app-inspection-management',
  imports: [
    InspectionCreateAndEditComponent
  ],
  templateUrl: './inspection-management.component.html',
  styleUrl: './inspection-management.component.css'
})
export class InspectionManagementComponent implements OnInit{
  inspectionData: Inspection = new Inspection({});
  editMode = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private inspectionService: InspectionService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    const plotId = Number(this.route.snapshot.paramMap.get('id'));
    this.inspectionData.plotId = plotId;
    this.inspectionData.inspectionDate = new Date().toISOString().split('T')[0]; // yyyy-mm-dd
  }

  onCancelRequested() {
    this.router.navigate(['/home']);
  }

  onInspectionAddRequested(inspection: Inspection) {
    if (!inspection.plotId || inspection.plotId <= 0) {
      this.snackBar.open('Plot ID is missing or invalid.', 'Close', { duration: 3000 });
      return;
    }
    this.inspectionService.create(inspection).subscribe({
      next: () => {
        if (inspection.cropStatus === 'Critical') {
          this.snackBar.open('Critical condition detected. Immediate action required.', 'Close', { duration: 3000 });
        } else {
          this.snackBar.open('Inspection successfully registered.', 'Close', { duration: 3000 });
        }
        this.router.navigate(['/home']);
      },
      error: () => {
        this.snackBar.open('Failed to register inspection.', 'Close', { duration: 3000 });
      }
    });
  }
}
