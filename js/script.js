const magicUrl = '';

async function getMagic() {
    try {
        const response = await fetch('https://api.magicthegathering.io/v1/cards');
        const jsonFromServer = await response.json();
        console.log(jsonFromServer.cards);
        const magicResults = jsonFromServer.cards;

        document.querySelector('.loader').classList.add('hide');

        magicResults.forEach(function (value) {
        document.querySelector('main').innerHTML += `
            <div class="cardSelection">
            <h2>${value.name}</h2>
            <h3>Mana Cost:${value.manaCost}</h3> 
            <img src="${value.imageUrl}"> 
            <a class="button" href="details.html?id=${value.id}">Read More</a>
        </div>`;
        });
    } catch (error) {
        document.querySelector('.alert').innerHTML = alertUser(
            'Error occured (Cannot load content)',
            'error'
        );
    } finally {
        setTimeout(function () {
            document.querySelector('.alert').innerHTML = '';
        }, 3000)
    }
}

getMagic(magicUrl);