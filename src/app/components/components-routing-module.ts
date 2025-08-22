import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { Button } from "./counters/button/button";

const routes: Routes = [{ path: "button", component: Button }];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class ComponentsRoutingModule {}
