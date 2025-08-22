import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
	{
		path: "books",
		loadChildren: () =>
			import("./components/books/books-module").then((m) => m.BooksModule),
	},
	{
		path: "counters",
		loadChildren: () =>
			import("./components/counters/counters-module").then(
				(m) => m.CountersModule,
			),
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
