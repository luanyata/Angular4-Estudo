"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const core_1 = require("@angular/core");
const common_1 = require("@angular/common");
const contato_detalhe_component_1 = require("./detalhes/contato-detalhe.component");
const contatos_lista_component_1 = require("./lista/contatos-lista.component");
const contato_routing_module_1 = require("./contato-routing.module");
const contato_service_1 = require("./contato.service");
let ContatosModule = class ContatosModule {
};
ContatosModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            contato_routing_module_1.ContatoRoutingModule
        ],
        // Usado para disponivilizar para os componentes deste mesmo modulo "Protect"
        declarations: [
            contatos_lista_component_1.ContatosListaComponent,
            contato_detalhe_component_1.ContatoDetalheComponent
        ],
        // Usando para export para outros modulos externos (Public)
        exports: [contatos_lista_component_1.ContatosListaComponent],
        providers: [
            contato_service_1.ContatoService
        ]
    })
], ContatosModule);
exports.ContatosModule = ContatosModule;
//# sourceMappingURL=contato.module.js.map