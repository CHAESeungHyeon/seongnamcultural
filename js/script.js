/* ============================================================
   성남문화재단 메인 페이지 스크립트
   ============================================================ */

/* ── 배너 데이터 (19개) ── */
const bannerData = [
  {
    img: 'img/index/main-swipe-banner (1).png',
    title: '칼로막베스',
    date: '2025-08-15 ~ 2025-08-17',
    location: '성남아트센터 앙상블시어터',
    url: '#'
  },
  {
    img: 'img/index/main-swipe-banner (2).png',
    title: '클라라 주미 강 & 김선욱',
    date: '2025-05-27',
    location: '성남아트센터 콘서트홀',
    url: '#'
  },
  {
    img: 'img/index/main-swipe-banner (3).png',
    title: '라크리마',
    date: '2026-10-02 ~ 2026-10-03',
    location: '성남아트센터 소극장',
    url: '#'
  },
  {
    img: 'img/index/main-swipe-banner (4).png',
    title: '국립극단〈태풍〉',
    date: '2026-10-17 ~ 2026-10-18',
    location: '성남아트센터 오페라하우스',
    url: '#'
  },
  {
    img: 'img/index/main-swipe-banner (5).png',
    title: '마티네콘서트<br>독일, 음악의 숲',
    date: '2026-03 ~ 2026-12 (매달 셋째 주 목요일)',
    location: '성남아트센터 콘서트홀',
    url: '#'
  },
  {
    img: 'img/index/main-swipe-banner (6).png',
    title: '오페라정원',
    date: '콘서트 오페라 〈카발레리아 루스티카나〉',
    location: '성남아트센터',
    url: '#'
  },
  {
    img: 'img/index/main-swipe-banner (7).png',
    title: 'VERMEER',
    date: '2025-12-12 ~ 2026-03-15',
    location: '성남브라운미술관 기획전시실',
    url: '#'
  },
  {
    img: 'img/index/main-swipe-banner (8).png',
    title: '오후의콘서트<br>보헤미아의 낭만',
    date: '2026-04-01',
    location: '성남아트센터 앙상블시어터',
    url: '#'
  },
  {
    img: 'img/index/main-swipe-banner (9).png',
    title: '이자람 판소리 눈·눈·눈',
    date: '2026-05-23',
    location: '성남아트센터 오페라하우스',
    url: '#'
  },
  {
    img: 'img/index/main-swipe-banner (10).png',
    title: '엘리자베트 레온스카야',
    date: '2026-10-03',
    location: '성남아트센터 콘서트홀',
    url: '#'
  },
  {
    img: 'img/index/main-swipe-banner (11).png',
    title: '망원동 브라더스',
    date: '2026-06-26 ~ 2026-06-27',
    location: '성남아트센터 앙상블시어터',
    url: '#'
  },
  {
    img: 'img/index/main-swipe-banner (12).png',
    title: 'BBC심포니오케스트라',
    date: '2026-03-28',
    location: '성남아트센터 콘서트홀',
    url: '#'
  },
  {
    img: 'img/index/main-swipe-banner (13).png',
    title: '들꽃',
    date: '2025-08-28 ~ 2025-08-29',
    location: '성남아트센터 앙상블시어터',
    url: '#'
  },
  {
    img: 'img/index/main-swipe-banner (14).png',
    title: '탬플',
    date: '2025-02-27 ~ 2025-02-28',
    location: '성남아트센터 앙상블시어터',
    url: '#'
  },
  {
    img: 'img/index/main-swipe-banner (15).png',
    title: '시뮬라시옹',
    date: '2025-10-23 ~ 2025-10-24',
    location: '성남아트센터 앙상블시어터',
    url: '#'
  },
  {
    img: 'img/index/main-swipe-banner (16).png',
    title: 'HETEROTOPIA',
    date: '2026-02-27 ~ 2026-06-26',
    location: '성남브라운미술관 전시실',
    url: '#'
  },
  {
    img: 'img/index/main-swipe-banner (17).png',
    title: '오후의콘서트<br>예술로 떠나는 세계여행',
    date: '2026-03 ~ 2026-12 (매월 첫째 주 수요일)',
    location: '성남아트센터 앙상블시어터',
    url: '#'
  },
  {
    img: 'img/index/main-swipe-banner (18).png',
    title: '찬란한, 고요',
    date: '2026-02-20 ~ 2026-04-19',
    location: '성남브라운미술관 전시실',
    url: '#'
  },
  {
    img: 'img/index/main-swipe-banner (19).png',
    title: 'K-POP으로 만나는 클래식',
    date: '2026-04-11',
    location: '성남아트리움 대극장',
    url: '#'
  }
];

/* ============================================================
   메인 배너 3D 캐러셀
   ============================================================ */
