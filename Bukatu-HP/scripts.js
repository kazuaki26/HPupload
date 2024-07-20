document.addEventListener('DOMContentLoaded', function() {
    const newsItems = document.querySelectorAll('.news-item h3');

    newsItems.forEach(item => {
        item.addEventListener('click', function() {
            const newsContent = this.nextElementSibling;
            newsContent.style.display = (newsContent.style.display === 'block') ? 'none' : 'block';
        });
    });
});