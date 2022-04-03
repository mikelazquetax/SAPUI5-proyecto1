// @ts-nocheck

sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "com/mazquetax/sapui5/model/Models",
    "sap/ui/model/resource/ResourceModel"
], 
/* 
@param {typeof sap.ui.core.mvc.Controller} Controller
@param {typeof sap.m.MessageToast} MessageToast
@param {typeof sap.ui.model.resource.ResourceModel} ResourceModel

*/

function(Controller, MessageToast, Models, ResourceModel){
  "use strict"
  return Controller.extend("com.mazquetax.sapui5.controller.App", {


    onInit: function inicializadora(){
      
    },

    muestraUnHolita: function saludo(){
        alert('Hola Holita')
      

        var oBundle = this.getView().getModel("i18n").getResourceBundle();
        var recipiente = this.getView().getModel().getProperty("/recipient/name")
        var mensajeAMostrar =  oBundle.getText("helloMsg", [recipiente])
        MessageToast.show(mensajeAMostrar)
    },  




  });
})