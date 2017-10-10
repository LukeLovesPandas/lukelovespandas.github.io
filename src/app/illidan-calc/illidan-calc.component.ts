import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-illidan-calc',
  templateUrl: './illidan-calc.component.html',
  styleUrls: ['./illidan-calc.component.css']
})
export class IllidanCalcComponent implements OnInit {
 
  attackString
 
  damageString
  model

  constructor() { }

  ngOnInit() {
    this.model = {
      str: 24,
      dex: 24,
      con: 14,
      wis: 14,
      int: 28,
      cha:10,
      BAB: 10,
      powerAttack: false,
      spellCombat: false,
      twoWeaponFighting: true,
      fightingDefensively: false,
      arcaneAccuracy: false,
      arcanePoolWeapon: false,
      greaterMagicWeapon: true,
      intToDamage: false,
      gargoyleMode: false,
      bladedDash: false,
      haste: false
    }
    this.calcAttackString();
    this.calcDamageString();
  }

  calcAttackString = () => {
    let attackString = "", base, modifier = 0, primaryAttacks = 1, secondaryAttacks = 1, offhandPenalty = 0;
    if (this.model.powerAttack) 
      modifier = modifier -  3;
    if (this.model.spellCombat)
      modifier = modifier - 2;
    if (this.model.twoWeaponFighting) {
      modifier = modifier - 2;
      primaryAttacks = primaryAttacks + 1;
      secondaryAttacks = secondaryAttacks + 1;
    }
    if(this.model.fightingDefensively)
      modifier = modifier - 4;
    if(this.model.arcaneAccuracy)
      modifier = modifier + (this.model.int - 10)/2
    if(this.model.arcanePoolWeapon) {
      modifier = modifier + 2;
      offhandPenalty = offhandPenalty - 2;
    }
    if(this.model.greaterMagicWeapon)
      modifier = modifier + 2;
    if(this.model.gargoyleMode) {
      modifier = modifier - 1;
    }
    if(this.model.bladedDash) {
      primaryAttacks = primaryAttacks + 1;
    }
    if(this.model.haste) {
      modifier = modifier + 1;
      primaryAttacks = primaryAttacks + 1;
    }
    
    base = this.model.BAB + (this.model.str - 10)/2 + 1 + 1
    console.log(primaryAttacks)
    for(var i = 0; i < primaryAttacks; i++) {
      if (this.model.bladedDash && i === 0) {
        attackString += (base + modifier + (this.model.int - 10)/2).toString() + "MH " + "/";
      } else if (this.model.twoWeaponFighting && i + 1 === primaryAttacks) {
        attackString += (base + modifier + offhandPenalty).toString() + "OH " + "/";
      } else {
        attackString += (base + modifier).toString() + "MH " + "/";
      }
    }
    for(var g = 0; g < secondaryAttacks; g++) {
      if (this.model.twoWeaponFighting && g + 1 === secondaryAttacks) {
        attackString += (base + modifier + offhandPenalty - 5).toString() + "OH " + "/";
      } else {
        attackString += (base + modifier - 5).toString() + "MH " + "/";
      }
    }
    this.attackString = attackString
  }

  calcDamageString = () => {

  }

  toggle = (modelName) => {
    console.log("clicked");
    this.model[modelName] = !this.model[modelName];
    if (modelName === "gargoyleMode" && this.model.gargoyleMode) {
      this.model.str = this.model.str + 4;
    } else if (modelName === "gargoyleMode" && !this.model.gargoyleMode) {
      this.model.str = this.model.str - 4;
    }
    this.calcAttackString()
  }
}
