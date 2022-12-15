import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pagess/about/about.component';
import { ContactComponent } from './pagess/contact/contact.component';
import { HomeComponent } from './pagess/home/home.component';
import { MenuComponent } from './pagess/menu/menu.component';
import { MenupageComponent } from './pagess/menupage/menupage.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'menu',component:MenuComponent},
  {path:'menu/:id',component:MenupageComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
