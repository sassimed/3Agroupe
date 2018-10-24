import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes , ParamMap , ActivatedRoute} from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GroupComponent } from './group/group.component';


const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'group/:id',
        component: GroupComponent
    }
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [{provide: APP_BASE_HREF, useValue : '/' }]
})

export class AppRoutingModule { }
