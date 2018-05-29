import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

//Import Components
import { HotelsComponent } from './component/hotels/hotels.component';

const appRoutes: Routes = [
    { path: 'dashboard', component: HotelsComponent },
    { path: '**', component: HotelsComponent }
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);