import {Component, EventEmitter, Input, Output} from '@angular/core';
import { Inspection} from '../../model/inspection.entity';
import {FormsModule} from '@angular/forms';
import {TranslatePipe} from '@ngx-translate/core';
import {MatFormField, MatInput} from '@angular/material/input';
import {MatButton} from '@angular/material/button';
import {MatOption} from '@angular/material/core';
import { MatSelect } from '@angular/material/select';
import {NgIf} from '@angular/common';

/**
 * @summary
 * Component to create or edit an Inspection entity.
 *
 * This component renders a form for entering inspection details such as observations,
 * recommended actions, and crop status. It supports both creation and edit modes,
 * emitting events to the parent component on submit or cancel actions.
 *
 * @author
 * Paulo Quincho
 */

@Component({
  selector: 'app-inspection-create-and-edit',
  imports: [
    FormsModule,
    TranslatePipe,
    MatFormField,
    MatOption,
    MatInput,
    MatButton,
    MatSelect,
    NgIf,
  ],
  templateUrl: './inspection-create-and-edit.component.html',
  styleUrl: './inspection-create-and-edit.component.css'
})
export class InspectionCreateAndEditComponent {
  @Input() inspection: Inspection = new Inspection({});
  @Input() editMode: boolean = false;

  @Output() cancelRequested = new EventEmitter<void>();
  @Output() inspectionAddRequested = new EventEmitter<Inspection>();
  @Output() inspectionUpdateRequested = new EventEmitter<Inspection>();

  onSubmit() {
    if (this.editMode) {
      this.inspectionUpdateRequested.emit(this.inspection);
    } else {
      this.inspectionAddRequested.emit(this.inspection);
    }
  }

  onCancel() {
    this.cancelRequested.emit();
  }
}
