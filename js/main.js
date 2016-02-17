/**
 * Created by wsdrees on 2/17/16.
 */
function test_byid() {

    $("second").toggleClassName("highlight");

}

function test_byclass()

{

    $$(".test").each(function(elmt) { elmt.toggleClassName("highlight") });

}

function test_bytag()

{

    $$("span").each(function(elmt) { elmt.toggleClassName("highlight") });

}

function test_byfirstresult()

{

    $$("span:first-child").each(function(elmt) { elmt.toggleClassName("highlight") });

}

function test_byfirstresult()

{

    $$("span:first-child").each(function(elmt) { elmt.toggleClassName("highlight") });

}

function test_byfunction()

{

    $$("span:not(#second)").each(function(spanobj) {

        spanobj.toggleClassName("highlight");

    });

}

document.observe('dom:loaded', function() {

    $("myclicker").observe("click", function() { alert('Clicked!'); });

});