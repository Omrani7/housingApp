import { Component,inject,OnInit  } from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { Housinglocation } from '../housinglocation';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HousingServiceService } from '../housing-service.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HousingLocationComponent,CommonModule,RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {


housingLocationList : Housinglocation[] = [];
housingService : HousingServiceService = inject(HousingServiceService);
filteredLocationList: Housinglocation[] = [];
ngOnInit(): void {
  this.housingService.getAllHousingLocations().then((locations: Housinglocation[]) => {
    this.housingLocationList = locations;
    this.filteredLocationList = locations;
    console.log('Initial Load:', this.filteredLocationList);
  });
}

filterResult(city: string): void {
  console.log('Filter Input:', city);  // Log the city input to ensure it's captured

  if (city) {
    this.filteredLocationList = this.housingLocationList.filter(location =>
      location.city.toLowerCase().includes(city.toLowerCase())
    );
  } else {
    this.filteredLocationList = this.housingLocationList;
  }

  console.log('Filtered List:', this.filteredLocationList);  // Log the filtered list
}
}
