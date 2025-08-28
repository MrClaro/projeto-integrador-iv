import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
	{
		path: "counters",
		loadChildren: () =>
			import("./counters/counters-module").then((m) => m.CountersModule),
	},
	{
		path: "structure",
		loadChildren: () =>
			import("./structure/structure-module").then((m) => m.StructureModule),
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
