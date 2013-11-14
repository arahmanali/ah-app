/// <reference path="jquery-2.0.3.min.js" />
/// <reference path="bootstrap.min.js" />
/// <reference path="my-jquery.js" />

var unhiddenDiv;
$(document).ready(function () {

    //Menu Button Down
    $("#BtnUp").addClass('disabled');

    //selector ^= (starts with)
    $("div[id^='Scrn']").each(function () {
        if ($(this).css("display") == "block")
            unhiddenDiv = $(this);
    });

    $("#BtnDown").click(function () {
        $("#BtnUp").removeClass('disabled');

        var nextDiv = getNextElement();
        unhiddenDiv.slideUp("slow", function () {
            unhiddenDiv = nextDiv;
            nextDiv.slideDown("slow");
        });
    });

    function getNextElement(hiddenDiv) {
        if (unhiddenDiv.next("div[id^='Scrn']").length > 0) {
            return unhiddenDiv.next("div[id^='Scrn']:first");
        } else {
            return $("div[id^='Scrn']:first");
        }
    }

    //Button Up
    $("div[id^='Scrn']").each(function () {
        if ($(this).css("display") == "block")
            unhiddenDiv = $(this)
    });

    $("#BtnUp").click(function () {

        var prevDiv = getPrevElement();
        unhiddenDiv.slideUp("slow", function () {
            unhiddenDiv = prevDiv;
            prevDiv.slideDown("slow");
        })
    })

    function getPrevElement(hiddenDiv) {
        if (unhiddenDiv.prev("div[id^='Scrn']").length > 0) {
            return unhiddenDiv.prev("div[id^='Scrn']:last")
        }
        else {
            return $("div[id^='Scrn']:last")
        }
    }
});
//Home Button
$(document).ready(function () {
    $("#homeBtn").click(function () {
        $("#homeDiv").hide();
        $("#menuDiv").fadeIn("slow");
    });
});