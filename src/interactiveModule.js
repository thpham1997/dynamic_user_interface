import './style.css'

const interactiveModule = (function () {

  /**
   * 
   * @param {{header: string}} headerObj 
   * @param {[{link: URL,
   * text: string},...]} itemsArr 
   * @returns 
   */
  const dropdownMenu = (headerObj = {}, itemsArr = []) => {
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

  const imageSlider = (imageUrlArray, width = 300, timeoutMs = 1000) => {
    if (imageUrlArray.length === 0) return;
    let curImagePos = 0;
    const sliderContainer = document.createElement('div');
    const slider = document.createElement('div');
    const slides = [];
    const backwardBtn = document.createElement('div');
    const forwardBtn = document.createElement('div');
    sliderContainer.classList.add('sliderContainer');
    sliderContainer.style.width = `${width}px`;
    slider.classList.add('slider');
    backwardBtn.classList.add('backward');
    forwardBtn.classList.add('forward');
    const backwardIcon = document.createElement('span');
    backwardIcon.textContent = '<';
    const forwardIcon = document.createElement('span');
    forwardIcon.textContent = '>';

    backwardBtn.appendChild(backwardIcon);
    forwardBtn.appendChild(forwardIcon);
    imageUrlArray.forEach((url, index) => {
      let slide = document.createElement('div');
      let img = new Image();
      img.id = index;
      img.src = url;
      img.alt = 'No image';
      img.style.width = `${width}px`;
      slide.classList.add('slide');
      slide.appendChild(img);
      slider.appendChild(slide);
      slides.push(slide);
    });
    slides.forEach(slide => {
      slide.style.opacity = 0;
    })
    slides.at(curImagePos).style.opacity = 1;
    backwardBtn.addEventListener("click", () => {
      slides.at(curImagePos).style.opacity = 0;
      curImagePos === 0 ? curImagePos = imageUrlArray.length - 1 : curImagePos--;
      slider.style.transform = `translateX(${-curImagePos * width}px)`;
      slides.at(curImagePos).style.opacity = 1;
    })
    forwardBtn.addEventListener("click", () => {
      slides.at(curImagePos).style.opacity = 0;
      curImagePos === (imageUrlArray.length - 1)? curImagePos = 0 : curImagePos++;
      slider.style.transform = `translateX(${-curImagePos * width}px)`;
      slides.at(curImagePos).style.opacity = 1;
    })
    sliderContainer.appendChild(slider);
    sliderContainer.appendChild(backwardBtn);
    sliderContainer.appendChild(forwardBtn);
    setInterval(() => {
      slides.at(curImagePos).style.opacity = 0;
      curImagePos === (imageUrlArray.length - 1) ? curImagePos = 0 : curImagePos++;
      slider.style.transform = `translateX(${-curImagePos * width}px)`;
      slides.at(curImagePos).style.opacity = 1;
    }, timeoutMs);

    return sliderContainer;
  }


  return { dropdownMenu, imageSlider };
})();


export default interactiveModule;