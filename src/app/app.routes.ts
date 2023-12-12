import { Routes } from '@angular/router';
import { MyOrdersComponent } from './pages/my-orders/my-orders.component';
import { AddEditOrdersComponent } from './pages/add-edit-orders/add-edit-orders.component';
import { MyProductsComponent } from './pages/my-products/my-products.component';
import { ModifyProductComponent } from './components/modify-product/modify-product.component';

export const routes: Routes = [
    {path: '', component: MyProductsComponent},
    {path: 'myProducts', component: MyProductsComponent},
    {path: 'myProducts/:id', component: ModifyProductComponent},
    {path: 'myOrders', component: MyOrdersComponent},
    {path: 'addEditOrders', component: AddEditOrdersComponent},
];
