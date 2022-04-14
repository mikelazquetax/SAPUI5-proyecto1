// @ts-nocheck

sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/core/Fragment"
],
    /* 
    @param {typeof sap.ui.core.mvc.Controller} Controller
    @param {typeof sap.m.MessageToast} MessageToast
    @param {typeof sap.ui.model.resource.ResourceModel} ResourceModel
    @param {typeof sap.ui.core.Fragment} Fragment
    
    */

    function (Controller, MessageToast, Fragment) {
        "use strict"
        return Controller.extend("com.mazquetax.sapui5.controller.HelloPanel", {

            onInit: function inicializadora() {

            },

            muestraUnHolita: function saludo() {

                var oBundle = this.getView().getModel("i18n").getResourceBundle();
                var recipiente = this.getView().getModel().getProperty("/recipient/name")
                var mensajeAMostrar = oBundle.getText("helloMsg", [recipiente])
                MessageToast.show(mensajeAMostrar)
            },


            abreDialogo: function dialogo() {
                this.getOwnerComponent().openHellodialog()
        },

        });
    })