// @ts-nocheck
sap.ui.define([
    "sap/ui/model/json/JSONModel"

], function(JSONModel){
    "use strict";
    return{
        createRecipient: function(){
            let dataOModel = {
                recipient:{
                    name: "World"
                }
            };
            let modelo = new JSONModel(dataOModel);
            return modelo
        }
    }
})