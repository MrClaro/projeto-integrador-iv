import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { Directive } from "./directive/directive";

const routes: Routes = [
	{
		path: "directive",
		component: Directive,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class StructureRoutingModule {}
