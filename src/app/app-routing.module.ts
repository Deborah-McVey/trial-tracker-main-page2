import { DrawerComponent } from "./drawer/drawer.component";
import { CabinetComponent } from "./cabinet/cabinet.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const appRoutes: Routes = [
  { path: "", redirectTo: "/drawer", pathMatch: "full" },
  { path: "drawer", component: DrawerComponent,
  },
  { path: "cabinet", component: CabinetComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
