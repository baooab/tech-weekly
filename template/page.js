fetch('./rss.json')
  .then(async function (response) {
    const res = await response.json();
    const items = res.items;

    const issues = document.querySelector('.issues');
    const fragment = document.createDocumentFragment();

    items.forEach(i => {
      const issue = document.createElement('details');
      const h2 = document.createElement('summary');
      h2.classList.add('title', 'is-4');
      const content = document.createElement('div');

      const timeObj = new Date(i.pubDate);
      const weekDays = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
      h2.innerHTML = `${i.title} （<a href="${i.link}" target="_blank">${timeObj.toLocaleDateString()} ${weekDays[timeObj.getDay()]}</a>）`;
      content.innerHTML = i.content;

      issue.appendChild(h2);
      issue.appendChild(content);
      fragment.appendChild(issue);
    });

    issues.appendChild(fragment);
  })