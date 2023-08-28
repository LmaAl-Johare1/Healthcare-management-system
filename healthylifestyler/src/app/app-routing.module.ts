import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { AllergyComponent } from './allergy/allergy.component';
import { BackgComponent } from './backg/backg.component';
import { AdvicesComponent } from './advices/advices.component';
//  import { DiseasComponent} from './diseas/diseas.component'; 
const routes: Route[] = [
  {path :"",component:BackgComponent},
  {path:"allallergy",component:AllergyComponent},
  {path:"advice",component:AdvicesComponent},
  // {path:"Diseases",component:DiseasComponent},
];
 

@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
