import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }					from '@angular/common';

import { Hero } from './hero';
import { HeroService } from './hero.service';

import 'rxjs/add/operator/switchMap';

@Component({
	selector: 'my-hero-detail',
	template: `
	<div *ngIf="hero">
		<h2>{{hero.name}} details!</h2>
		<div>
			<label>Id: </label> {{hero.id}}
		</div>
		<div>
			<label>Name: </label>
			<input [(ngModel)]="hero.name" placeholder="name">
		</div>
	</div>
	`
})

export class HeroDetailComponent implements OnInit {
	
	hero: Hero;

	constructor(
		private heroService: HeroService,
		private route: ActivatedRoute,
		private location: Location
	) {}

	ngOnInit(): void {
		this.route.params
			.switchMap((params: Params) => this.heroService.getHero(+params['id']))
			.subscribe(hero => this.hero = hero);
	}

}