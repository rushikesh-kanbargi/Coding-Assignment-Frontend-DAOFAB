import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';

const routes: Routes = [
  { path: 'parent', component: ParentComponent },
  { path: 'parent-transactions', component: ParentComponent },
  { path: 'child/:parentId/:sender/:receiver/:totalAmount/:currentPage', component: ChildComponent },
  { path: '', redirectTo: '/parent', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
