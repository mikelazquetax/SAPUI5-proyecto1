sap.ui.define([
"sap/ui/core/mvc/Controller",
"sap/ui/model/json/JSONModel",
"../model/InvoicesFormatter",
"sap/ui/model/Filter",
"sap/ui/model/FilterOperator"

],

/*  
@param {typeof sap.ui.core.mvc.Controller} Controller
@param {typeof sap.ui.model.json.JSONModel} JSONModel
*/
    

function(Controller, JSONModel, InvoicesFormatter, Filter, FilterOperator){
return Controller.extend("com.mazquetax.sapui5.controller.InvoicesList", {

    formatter: InvoicesFormatter,

    onInit: function inicializadora(){
        let vistaModelo = new JSONModel({
            eur: "EUR",
            usd: "USD"
        })

        this.getView().setModel(vistaModelo, "divisas") /* Divisas es el nombre del modelo */
    },

    buscarF: function buscadorFacturas(e){
        let arrayFilter = []
        let squery = e.getParameter("query")
        
        if(squery){
            arrayFilter.push(new Filter("ProductName", FilterOperator.Contains, squery))
        }

        let listadoFacturas = this.byId("listado")
        let binding = listadoFacturas.getBinding("items")
        binding.filter(arrayFilter)
    }

})

})