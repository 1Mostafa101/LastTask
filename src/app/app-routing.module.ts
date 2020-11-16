import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { GlaryComponent } from './glary/glary.component';





const routes: Routes =

 [

  {path:'home', component:HomeComponent},
  {path:'contact', component:ContactComponent},
  {path:'about' , component:AboutComponent},
  {path:'glary' , component:GlaryComponent}

 ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
