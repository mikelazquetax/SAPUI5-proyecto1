sap.ui.define([
    "sap/ui/core/UIComponent",
    "com/mazquetax/sapui5/model/Models",
    "sap/ui/model/resource/ResourceModel",
    "./controller/Hellodialog"
], 
 /* 
 @param {typeof sap.ui.core.mvc.Controller} UIComponent
 */  
function(UIComponent, Models, ResourceModel, Hellodialog){
    return UIComponent.extend("com.mazquetax.sapui5.Component", {

        metadata: {
            manifest: "json"
/*             "rootView": {
                "viewName" : "com.mazquetax.sapui5.view.App",
                "type": "XML",
                "async": true,
                "id": "app"
            } */
        },

        init: function(){ //TIene que llamarse init obligatoriamente
            UIComponent.prototype.init.apply(this, arguments)

            //Establece modelo de datos
            this.setModel(Models.createRecipient());

            //Establece idiomas
            let i18nModelo = new ResourceModel({
                bundleName : "com.mazquetax.sapui5.i18n.i18n"
            })
            this.setModel(i18nModelo, "i18n");
            
            this._Hellodialog = new Hellodialog(this.getRootControl())
        },

        exit: function(){
            this._Hellodialog.destroy();
            delete this._Hellodialog
        },

        openHellodialog: function(){
            this._Hellodialog.open()
        }

  
 })
})