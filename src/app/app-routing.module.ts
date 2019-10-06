import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HelloComponent} from './hello/hello.component';
import {TwoComponent} from './two/two.component';
import {OneComponent} from './one/one.component';


const routes: Routes = [{path: 'one', component: OneComponent},
  {path: 'two', component: TwoComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
