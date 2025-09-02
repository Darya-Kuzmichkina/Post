
const inputTitle = document.querySelector('.inputTitle')
const inputBody = document.querySelector('.inputBody')
const inputId = document.querySelector('.inputId')
const postsContainer = document.querySelector('.postsContainer')
document.querySelector('button').addEventListener('click', async () => {

    const date = {
        'title': inputTitle.value,
        'body': inputBody.value,
        'userId': inputId.value
    }
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
        method: 'POST', headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(date)
    });
    const res = await response.json();
    const div = document.createElement('div');
    const pTitile = document.createElement('p');
    const pBody = document.createElement('p');
    pTitile.textContent = res.title;
    pBody.textContent = res.body;
    div.appendChild(pTitile);
    div.appendChild(pBody);
     postsContainer.appendChild(div);
     inputTitle.value = '';
    inputBody.value = '';
    inputId.value = '';
})


    