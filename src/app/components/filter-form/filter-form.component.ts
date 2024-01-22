import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PseudoSocketService } from 'src/app/services/pseudo-socket/pseudo-socket.service';

@Component({
  selector: 'app-filter-form',
  templateUrl: './filter-form.component.html',
  styleUrls: ['./filter-form.component.scss'],
})
export class FilterFormComponent implements OnInit {
  public additionalArrayIds: string[] = [];

  public form: FormGroup = new FormGroup({
    timer: new FormControl(''),
    arraySize: new FormControl(null),
    additionalArrayIds: new FormControl(null),
  });

  constructor(private readonly pseudoSocketService: PseudoSocketService) {}

  public ngOnInit(): void {
    this.form.valueChanges.subscribe((data) => {
      if (data.additionalArrayIds) {
        this.additionalArrayIds = data.additionalArrayIds.split(', ');
        this.pseudoSocketService.setAdditionalArrayIds(this.additionalArrayIds);
      }
    });

    this.form.valueChanges.subscribe((formData) => {
      this.pseudoSocketService.setFormData(formData);
    });
  }
}