(function () {
  const track = document.getElementById('swiperTrack');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const playPauseBtn = document.getElementById('playPauseBtn');

  if (!track) return;

  const total = bannerData.length;
  let current = 0;
  let isPlaying = true;
  let autoTimer = null;

  /* 슬라이드 DOM 생성 (이미지 + 텍스트) */
  const slides = bannerData.map((item, i) => {
    const div = document.createElement('div');
    div.className = 'swipe-slide';
    div.dataset.index = i;

    const img = document.createElement('img');
    img.src = item.img;
    img.alt = item.title;
    div.appendChild(img);

    const textLink = document.createElement('a');
    textLink.href = item.url;
    textLink.target = '_blank';
    textLink.rel = 'noopener';
    textLink.className = 'slide-text';
    textLink.innerHTML = `
      <p class="slide-title">${item.title}</p>
      <p class="slide-date">${item.date}</p>
      <p class="slide-location">${item.location}</p>
    `;
    div.appendChild(textLink);

    track.appendChild(div);
    return div;
  });

  /* offset 정규화 (무한 루프) */
  function normalizeOffset(offset) {
    while (offset > total / 2) offset -= total;
    while (offset < -total / 2) offset += total;
    return offset;
  }

  /* offset 별 스타일 — 슬라이드 transform, 이미지 별도 filter */
  function getStyle(offset) {
    const abs = Math.abs(offset);
    const sign = offset >= 0 ? 1 : -1;
    if (offset === 0) {
      return {
        transform: 'translateX(0) scale(1) rotateY(0deg)',
        opacity: '1',
        zIndex: '10',
        imgFilter: 'none',
        textOpacity: '1',
        pointerEvents: 'auto'
      };
    } else if (abs === 1) {
      return {
        transform: `translateX(${sign * 375}px) scale(0.85) rotateY(0deg)`,
        opacity: '1',
        zIndex: '9',
        imgFilter: 'none',
        textOpacity: '1',
        pointerEvents: 'auto'
      };
    } else if (abs === 2) {
      return {
        transform: `translateX(${sign * 640}px) scale(0.7) rotateY(${sign * 25}deg)`,
        opacity: '0.6',
        zIndex: '8',
        imgFilter: 'blur(2px)',
        textOpacity: '0',
        pointerEvents: 'none'
      };
    } else {
      return {
        transform: `translateX(${sign * 900}px) scale(0.55) rotateY(${sign * 35}deg)`,
        opacity: '0',
        zIndex: '1',
        imgFilter: 'blur(4px)',
        textOpacity: '0',
        pointerEvents: 'none'
      };
    }
  }

  /* 렌더링 — filter는 img에만 적용, 텍스트는 선명 유지 */
  function render() {
    slides.forEach((slide, i) => {
      const offset = normalizeOffset(i - current);
      const s = getStyle(offset);
      slide.style.transform = s.transform;
      slide.style.opacity = s.opacity;
      slide.style.zIndex = s.zIndex;
      slide.style.filter = 'none';
      slide.style.pointerEvents = s.pointerEvents;
      const img = slide.querySelector('img');
      if (img) img.style.filter = s.imgFilter;
      const textEl = slide.querySelector('.slide-text');
      if (textEl) textEl.style.opacity = s.textOpacity;
    });
  }

  function goTo(index) {
    current = ((index % total) + total) % total;
    render();
  }

  function next() { goTo(current + 1); }
  function prev() { goTo(current - 1); }

  /* 자동재생 */
  function startAuto() {
    clearInterval(autoTimer);
    autoTimer = setInterval(next, 3500);
    isPlaying = true;
    playPauseBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
  }

  function stopAuto() {
    clearInterval(autoTimer);
    isPlaying = false;
    playPauseBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
  }

  /* 버튼 이벤트 */
  prevBtn.addEventListener('click', () => { prev(); if (isPlaying) startAuto(); });
  nextBtn.addEventListener('click', () => { next(); if (isPlaying) startAuto(); });
  playPauseBtn.addEventListener('click', () => { isPlaying ? stopAuto() : startAuto(); });

  /* 슬라이드 클릭으로 이동 (텍스트 링크 클릭은 제외) */
  slides.forEach((slide, i) => {
    slide.addEventListener('click', e => {
      if (e.target.closest('.slide-text')) return;
      if (i !== current) {
        goTo(i);
        if (isPlaying) startAuto();
      }
    });
  });

  /* 마우스 / 터치 스와이프 */
  let dragStartX = null;
  let isDragging = false;

  function onDragStart(x) {
    dragStartX = x;
    isDragging = true;
  }

  function onDragEnd(x) {
    if (!isDragging || dragStartX === null) return;
    isDragging = false;
    const delta = x - dragStartX;
    dragStartX = null;
    if (Math.abs(delta) < 40) return;
    if (delta < 0) next(); else prev();
    if (isPlaying) startAuto();
  }

  track.addEventListener('mousedown', e => onDragStart(e.clientX));
  window.addEventListener('mouseup', e => { if (isDragging) onDragEnd(e.clientX); });
  track.addEventListener('touchstart', e => onDragStart(e.touches[0].clientX), { passive: true });
  track.addEventListener('touchend', e => onDragEnd(e.changedTouches[0].clientX));

  render();
  startAuto();
})();


/* ============================================================
   공지사항 배너 슬라이더 (점 버튼)
   ============================================================ */
