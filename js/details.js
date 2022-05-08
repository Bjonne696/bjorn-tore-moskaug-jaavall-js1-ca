const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get('id');

async function getMagic(cardId) {
  try {
    console.log(cardId);
    const response = await fetch(
        'https://api.magicthegathering.io/v1/cards/' + cardId
    );
    const jsonResults = await response.json();
    const mtgArray = jsonResults.card;
    console.log(mtgArray);

    document.querySelector('.loader').classList.add('hide');

    document.title = mtgArray.name;
    document.querySelector('h1').innerHTML = `${mtgArray.name}`;
    document.querySelector(
      '.hero__img'
    ).style.backgroundImage = `url('${mtgArray.imageUrl}')`;
    document.querySelector('.cmc').innerHTML = `Converted Mana Cost: ${mtgArray.cmc}`;
    document.querySelector('.type').innerHTML = `Type: ${mtgArray.type}`;
    document.querySelector('.rarity').innerHTML = `Rarity: ${mtgArray.rarity}`;
    document.querySelector('.setName').innerHTML = `Set: ${mtgArray.setName}`;
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

getMagic(id);