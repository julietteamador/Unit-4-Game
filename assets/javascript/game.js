var randomResult;
var loses = 0;
var win = 0;
var add = 0;

var reset = function () {

    $(".crystals").empty();


    random_result = Math.floor(Math.random() * 69) + 30;

    $("#result").html("Random-result: " + random_result);

    for (var i = 0; i < 4; i++) {

        var random = Math.floor(Math.random() * 11) * 1;
        console.log(random);
        var crystals = $("<div>");
        crystals.attr({
            "class": 'crystals',
            "data": random
        }); 
        
        $(".crystal").append(crystals);

    }
    $("#add").html("Total Score:" + add);
}

reset(); 

$(document).on('click',".crystals", function () {

    var num = parseInt($(this).attr('data'));

    add += num;

    $("#add").html("Total Score: " + add);

    console.log(add);

    if (add > random_result) {
       
        loses++;
        
        $("#loses").html("You Lost: ",loses);
        
        add = 0;
       
        reset();
    }
    else if (add === random_result) {
        win++;
        
        $("#win").html("WINNER: ", win);


        add = 0;

        reset();
    }


    console.log(add);

})


