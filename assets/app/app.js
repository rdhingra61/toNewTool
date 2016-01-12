var app = angular.module('mainModule', ['ngAnimate','ngSanitize']);
app.controller("jsonController",['$scope','$compile','$http',function($scope,$compile,$http){
    var appendCount = 0;
    $scope.appendhtml = function($entitty)
    {
        $scope.queryElement = "queryElement";
        
        switch($entitty)
        {
            case 'etl' : 
                var myEl = angular.element( document.querySelector( '#etlAppendHtml' ) );
                myEl.append('<div id="box1" class="panel panel-primary etlUtility mainEtlentity"><div class="panel-heading"><label class="left">Name</label><input class="form-control" type="text"><!--button class="btn btn-danger right" type="button">Remove</button--><div class="clear"></div></div><div class="panel-body chat-widget-main" contenteditable="true" data-text="Enter text here"></div></div>');
                break;
            case 'etlQuery' : 
                appendCount++;
                var myEl1 = angular.element( document.querySelector( '#etlAppendHtml' ) );
                myEl1.append($compile('<div id="'+appendCount+'" class="panel panel-primary mainEtlQuery queryElement" attribute='+appendCount+'><div class="panel-heading"><label class="left">Name</label><input class="form-control" type="text"><button class="btn btn-default right" ng-click="appendhtml(queryElement)" type="button">Add Property</button><div class="clear"></div></div><div class="panel-body chat-widget-main" contenteditable="true" data-text="Enter text here"></div></div>')($scope));
            break;
            case 'model' : 
                var myEl2 = angular.element( document.querySelector( '#modelAppendHtml' ) );
                myEl2.append('<div id="box1" class="panel panel-primary mainModel"><div class="panel-heading"><label class="left">Name</label><input class="form-control" type="text"><!--button class="btn btn-danger right" type="button">Remove</button--><div class="clear"></div></div><div class="panel-body chat-widget-main" contenteditable="true" data-text="Enter text here"></div></div>');
                break;
            case 'graph' : 
                var myEl3 = angular.element( document.querySelector( '#graphAppendHtml' ) );
                myEl3.append('<div id="box1" class="panel panel-primary maingraph"><div class="panel-heading"><label class="left">Name</label><input class="form-control" type="text"><!--button class="btn btn-danger right" type="button">Remove</button--><div class="clear"></div></div><div class="panel-body chat-widget-main" contenteditable="true" data-text="Enter text here"></div></div>');
                break;
            case 'config' : 
                var myEl4 = angular.element( document.querySelector( '#configAppendHtml' ) );
                myEl4.append('<div id="box1" class="panel panel-primary mainconfig"><div class="panel-heading"><label class="left">Name</label><input class="form-control" type="text"><!--button class="btn btn-danger right" type="button">Remove</button--><div class="clear"></div></div><div class="panel-body chat-widget-main" contenteditable="true" data-text="Enter text here"></div></div>');
                break;
            case 'queryElement' : 
                var myEl = angular.element( document.querySelector( '#etlAppendHtml' ) );
                myEl.append('<div id="box1" class="panel panel-primary queryElement" attribute = '+appendCount+'><div class="panel-heading"><label class="left">Name</label><input class="form-control" type="text"><!--button class="btn btn-danger right" type="button">Remove</button--><div class="clear"></div></div><div class="panel-body chat-widget-main" contenteditable="true" data-text="Enter text here"></div></div>');
                break;    
        }
    }
    
    $scope.createJsonFormatter = function()
    {
        var parentObj   = {};
        var etlObj      = {};
        var configObj   = {};
        var graphObj    = {};
        var modelObj    = {};
        var etjArray = [];
        var keyValuePairEtl;
        $('#etlAppendHtml .etlUtility').each(function(){
            var keyetl = $(this).find('input').val();
            var valueetl = $(this).find(".panel-body").text();
            if($(this).hasClass('mainEtlentity')){
                parentObj[keyetl] = valueetl;
            }
        });
        $('#etlAppendHtml .mainEtlQuery').each(function(){
            var idAttr = $(this).attr('id');
            var etlObj      = {};
            $("div[attribute='" + idAttr + "']").each(function(){
                    var keyQueryetl = $(this).find('input').val();
                    var valueQueryetl = $(this).find(".panel-body").text();
                    etlObj[keyQueryetl] = valueQueryetl;
            });
            etjArray.push(etlObj);
        });
        parentObj.queries = etjArray;
        console.log(parentObj);
        $scope.jsonFormat = JSON.stringify(parentObj, null,"       "); // Indented 4 spaces
        console.log($scope.jsonFormat);
        $("#jsonPreview").modal('show');
    }
    
}])