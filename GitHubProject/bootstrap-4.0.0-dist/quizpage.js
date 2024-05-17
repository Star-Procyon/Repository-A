function checkAnswers() {
    var answer1 = document.querySelectorAll('input[name="answer1"]:checked');
    var answer2 = document.querySelectorAll('input[name="answer2"]:checked');
    var answer3 = document.querySelectorAll('input[name="answer3"]:checked');
    var answer4 = document.querySelectorAll('input[name="answer4"]:checked');
    var answer5 = document.querySelectorAll('input[name="answer5"]:checked');
    var answer6 = document.querySelectorAll('input[name="answer6"]:checked');
    var answer7 = document.querySelectorAll('input[name="answer7"]:checked');
    var answer8 = document.querySelectorAll('input[name="answer8"]:checked');
    var answer9 = document.querySelectorAll('input[name="answer9"]:checked');
    var answer10 = document.querySelectorAll('input[name="answer10"]:checked');

    var resultsHtml = '';
    var score = 0;

    if (answer1.length > 0 && answer1[0].value === 'Jamba') {
        resultsHtml += '<p class="correct">Válaszod helyes az első kérdésre!</p>';
        score++;
    } else {
        resultsHtml += '<p class="incorrect">A válaszod helytelen az első kérdésre. Gergő beceneve Jamba!</p>';
    }

    if (answer2.length > 0 && answer2[0].value === '2008.09.09.') {
        resultsHtml += '<p class="correct">Válaszod a második kérdésre helyes!</p>';
        score++;
    } else {
        resultsHtml += '<p class="incorrect">A válaszod a második kérdésre helytelen. A helyes válasz 2008.09.09.</p>';
    }

    if (answer3.length > 0 && answer3[0].value === 'Győri SZC Jedlik Ányos Gépipari és Informatikai Technikum és Kollégium') {
        resultsHtml += '<p class="correct">Válaszod helyes a harmadik kérdésre!!</p>';
        score++;
    } else {
        resultsHtml += '<p class="incorrect">A válaszod a harmadik kérdésre helytelen. A helyes válasz Győri SZC Jedlik Ányos Gépipari és Informatikai Technikum és Kollégium.</p>';
    }

    if (answer4.length > 0 && answer4[0].value === '100 kg') {
        resultsHtml += '<p class="correct">Válaszod a negyedik kérdésre helyes!</p>';
        score++;
    } else {
        resultsHtml += '<p class="incorrect">A válaszod helytelen a negyedik kérdésre. Gergő legnagyobb fekvenyomó rekordja 100 kg.</p>';
    }

    if (answer5.length > 0 && answer5[0].value === 'Fortnite') {
        resultsHtml += '<p class="correct">Válaszod az ötödik kérdésre helyes!</p>';
        score++;
    } else {
        resultsHtml += '<p class="incorrect">A válaszod az ötödik kérdésre helytelen. Jamba kedvenc játéka a Fortnite.</p>';
    }

    if (answer6.length > 0 && answer6[0].value === 'Quad') {
        resultsHtml += '<p class="correct">Válaszod a hatodik kérdésre helyes!</p>';
        score++;
    } else {
        resultsHtml += '<p class="incorrect">A válaszod a hatodik kérdésre helytelen. Gergő egy quaddal ment át a sivatagon.</p>';
    }

    if (answer7.length > 0 && answer7[0].value === '2') {
        resultsHtml += '<p class="correct">Válaszod a hetedik kérdésre helyes!</p>';
        score++;
    } else {
        resultsHtml += '<p class="incorrect">A válaszod a hetedik kérdésre helytelen. A helyes válasz 2 év.</p>';
    }

    if (answer8.length > 0 && answer8[0].value === '5000') {
        resultsHtml += '<p class="correct">Válaszod a nyolcadik kérdésre helyes!</p>';
        score++;
    } else {
        resultsHtml += '<p class="incorrect">A válaszod helytelen a nyolcadik kérdésre. Jamba 5000 órát játszott a Fortnite-al.</p>';
    }

    if (answer9.length > 0 && answer9[0].value === 'Cutler') {
        resultsHtml += '<p class="correct">Válaszod helyes a kilencedik kérdésre!</p>';
        score++;
    } else {
        resultsHtml += '<p class="incorrect">A válaszod a kilencedik kérdésre helytelen. A helyes válasz Cutler edzőterem.</p>';
    }

    if (answer10.length > 0 && answer10[0].value === 'Szanyi Tamás') {
        resultsHtml += '<p class="correct">Válaszod a tizedik kérdésre helyes!</p>';
        score++;
    } else {
        resultsHtml += '<p class="incorrect">A válaszod a tizedik kérdésre helytelen. A bemutatást Szanyi Tamás írta meg.</p>';
    }

    resultsHtml += '<p>Az eredményed ' + score + ' a 10 db kérdésből.</p>';
    document.getElementById('results').innerHTML = resultsHtml;
}