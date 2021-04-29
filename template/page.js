
  function fetchWeekly(url, selector) {
    fetch(url)
    .then(async function (response) {
      const res = await response.json();
      const items = res.items;
  
      const issues = document.querySelector(selector);
      const fragment = document.createDocumentFragment();
  
      const title = document.createElement('summary');
      title.innerText = res.title
      title.classList.add('is-4', 'title')

      fragment.appendChild(title)

      items.forEach(i => {
        const issue = document.createElement('details');
        const h2 = document.createElement('summary');
        h2.classList.add('title', 'is-5', 'mb-2')
        const content = document.createElement('div');
        content.classList.add('issue-content', 'notification',  'px-1', 'py-3')
        const timeObj = new Date(i.pubDate);
        const weekDays = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
        h2.innerHTML = `${i.title} （${timeObj.toLocaleDateString()} ${weekDays[timeObj.getDay()]} <a href="${i.link}" target="_blank" title=""></a>）`;
        content.innerHTML = i.content;
  
        issue.appendChild(h2);
        issue.appendChild(content);
        fragment.appendChild(issue);
      });
  
      issues.appendChild(fragment);
    })
  
  }


fetchWeekly('./js.json', '.issues-js')
fetchWeekly('./fe.json', '.issues-fe')