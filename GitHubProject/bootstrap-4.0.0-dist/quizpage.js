function checkAnswers() {
    var answer1 = document.getElementById('answer1').value;
    var answer2 = document.getElementById('answer2').value;
    var resultsHtml = '';
    var score = 0;
    if (answer1.toLowerCase() === 'Jamba') {
        resultsHtml += '<p class="correct">Válaszod helyes az első kérdésre!p>';
        score++;
    } else {
        resultsHtml += '<p class="incorrect">A válaszod helytelen az első kérdésre. Gergő beceneve Jamba!</p>';
    }

    if (answer2 === '2008.09.09.') {
        resultsHtml += '<p class="correct">Válaszod a második kérdésre helyes!</p>';
        score++;
    } else {
        resultsHtml += '<p class="incorrect">A válaszod a második kérdésre helytelen. A helyes válasz 2008.09.09.</p>';
    }

    if (answer2 === 'Győri SZC Jedlik Ányos Gépipari és Informatikai Technikum és Kollégium') {
        resultsHtml += '<p class="correct">Válaszod helyes a harmadik kérdésre!!</p>';
        score++;
    } else {
        resultsHtml += '<p class="incorrect">A válaszod a harmadik kérdésre helytelen. A helyes válasz Győri SZC Jedlik Ányos Gépipari és Informatikai Technikum és Kollégium.</p>';
    }

    if (answer2 === '100 kg') {
        resultsHtml += '<p class="correct">Válaszod a negyedik kérdésre helyes!</p>';
        score++;
    } else {
        resultsHtml += '<p class="incorrect">A válaszod helytelen a negyedik kérdésre. Gergő legnagyobb fekvenyomó rekordja 100 kg.</p>';
    }

    if (answer2 === 'Fortnite') {
        resultsHtml += '<p class="correct">Válaszod az ötödik kérdésre helyes!</p>';
        score++;
    } else {
        resultsHtml += '<p class="incorrect">A válaszod az ötödik kérdésre helytelen. Jamba kedvenc játéka a Fortnite.</p>';
    }

    if (answer2 === 'Quad') {
        resultsHtml += '<p class="correct">Válaszod a hatodik kérdésre helyes!</p>';
        score++;
    } else {
        resultsHtml += '<p class="incorrect">A válaszod a hatodik kérdésre helytelen. Gergő egy quaddal ment át a sivatagon.</p>';
    }

    if (answer2 === '2') {
        resultsHtml += '<p class="correct">Válaszod a hetedik kérdésre helyes!</p>';
        score++;
    } else {
        resultsHtml += '<p class="incorrect">A válaszod a hetedik kérdésre helytelen. A helyes válasz 2 év.</p>';
    }

    if (answer2 === '5000 óra') {
        resultsHtml += '<p class="correct">Válaszod a nyolcadik kérdésre helyes!</p>';
        score++;
    } else {
        resultsHtml += '<p class="incorrect">A válaszod helytelen a nyolcadik kérdésre. Jamba 5000 órát játszott a Fortnite-al.</p>';
    }

    if (answer2 === 'Cutler') {
        resultsHtml += '<p class="correct">Válaszod helyes a kilencedik kérdésre!</p>';
        score++;
    } else {
        resultsHtml += '<p class="incorrect">A válaszod a kilencedik kérdésre helytelen. A helyes válasz Cutler edzőterem.</p>';
    }

    if (answer2 === 'Szanyi Tamás') {
        resultsHtml += '<p class="correct">Válaszod a tizedik kérdésre helyes!</p>';
        score++;
    } else {
        resultsHtml += '<p class="incorrect">A válaszod a tizedik kérdésre helytelen. A bemutatást Szanyi Tamás írta meg.</p>';
    }

    resultsHtml += '<p>Az eredményed ' + score + ' a 10 db kérdésből.</p>';
    document.getElementById('results').innerHTML = resultsHtml;
}