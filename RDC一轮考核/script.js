// 获取相关元素
const logo = document.querySelector('.logo-container');
const memberLink = document.querySelector('.nav-links li:last-child a');
const indexSection = document.querySelector('.index');
const memberSection = document.querySelector('.menber');

// 获取 nav-links 中的所有 li 元素和 showitem 元素
const navLinks = document.querySelectorAll('.nav-links li');
const showItembox = document.querySelector('.showitem');

// 添加过渡效果，设置宽度和位置变化的过渡时间为 0.3 秒
showItembox.style.transition = 'all 0.3s ease';

// 为每个 li 元素添加鼠标进入和鼠标离开事件监听器
navLinks.forEach((link) => {
  link.addEventListener('mouseenter', () => {
    // 计算当前 li 元素的位置
    const rect = link.getBoundingClientRect();
    const navRect = document.querySelector('.header-nav').getBoundingClientRect();
    const left = rect.left - navRect.left;

    // 设置 showitem 的位置
    showItembox.style.transform = `translateX(${left}px)`;
    // 显示 showitem
    showItembox.style.visibility = 'visible';
  });
  link.addEventListener('mouseleave', () => {
    // 恢复 showitem 的初始状态
    showItembox.style.visibility = 'hidden';
  });
});

// 初始化状态
memberSection.style.display = 'none';

// 点击logo事件
logo.addEventListener('click', function (e) {
  e.preventDefault();
  indexSection.style.display = 'block';
  memberSection.style.display = 'none';
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// 点击会员权益事件
memberLink.addEventListener('click', function (e) {
  e.preventDefault();
  indexSection.style.display = 'none';
  memberSection.style.display = 'block';
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
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
    // 这里direction用中括号是因为direction的值不是固定的，需要动态变化
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
const sliderPrev = document.querySelector('.slider-prev');
const sliderNext = document.querySelector('.slider-next');
const showHighlights = document.querySelectorAll('.show-highlight');

let currentIndex = 0;

// 初始化轮播图
function updateBanner() {
  bannerContainer.style.backgroundImage = `url(${backgroundImages[currentIndex]})`;
  showHighlights[0].classList.add('active');
  showHighlights.forEach((light, index) => {
    if (index === currentIndex) {
      light.classList.add('active');
    } else {
      light.classList.remove('active');
    }
  })
}

// 上一张
sliderPrev.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + backgroundImages.length) % backgroundImages.length;
  updateBanner();
});

// 下一张
sliderNext.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % backgroundImages.length;
  updateBanner();
});

showHighlights.forEach((light, index) => {
  light.addEventListener('click', () => {
    currentIndex = index;
    updateBanner();
  });
})

// 自动轮播
let autoPlayInterval = setInterval(() => {
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

function showItem(theway) {
  const translateX = -(theway * itemWidth);
  currentItems.forEach((item) => {
    item.style.transform = `translateX(${translateX - 10}px)`;
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

const backToTop = document.querySelector('.back-to-top');


//控制返回顶部是否出现
window.addEventListener('scroll', () => {
  if (window.scrollY > 900) {
    backToTop.style.visibility = 'visible';
    backToTop.style.transform = 'translateY(-10px)';
  } else {
    backToTop.style.visibility = 'hidden';
    backToTop.style.transform = 'translateY(0)';
  }
})

backToTop.addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});