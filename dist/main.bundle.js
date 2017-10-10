webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <app-illidan-calc></app-illidan-calc>\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__illidan_calc_illidan_calc_component__ = __webpack_require__("../../../../../src/app/illidan-calc/illidan-calc.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_4__illidan_calc_illidan_calc_component__["a" /* IllidanCalcComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/illidan-calc/illidan-calc.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".red {\r\n    color: red;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/illidan-calc/illidan-calc.component.html":
/***/ (function(module, exports) {

module.exports = "<form #calcForm=\"ngForm\">\n  <h1>Attacks</h1>\n  <h2>{{attackString}}</h2>\n  <h1>Damage</h1>\n  <h2>{{damageString}}</h2>\n  \n  <h3>Stats</h3>\n  <div>\n    <label>STR</label>\n    <input type=\"text\" name=\"str\" id=\"str\" #str=\"ngModel\" [(ngModel)]=\"model.str\">\n  </div>\n  <div>\n    <label>DEX</label>\n    <input type=\"text\" name=\"dex\" id=\"dex\" #dex=\"ngModel\" [(ngModel)]=\"model.dex\">\n  </div>\n  <div>\n    <label>CON</label>\n    <input type=\"text\" name=\"con\" id=\"con\" #con=\"ngModel\" [(ngModel)]=\"model.con\">\n  </div>\n  <div>\n    <label>WIS</label>\n    <input type=\"text\" name=\"wis\" id=\"wis\" #wis=\"ngModel\" [(ngModel)]=\"model.wis\">\n  </div>\n  <div>\n    <label>INT</label>\n    <input type=\"text\" name=\"int\" id=\"int\" #int=\"ngModel\" [(ngModel)]=\"model.int\">\n  </div>\n  <div>\n    <label>CHA</label>\n    <input type=\"text\" name=\"cha\" id=\"cha\" #cha=\"ngModel\" [(ngModel)]=\"model.cha\">\n  </div>\n  <div>\n    <label>BAB</label>\n    <input type=\"text\" name=\"BAB\" id=\"BAB\" #BAB=\"ngModel\" [(ngModel)]=\"model.BAB\">\n  </div>\n\n\n  <h3>Toggled Mods</h3>\n  <div>\n    <button [ngClass]=\"{'red': model.powerAttack}\" (click)=\"toggle('powerAttack')\">Power Attack</button>\n  </div>\n  <div>\n    <button [ngClass]=\"{'red': model.spellCombat}\" (click)=\"toggle('spellCombat')\">Spell Combat</button>\n  </div>\n  <div>\n    <button [ngClass]=\"{'red': model.twoWeaponFighting}\" (click)=\"toggle('twoWeaponFighting')\">Two Weapon Fighting</button>\n  </div>\n  <div>\n    <button [ngClass]=\"{'red': model.fightingDefensively}\" (click)=\"toggle('fightingDefensively')\">Fighting Defensively</button>\n  </div>\n  <div>\n    <button [ngClass]=\"{'red': model.arcaneAccuracy}\" (click)=\"toggle('arcaneAccuracy')\">Arcane Accuracy</button>\n  </div>\n  <div>\n    <button [ngClass]=\"{'red': model.arcanePoolWeapon}\" (click)=\"toggle('arcanePoolWeapon')\">Arcane Pool Weapon Charge</button>\n  </div>\n  <div>\n    <button [ngClass]=\"{'red': model.greaterMagicWeapon}\" (click)=\"toggle('greaterMagicWeapon')\">Greater Magic Weapon</button>\n  </div>\n  <div>\n    <button>Int To Damage</button>\n  </div>\n  <div>\n    <button [ngClass]=\"{'red': model.gargoyleMode}\" (click)=\"toggle('gargoyleMode')\">Gargoyle Mode</button>\n  </div>\n  <div>\n    <button [ngClass]=\"{'red': model.bladedDash}\" (click)=\"toggle('bladedDash')\">Bladed Dash</button>\n  </div>\n  <div>\n    <button [ngClass]=\"{'red': model.haste}\" (click)=\"toggle('haste')\">Haste</button>\n  </div>\n</form>"

/***/ }),

/***/ "../../../../../src/app/illidan-calc/illidan-calc.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IllidanCalcComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IllidanCalcComponent = (function () {
    function IllidanCalcComponent() {
        var _this = this;
        this.calcAttackString = function () {
            var attackString = "", base, modifier = 0, primaryAttacks = 1, secondaryAttacks = 1, offhandPenalty = 0;
            if (_this.model.powerAttack)
                modifier = modifier - 3;
            if (_this.model.spellCombat)
                modifier = modifier - 2;
            if (_this.model.twoWeaponFighting) {
                modifier = modifier - 2;
                primaryAttacks = primaryAttacks + 1;
                secondaryAttacks = secondaryAttacks + 1;
            }
            if (_this.model.fightingDefensively)
                modifier = modifier - 4;
            if (_this.model.arcaneAccuracy)
                modifier = modifier + (_this.model.int - 10) / 2;
            if (_this.model.arcanePoolWeapon) {
                modifier = modifier + 2;
                offhandPenalty = offhandPenalty - 2;
            }
            if (_this.model.greaterMagicWeapon)
                modifier = modifier + 2;
            if (_this.model.gargoyleMode) {
                modifier = modifier - 1;
            }
            if (_this.model.bladedDash) {
                primaryAttacks = primaryAttacks + 1;
            }
            if (_this.model.haste) {
                modifier = modifier + 1;
                primaryAttacks = primaryAttacks + 1;
            }
            base = _this.model.BAB + (_this.model.str - 10) / 2 + 1 + 1;
            console.log(primaryAttacks);
            for (var i = 0; i < primaryAttacks; i++) {
                if (_this.model.bladedDash && i === 0) {
                    attackString += (base + modifier + (_this.model.int - 10) / 2).toString() + "MH " + "/";
                }
                else if (_this.model.twoWeaponFighting && i + 1 === primaryAttacks) {
                    attackString += (base + modifier + offhandPenalty).toString() + "OH " + "/";
                }
                else {
                    attackString += (base + modifier).toString() + "MH " + "/";
                }
            }
            for (var g = 0; g < secondaryAttacks; g++) {
                if (_this.model.twoWeaponFighting && g + 1 === secondaryAttacks) {
                    attackString += (base + modifier + offhandPenalty - 5).toString() + "OH " + "/";
                }
                else {
                    attackString += (base + modifier - 5).toString() + "MH " + "/";
                }
            }
            _this.attackString = attackString;
        };
        this.calcDamageString = function () {
        };
        this.toggle = function (modelName) {
            console.log("clicked");
            _this.model[modelName] = !_this.model[modelName];
            if (modelName === "gargoyleMode" && _this.model.gargoyleMode) {
                _this.model.str = _this.model.str + 4;
            }
            else if (modelName === "gargoyleMode" && !_this.model.gargoyleMode) {
                _this.model.str = _this.model.str - 4;
            }
            _this.calcAttackString();
        };
    }
    IllidanCalcComponent.prototype.ngOnInit = function () {
        this.model = {
            str: 24,
            dex: 24,
            con: 14,
            wis: 14,
            int: 28,
            cha: 10,
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
        };
        this.calcAttackString();
        this.calcDamageString();
    };
    return IllidanCalcComponent;
}());
IllidanCalcComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-illidan-calc',
        template: __webpack_require__("../../../../../src/app/illidan-calc/illidan-calc.component.html"),
        styles: [__webpack_require__("../../../../../src/app/illidan-calc/illidan-calc.component.css")]
    }),
    __metadata("design:paramtypes", [])
], IllidanCalcComponent);

//# sourceMappingURL=illidan-calc.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map