(function () {
  const slidesWrap = document.getElementById('noticeSlides');
  const dots = document.querySelectorAll('#noticeDots .dot');

  if (!slidesWrap || !dots.length) return;

  let current = 0;

  function getSlideWidth() {
    const firstSlide = slidesWrap.querySelector('.notice-slide');
    return firstSlide ? firstSlide.offsetWidth : slidesWrap.parentElement.offsetWidth;
  }

  function goTo(index) {
    current = index;
    slidesWrap.style.transform = `translateX(-${current * getSlideWidth()}px)`;
    dots.forEach((d, i) => d.classList.toggle('active', i === current));
  }

  dots.forEach(dot => {
    dot.addEventListener('click', () => goTo(Number(dot.dataset.index)));
  });

  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => goTo(current), 50);
  });

  goTo(0);
})();


/* ============================================================
   햄버거 메뉴
   ============================================================ */
(function () {
  const hamburger = document.getElementById('hamburger');
  const nav = document.getElementById('headerNav');

  if (!hamburger || !nav) return;

  hamburger.addEventListener('click', e => {
    e.stopPropagation();
    hamburger.classList.toggle('open');
    nav.classList.toggle('open');
    hamburger.setAttribute('aria-label', nav.classList.contains('open') ? '메뉴 닫기' : '메뉴 열기');
  });

  document.addEventListener('click', e => {
    if (!hamburger.contains(e.target) && !nav.contains(e.target)) {
      hamburger.classList.remove('open');
      nav.classList.remove('open');
    }
  });
})();


/* ============================================================
   사이드 내비게이션 스크롤 위치 조정
   ============================================================ */
(function () {
  const sideNav = document.getElementById('sideNav');
  const mainBanner = document.getElementById('main-banner');

  if (!sideNav || !mainBanner) return;

  function update() {
    const bannerRect = mainBanner.getBoundingClientRect();
    const navH = sideNav.offsetHeight;
    const vpH = window.innerHeight;

    /* 기본 위치: 뷰포트 중앙 */
    const naturalTop = Math.round((vpH - navH) / 2);

    /* 최소 top: 메인 배너 하단 + 여백 */
    const minTop = Math.round(bannerRect.bottom + 10);

    /* 배너를 가리지 않도록 더 낮은 쪽 선택 */
    sideNav.style.top = Math.max(naturalTop, minTop) + 'px';
  }

  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
  window.addEventListener('load', update);
  update();
})();


/* ============================================================
   뉴스레터 하트 버튼
   ============================================================ */
(function () {
  const btn = document.getElementById('heartBtn');
  if (!btn) return;

  btn.addEventListener('click', () => {
    const isLiked = btn.classList.toggle('liked');
    const icon = btn.querySelector('i');
    icon.className = isLiked ? 'fa-solid fa-heart' : 'fa-regular fa-heart';
    btn.setAttribute('aria-label', isLiked ? '좋아요 취소' : '좋아요');
  });
})();


/* ============================================================
   운영공간 슬라이더 (무한 루프)
   ============================================================ */
(function () {
  const track   = document.getElementById('venuesTrack');
  const wrap    = document.getElementById('venuesWrap');
  const prevBtn = document.getElementById('venuePrevBtn');
  const nextBtn = document.getElementById('venueNextBtn');

  if (!track || !wrap) return;

  const originals = Array.from(track.querySelectorAll('.venue-item'));
  const N = originals.length;

  /* 앞뒤에 클론 추가: [clone0~N-1] [real0~N-1] [clone0~N-1] */
  for (let i = N - 1; i >= 0; i--) track.prepend(originals[i].cloneNode(true));
  for (let i = 0; i < N; i++)      track.appendChild(originals[i].cloneNode(true));

  let cur  = N;     /* 첫 번째 실제 아이템(index N)에서 시작 */
  let busy = false;

  function itemW() {
    const el = track.querySelector('.venue-item');
    return el ? el.offsetWidth + (parseFloat(getComputedStyle(track).gap) || 20) : 0;
  }

  function jump(index, animate) {
    track.style.transition = animate ? 'transform 0.4s ease' : 'none';
    track.style.transform  = `translateX(-${index * itemW()}px)`;
    cur = index;
  }

  prevBtn.addEventListener('click', () => { if (!busy) { busy = true; jump(cur - 1, true); } });
  nextBtn.addEventListener('click', () => { if (!busy) { busy = true; jump(cur + 1, true); } });

  track.addEventListener('transitionend', () => {
    busy = false;
    if (cur >= N * 2) jump(cur - N, false);
    else if (cur < N) jump(cur + N, false);
    requestAnimationFrame(() => requestAnimationFrame(() => {
      track.style.transition = 'transform 0.4s ease';
    }));
  });

  let resizeT;
  window.addEventListener('resize', () => {
    clearTimeout(resizeT);
    resizeT = setTimeout(() => jump(cur, false), 50);
  });

  /* 초기 위치 */
  jump(N, false);
  requestAnimationFrame(() => requestAnimationFrame(() => {
    track.style.transition = 'transform 0.4s ease';
  }));
})();
