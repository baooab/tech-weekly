fetch('./rss.json')
.then(async function (response) {
  const res = await response.json();
  const items = res.items;

  const list = document.querySelector('.list');
  const fragment = document.createDocumentFragment();

  items.forEach(i => {
    const li = document.createElement('div');
    const p = document.createElement('p');
    const timeObj = new Date(i.pubDate);
    p.innerHTML = `${i.title} （<a href="${i.link}" target="_blank">${timeObj.toLocaleTimeString('zh-CN', {hour12: false, hour: '2-digit', minute: '2-digit'})}</a>）`;
    li.appendChild(p);
    fragment.appendChild(li);
  });

  list.appendChild(fragment);
})