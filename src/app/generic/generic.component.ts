import {Component} from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";

@Component({
  selector: 'app-generic',
  templateUrl: './generic.component.html',
  styleUrls: ['./generic.component.css']
})
export class GenericComponent {
  //Crea un vettore di tipo Emoji e lo inizializza
  genVect: Emoji[] = [{name: "", emoji: ""}];

  //Riceve l'oggetto ActivatedRoute come dependency injection
  constructor(private route: ActivatedRoute) {
    //Gestisce i cambi di route con l'observable paramMap
    this.route.paramMap.subscribe(this.getRouterParam);
  }

  //Ogni volta che viene invocata la route tracks/:id, l'observable paramMap richiama questo metodo
  getRouterParam = (params: ParamMap) => {
    let uri_param = params.get('id'); //Ottengo l'id dalla ParamMap
    console.log(uri_param); //Stampo su console
    //this.service.getTrack()

    if (uri_param == 'fruoots') this.genVect = FRUITS;
    if (uri_param == 'animals') this.genVect = ANIMALS;

  }
}

export interface Emoji {
  name: string;
  emoji: string;
}

export const FRUITS: Emoji[] = [
  {name: 'l3ineb', emoji: '🍇'},
  {name: 'btikha', emoji: '🍈'},
  {name: 'della7a', emoji: '🍉'},
  {name: 'limouna', emoji: '🍊'},
  {name: '7ameDa', emoji: '🍋'},
  {name: 'banana', emoji: '🍌'},
  {name: 'ananaSa', emoji: '🍍'},
  {name: 'teffa7a 7emra', emoji: '🍎'},
  {name: 'teffa7a kheDra', emoji: '🍏'},
  {name: 'nGaSa', emoji: '🍐'},
  {name: 'khokha', emoji: '🍑'},
  {name: '7eb lmlouk', emoji: '🍒'},
];

export const ANIMALS: Emoji[] = [
  {name: '9erd', emoji: '🐒'},
  {name: 'kelb', emoji: '🐶'},
  {name: 'dib', emoji: '🐺'},
  {name: 'mesh', emoji: '🐱'},
  {name: 'nmer', emoji: '🐅'},
  {name: 'fa8d', emoji: '🐆'},
  {name: '3awd', emoji: '🐎'},
  {name: 'tour', emoji: '🐂'},
  {name: 'begra', emoji: '🐄'},
  {name: '7ellouf', emoji: '🐷'},
  {name: 'khenzir', emoji: '🐗'},
  {name: '7awli', emoji: '🐏'},
  {name: 'khrof', emoji: '🐑'},
  {name: 'me3za', emoji: '🐐'},
  {name: 'jmel', emoji: '🐪'},
  {name: 'fil', emoji: '🐘'},
  {name: 'far', emoji: '🐭'},
  {name: 'Tobba', emoji: '🐀'},
  {name: '9nia', emoji: '🐰'},
  {name: 'doub', emoji: '🐻'},
  {name: 'kowala', emoji: '🐨'},
  {name: 'panda', emoji: '🐼'},
  {name: 'djaja', emoji: '🐓'},
  {name: 'fellous', emoji: '🐥'},
  {name: 'bTri9', emoji: '🐧'},
  {name: 'jrana', emoji: '🐸'},
  {name: 'timsa7', emoji: '🐊'},
  {name: 'fekroun', emoji: '🐢'},
  {name: '7ensh', emoji: '🐍'},
  {name: 'tinnin', emoji: '🐉'},
  {name: 'labalen', emoji: '🐳'},
  {name: 'dlfine', emoji: '🐬'},
  {name: '7outa', emoji: '🐟'},
  {name: 'RoTala', emoji: '🐙'},
  {name: 'kokiaj', emoji: '🐚'},
  {name: 'boubbousha', emoji: '🐌'},
  {name: 'douda', emoji: '🐛'},
  {name: 'nemla', emoji: '🐜'},
  {name: 'ne7la', emoji: '🐝'},
  {name: 'koksinil', emoji: '🐞'}
];
