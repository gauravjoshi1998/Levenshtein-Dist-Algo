import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { paths } from './app-path';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PathResolveService } from './path-resolve.service';
import { SampleComponent } from './sample/sample.component';


const routes: Routes = [
  {
    path: paths.home,
    component: HomeComponent,
  },
  {
    path: paths.contact,
    component: ContactComponent,
  },
  {
    path: paths.sample,
    component: SampleComponent,
  },
  {
    path: '404', 
    component: NotFoundComponent
  },
  {
    path: '**',
    resolve: {
      path: PathResolveService
    },
    component: NotFoundComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
