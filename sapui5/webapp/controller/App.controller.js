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

function(Controller, MessageToast){
  "use strict"
  return Controller.extend("com.mazquetax.sapui5.controller.App", {


    onInit: function inicializadora(){
      
    },
    abreDialogoHeader: function dialogoCabecera(){
        this.getOwnerComponent().openHellodialog()
    }

  });
})