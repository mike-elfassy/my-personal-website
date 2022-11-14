const likeButtons = document.getElementsByTagName('button');

for (const likeButton of likeButtons) {
    likeButton.addEventListener('click', function() {
        alert('Thanks for liking my photo!');
      });
}