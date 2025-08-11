sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], function(Controller, JSONModel){
    "use strict";

    return Controller.extend("yproduct.controller.BaseController",{
        navTo: function(sName, oParameters, bReplace){
            this.getOwnerComponent().getRouter().navTo(sName, oParameters, bReplace);
        },
        getResourceBundle: function(){
            return this.getOwnerComponent().getModel("i18n").getResourceBundle();
        },
        resetModelChanges: function(){
            var oModel = this.getView().getModel();
            if (oModel.hasPendingChanges()){
                oModel.resetChanges();
            }
        },
        initFlagSetModel: function(bFlag){
            var oFlagSet = new JSONModel({
                isEdit: bFlag
            });
            this.getView().setModel(oFlagSet,"flagSet");
        }

    });
});