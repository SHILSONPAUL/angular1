import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactComponent } from './react/react.component';

const routes: Routes = [{path:'home',component:HomeComponent},
{path:'template',component:TemplateFormComponent},
{path:'react',component:ReactComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
