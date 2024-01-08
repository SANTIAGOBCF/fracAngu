import { Routes } from '@angular/router';
import { MyOrdersComponent } from './pages/my-orders/my-orders.component';
import { MyProductsComponent } from './pages/my-products/my-products.component';
import { ModifyProductComponent } from './components/modify-product/modify-product.component';
import { AddOrdersComponent } from './pages/add-orders/add-orders.component';
import { EditOrderComponent } from './pages/edit-order/edit-order.component';

export const routes: Routes = [
    {path: '', component: MyProductsComponent},
    {path: 'myProducts', component: MyProductsComponent},
    {path: 'myProducts/:id', component: ModifyProductComponent},
    {path: 'myOrders', component: MyOrdersComponent},
    {path: 'addOrders', component: AddOrdersComponent},
    {path: 'editOrder/:id', component: EditOrderComponent},
];
