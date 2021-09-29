import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'page1',
        loadChildren: () => import('../pages/page1/page1.module').then(m => m.Page1PageModule)
      },
      {
        path: 'catalog',
        loadChildren: () => import('../pages/catalog/catalog.module').then(m => m.CatalogPageModule)
      },
      {
        path: 'home',
        loadChildren: () => import('../pages/home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'page4',
        loadChildren: () => import('../pages/page4/page4.module').then(m => m.Page4PageModule)
      },      
      {
        path: 'page5',
        loadChildren: () => import('../pages/page5/page5.module').then(m => m.Page5PageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/page1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
