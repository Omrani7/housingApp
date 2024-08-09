import { Component ,inject} from '@angular/core';
import { RouterLink } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { HousingServiceService } from '../housing-service.service';
import { Housinglocation } from '../housinglocation';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [RouterLink,ReactiveFormsModule,FormsModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {

  route:ActivatedRoute=inject(ActivatedRoute);
  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl('')
  });

  housingService : HousingServiceService = inject(HousingServiceService);
  housingLocation : Housinglocation | undefined;

  constructor(){
     const housingLocatiionId = Number(this.route.snapshot.params['id']);
     this.housingService.getHousingLocationById(housingLocatiionId).then((location: Housinglocation|undefined) => {this.housingLocation=location})

    }
    submitApplication() {
      this.housingService.submitApplication(
        this.applyForm.value.firstName ?? '',
        this.applyForm.value.lastName ??'',
        this.applyForm.value.email ?? ''
      )
      }

}
