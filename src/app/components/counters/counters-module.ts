import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CountersRoutingModule } from "./counters-routing-module";
import { Button } from "./button/button";
import { Counter } from "./counter/counter";

@NgModule({
	declarations: [Button, Counter],
	imports: [CommonModule, CountersRoutingModule],
	exports: [Button, Counter],
})
export class CountersModule {}
