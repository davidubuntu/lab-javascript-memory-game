var cards = [{
        name: 'aquaman',
        img: 'aquaman.jpg'
    },
    {
        name: 'batman',
        img: 'batman.jpg'
    },
    {
        name: 'captain america',
        img: 'captain-america.jpg'
    },
    {
        name: 'fantastic four',
        img: 'fantastic-four.jpg'
    },
    {
        name: 'flash',
        img: 'flash.jpg'
    },
    {
        name: 'green arrow',
        img: 'green-arrow.jpg'
    },
    {
        name: 'green lantern',
        img: 'green-lantern.jpg'
    },
    {
        name: 'ironman',
        img: 'ironman.jpg'
    },
    {
        name: 'spiderman',
        img: 'spiderman.jpg'
    },
    {
        name: 'superman',
        img: 'superman.jpg'
    },
    {
        name: 'the avengers',
        img: 'the-avengers.jpg'
    },
    {
        name: 'thor',
        img: 'thor.jpg'
    },
    {
        name: 'aquaman',
        img: 'aquaman.jpg'
    },
    {
        name: 'batman',
        img: 'batman.jpg'
    },
    {
        name: 'captain america',
        img: 'captain-america.jpg'
    },
    {
        name: 'fantastic four',
        img: 'fantastic-four.jpg'
    },
    {
        name: 'flash',
        img: 'flash.jpg'
    },
    {
        name: 'green arrow',
        img: 'green-arrow.jpg'
    },
    {
        name: 'green lantern',
        img: 'green-lantern.jpg'
    },
    {
        name: 'ironman',
        img: 'ironman.jpg'
    },
    {
        name: 'spiderman',
        img: 'spiderman.jpg'
    },
    {
        name: 'superman',
        img: 'superman.jpg'
    },
    {
        name: 'the avengers',
        img: 'the-avengers.jpg'
    },
    {
        name: 'thor',
        img: 'thor.jpg'
    }
];

$(document).ready(function () {
    var memoryGame = new MemoryGame(cards);
    var html = '';
    memoryGame.cards.forEach(function (pic) {
        html += '<div class="card" data-card-name="' + pic.name + '">';
        html += '  <div class="back" name="' + pic.img + '"></div>';
        html += '  <div class="front" style="background: url(img/' + pic.img + ') no-repeat"></div>';
        html += '</div>';
    });

    // Add all the div's to the HTML
    $('#memory_board').html(html);

    // Bind the click event of each element to a function
    var twoClicked = 0;
    $('.back').click(function () {
        $(this).removeClass("back").addClass('front');
        $(this).next().removeClass("front").addClass('back');
        twoClicked++;

        if (twoClicked === 2) {
            $(".card div:first-child").each(function () {
                if ($(this).hasClass("front")) {
                    memoryGame.pickedCards.push($(this).attr("name"));
                }
            })
            var checkPair = memoryGame.checkIfPair(memoryGame.pickedCards[0], memoryGame.pickedCards[1]);
            
            $("#pairs_clicked").text(memoryGame.pairsClicked);
            $("#pairs_guessed").text(memoryGame.pairsGuessed);
            
            //  Reset card conditions
            memoryGame.pickedCards = [];
            twoClicked =0;
        }
      
        
    });


});