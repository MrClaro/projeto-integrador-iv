import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { StructureRoutingModule } from "./structure-routing-module";
import { Directive } from "./directive/directive";

@NgModule({
	declarations: [Directive],
	imports: [CommonModule, StructureRoutingModule],
	exports: [Directive],
})
export class StructureModule {}
