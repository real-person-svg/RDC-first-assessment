// 获取相关元素
const logo = document.querySelector('.logo-container');
const memberLink = document.querySelector('.nav-links li:last-child a');
const indexSection = document.querySelector('.index');
const memberSection = document.querySelector('.menber');

// 初始化状态
memberSection.style.display = 'none';

// 点击logo事件
logo.addEventListener('click', function (e) {
  e.preventDefault();
  indexSection.style.display = 'block';
  memberSection.style.display = 'none';
});

// 点击会员权益事件
memberLink.addEventListener('click', function (e) {
  e.preventDefault();
  indexSection.style.display = 'none';
  memberSection.style.display = 'block';
});

// 获取相关元素
const loginSection = document.querySelector('.login-section');
const headerActions = document.querySelector('.header-actions a:last-child');
const closeButton = document.querySelector('.close-button');
const darkOverlay = document.querySelector('.dark-overlay');
const searchBar = document.querySelector('.search-bar');
const searchSection = document.querySelector('.search-section');
const cancelButton = document.querySelector('.cancel-button');

// 封装成函数
function open(index, direction, result) {
  index.addEventListener('click', function (e) {
    e.preventDefault();
    result.style[direction] = '0';
    darkOverlay.style.display = 'block';
  });
}

// 点击登录事件
open(headerActions, 'right', loginSection);
// 点击搜索框事件
open(searchBar, 'top', searchSection);

// 封装成函数
function close(index, direction, result) {
  index.addEventListener('click', function (e) {
    e.preventDefault();
    result.style[direction] = '-100%';
    darkOverlay.style.display = 'none';
  });
}

// 关闭登录框事件
close(closeButton, 'right', loginSection);
// 点击关闭搜索框事件
close(cancelButton, 'top', searchSection);


// 获取相关元素
const backgroundImages = [
  'img/index/lunbo11.jpg',
  'img/index/lunbo12.jpg',
  'img/index/lunbo13.jpg',
  'img/index/lunbo14.jpg',
  'img/index/lunbo15.jpg',
  'img/index/lunbo16.jpg',
]

// 轮播图
const bannerContainer = document.querySelector('.banner-container');
const bannerPrev = document.querySelector('.banner-prev');
const bannerNext = document.querySelector('.banner-next');
let currentIndex = 0;

// 初始化轮播图
function updateBanner() {
  bannerContainer.style.backgroundImage = `url(${backgroundImages[currentIndex]})`;
}

// 上一张
bannerPrev.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + backgroundImages.length) % backgroundImages.length;
  updateBanner();
});

// 下一张
bannerNext.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % backgroundImages.length;
  updateBanner();
});

// 自动轮播
autoPlayInterval = setInterval(() => {
  currentIndex = (currentIndex + 1) % backgroundImages.length;
  updateBanner();
}, 3000);

// 鼠标移入后停止自动轮播
bannerContainer.addEventListener('mouseenter', () => {
  clearInterval(autoPlayInterval);
});

// 鼠标移出后继续自动轮播
bannerContainer.addEventListener('mouseleave', () => {
  autoPlayInterval = setInterval(() => {
    currentIndex = (currentIndex + 1) % backgroundImages.length;
    updateBanner();
  }, 3000);
});


// 获取相关元素
const sliderContainer = document.querySelector('.slider-container');
const currentSliderPrev = document.querySelector('.current-slider-prev');
const currentSliderNext = document.querySelector('.current-slider-next');
const currentItems = document.querySelectorAll('.current-item');
const itemWidth = currentItems[0].offsetWidth;

currentItems.forEach((item) => {
  item.addEventListener('mouseenter', () => {
    // 获取当前元素已有的 transform 样式
    const currentTransform = item.style.transform;
    // 如果已有水平平移，在其基础上添加垂直平移
    if (currentTransform.includes('translateX')) {
      item.style.transform = currentTransform + ' translateY(-10px)';
    } else {
      item.style.transform = 'translateY(-10px)';
    }
  });
  item.addEventListener('mouseleave', () => {
    const currentTransform = item.style.transform;
    // 移除垂直平移，保留水平平移
    if (currentTransform.includes('translateY')) {
      item.style.transform = currentTransform.replace(' translateY(-10px)', '');
    } else {
      item.style.transform = 'translateY(0)';
    }
  });
});



function showItem(theway) {
  const translateX = -(theway * itemWidth);
  currentItems.forEach((item) => {
    item.style.transform = `translateX(${translateX}px)`;
  });
}

// 上一张
currentSliderPrev.addEventListener('click', (e) => {
  e.preventDefault();
  showItem(0);
  setTimeout(() => {
    currentSliderPrev.style.cursor = 'not-allowed';
    currentSliderNext.style.cursor = 'pointer';
  }, 300);
});

// 下一张
currentSliderNext.addEventListener('click', (e) => {
  e.preventDefault();
  showItem(1);
  setTimeout(() => {
    currentSliderPrev.style.cursor = 'pointer';
    currentSliderNext.style.cursor = 'not-allowed';
  }, 300);
});

// 初始化
showItem(0);

