document.addEventListener('DOMContentLoaded', function(){
const inputTitle =document.getElementById('title');
const inputPost = document.getElementById('post');
const btnAddPost = document.getElementById('addPost');
function createPost() {
    const postData = {
    title: 'Заголовок',
    body: 'Текст поста',
    userId: 1
    };
    fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(postData)
    })
    .then((response) => response.json())
    .then((data) => {
        paragraph.textContent = JSON.stringify(data)
    })
    .catch((error) => paragraph.textContent = `Ошибка: ${error}`)
}
createPost()
})