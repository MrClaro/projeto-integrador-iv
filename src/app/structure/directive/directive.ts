import { Component } from "@angular/core";

@Component({
	selector: "app-directive",
	standalone: false,
	templateUrl: "./directive.html",
	styleUrl: "./directive.css",
})
export class Directive {
	isVisible = true;
	fontSize = 14;
	alunos = [
		{
			id: 1,
			nome: "João Silva",
			ativo: true,
		},
		{
			id: 2,
			nome: "Maria Santos",
			ativo: false,
		},
		{
			id: 3,
			nome: "Pedro Oliveira",
			ativo: true,
		},
		{
			id: 4,
			nome: "Ana Costa",
			ativo: false,
		},
		{
			id: 5,
			nome: "Carlos Ferreira",
			ativo: true,
		},
	];
	toggleVisibility() {
		this.isVisible = !this.isVisible;
	}

	increaseFontSize() {
		this.fontSize += 2;
	}

	decreaseFontSize() {
		this.fontSize -= 2;
	}
}
