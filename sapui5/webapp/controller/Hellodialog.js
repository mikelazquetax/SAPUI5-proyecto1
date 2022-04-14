sap.ui.define([
    "sap/ui/base/ManagedObject",
    "sap/ui/core/Fragment"
],

    /*     @param {typeof sap.ui.base.ManagedObject} ManagedObject
         @param {typeof sap.ui.core.Fragment} Fragment
     */

    function (ManagedObject, Fragment) {
        "use strict"

        return ManagedObject.extend("com.mazquetax.sapui5.controller.Hellodialog", {

            constructor: function (vista) {
                this._vista = vista;
            },
            exit: function () {
                delete this._vista
            },
            open: function () {

                let vista = this._vista

                if (!vista.byId("helloPanel")) {

                    let fragmentoControlador = {

                        cerrarDialogo: function cierreDialogo() {
                            vista.byId("helloPanel").close()
                        }
                    }

                    Fragment.load({
                        id: vista.getId(),
                        name: "com.mazquetax.sapui5.view.HelloDialog",
                        controller: fragmentoControlador
                    }).then(function (dialogo) {
                        vista.addDependent(dialogo);
                        dialogo.open()
                    });

                } else {
                    vista.byId("helloPanel").open()
                }
            }

        }

        )

    })