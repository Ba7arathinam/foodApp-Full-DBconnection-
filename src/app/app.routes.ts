import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { SiginComponent } from './sigin/sigin.component';
import { PaymentComponent } from './payment/payment.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { RouterModule } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'home', component: HomeComponent,   title: 'ORDERZIT | Home'  },
    { path: 'products', component: ProductComponent,   title: 'ORDERZIT | Products'},
    { path: 'cart', component: CartComponent,   title: 'ORDERZIT | Cart'  },
    { path: 'contact', component: ContactComponent,   title: 'ORDERZIT | Contact'  },
    { path: 'login', component: LoginComponent,   title: 'ORDERZIT | Login'  },
    { path: 'signup', component: SiginComponent,   title: 'ORDERZIT | Signup'  },
    {path:'payment',component:PaymentComponent,title:'ORDERZIT | Payment'},
    {path:'confirmation',component:ConfirmationComponent,title:'ORDERZIT | confirmation'},
    {path:'404NotFound',component:NotFoundPageComponent,title:'404 Not Found'},
    { path: '**', redirectTo: '404NotFound' },

];
