import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CountersRoutingModule } from "./counters-routing-module";
import { Button } from "./button/button";

@NgModule({
	declarations: [Button],
	imports: [CommonModule, CountersRoutingModule],
	exports: [Button],
})
export class CountersModule {}
