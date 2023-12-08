import { Routes } from '@angular/router';
import { MyOrdersComponent } from './pages/my-orders/my-orders.component';
import { AddEditOrdersComponent } from './pages/add-edit-orders/add-edit-orders.component';

export const routes: Routes = [
    {path: 'myOrders', component: MyOrdersComponent},
    {path: 'addEditOrders', component: AddEditOrdersComponent},
];
