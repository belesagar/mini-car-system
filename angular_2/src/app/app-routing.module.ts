import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './manufacturer/add/add.component';
import { AddModelComponent } from './manufacturer/add-model/add-model.component';
import { MiddleComponent } from './template/middle/middle.component';
import { InventoryComponent } from './inventory/inventory.component';

const routes: Routes = [
  // {path:'', component:AddComponent},
  // {path:'manufacturer/add', component:AddComponent},
  {
    path: '',         
    component: MiddleComponent,
    children: [                        
        {
            path:'manufacturer/add',
            component: AddComponent
        },
        {
          path:'',
          component: AddComponent
        },
        {
          path:'add/model',
          component: AddModelComponent
        },
        {
          path:'inventory',
          component: InventoryComponent
        }
    ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
