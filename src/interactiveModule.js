import './style.css'

const interactiveModule = (function(){

  /**
   * 
   * @param {{header: string}} headerObj 
   * @param {[{link: URL,
   * text: string},...]} itemsArr 
   * @returns 
   */
  const dropdownMenu = (headerObj = {}, itemsArr =[]) => {
    const container = document.createElement('div');
    container.className = 'dropdown';
    const header = document.createElement('h2');
    header.innerText = headerObj.header || "Header Text";
    let itemContainer = document.createElement('ul');
    if (itemsArr.length >= 1) {
      for (let i = 0; i < itemsArr.length; i++) {
        let item = document.createElement('li');
        let link = document.createElement('a');
        link.target = '_blank';
        link.rel = 'noopener noreferrer'
        link.href = itemsArr[i]?.link || '#';
        link.innerText = itemsArr[i]?.text || 'Empty text';
        item.appendChild(link);
        itemContainer.appendChild(item);
      }
    } else {
      for (let i = 0; i < 5; i++) {
        let item = document.createElement('li');
        let link = document.createElement('a');
        link.target = '_blank';
        link.rel = 'noopener noreferrer'
        link.href = itemsArr[i]?.link || '#';
        link.innerText = itemsArr[i]?.text || 'Empty text';
        item.appendChild(link);
        itemContainer.appendChild(item);
      }
    }
    container.appendChild(header);
    container.appendChild(itemContainer);
    itemContainer.classList.add('itemList');
    header.addEventListener('click', () => {
      itemContainer.classList.toggle('itemList-show');
    });
    return container;
  }

  return {dropdownMenu};
})();

export default interactiveModule;