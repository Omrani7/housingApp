import { Routes } from '@angular/router';
import { HousingLocationComponent } from './housing-location/housing-location.component';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
{
  path: 'details/:id' , component: DetailsComponent

},
{path : '', component: HomeComponent,title: 'HOME PAGE MF'
},
{
  path : 'housing', component: HousingLocationComponent
}

];
