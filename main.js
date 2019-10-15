
var count = 0;
$('button').click(function () {
    check(this);
}
);


function check(x) {
    if (count < 42) {
        if (count % 2 == 0) {

            if ($(x).attr('class') === undefined || $(x).attr('class') === null) {
                $('h2').text("Player 2's Move");
                console.log($(x).attr('class'));
                $(x).addClass("btn-danger");
                count++;
                console.log('in');
                console.log(count);
                console.log(x);
            }

            else {
                console.log('out');
                console.log("press another");
            }
        }
        else {

            if ($(x).attr('class') === undefined || $(x).attr('class') === null) {
                $('h2').text("Player 1's Move");
                console.log($(x).attr('class'));
                $(x).addClass("btn-primary");
                count++;
                console.log(count);
                console.log(x);
            }
            else {
                console.log("press another"
                );
            }
        }
    }
    else {
        $('h2').text("GAME OVER REFRESH BROWSER FOR NEW GAME");
    }
}