const stage = document.querySelector("#ppt-stage");
const slides = [...document.querySelectorAll("[data-slide]")];
const navButtons = [...document.querySelectorAll("[data-slide-go]")];
const dialog = document.querySelector("#lightbox");
const dialogImage = document.querySelector("#lightbox-image");
const dialogCaption = document.querySelector("#lightbox-caption");
const dialogCount = document.querySelector("#lightbox-count");
const dialogNav = dialog.querySelector(".lightbox-nav");
const closeButton = dialog.querySelector(".close-lightbox");
const chapterRanges = [[0, 0], [1, 2], [3, 5], [6, 6], [7, 8], [9, 12], [13, 13], [14, 14]];
let current = 0;
let wheelLocked = false;
let gallery = [];
let galleryIndex = 0;
let galleryOpener = null;

function initTabs(scope) {
  scope.querySelectorAll("[data-tabs]").forEach(tablist => {
    if (tablist.dataset.pptTabsReady) return;
    const section = tablist.parentElement?.querySelector(`[data-panels="${tablist.dataset.tabs}"]`) ?? scope.querySelector(`[data-panels="${tablist.dataset.tabs}"]`);
    if (!section) return;
    tablist.dataset.pptTabsReady = "1";
    const namespace = `${tablist.dataset.tabs}-ppt-${Math.random().toString(36).slice(2, 7)}`;
    const buttons = [...tablist.querySelectorAll("[data-tab]")];
    const panels = buttons.map(button => section.querySelector(`[data-panel="${button.dataset.tab}"]`));
    tablist.setAttribute("role", "tablist");

    function select(index, moveFocus = false) {
      buttons.forEach((button, i) => {
        const selected = i === index;
        button.setAttribute("aria-selected", String(selected));
        button.tabIndex = selected ? 0 : -1;
        panels[i].hidden = !selected;
      });
      if (moveFocus) buttons[index].focus();
    }

    buttons.forEach((button, i) => {
      const id = `${namespace}-${button.dataset.tab}`;
      button.id = `tab-${id}`;
      button.setAttribute("role", "tab");
      button.setAttribute("aria-controls", `panel-${id}`);
      panels[i].id = `panel-${id}`;
      panels[i].setAttribute("role", "tabpanel");
      panels[i].setAttribute("aria-labelledby", button.id);
      panels[i].tabIndex = 0;
      button.addEventListener("click", () => select(i));
      button.addEventListener("keydown", event => {
        const indexes = {
          ArrowLeft: (i - 1 + buttons.length) % buttons.length,
          ArrowRight: (i + 1) % buttons.length,
          Home: 0,
          End: buttons.length - 1
        };
        if (!(event.key in indexes)) return;
        event.preventDefault();
        select(indexes[event.key], true);
      });
    });
    const preserved = buttons.findIndex(button => button.getAttribute("aria-selected") === "true");
    select(preserved >= 0 ? preserved : 0);
  });
}

function initAffinity(scope) {
  const tablist = scope.querySelector('[data-tabs="affinity"]');
  const shortcuts = [...scope.querySelectorAll("[data-affinity-shortcut]")];
  if (!tablist || !shortcuts.length || tablist.dataset.pptAffinityReady) return;
  tablist.dataset.pptAffinityReady = "1";
  function sync(name) {
    shortcuts.forEach(button => {
      const active = button.dataset.affinityShortcut === name;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", String(active));
    });
  }
  shortcuts.forEach(button => {
    button.addEventListener("click", () => tablist.querySelector(`[data-tab="${button.dataset.affinityShortcut}"]`)?.click());
  });
  new MutationObserver(() => sync(tablist.querySelector('[aria-selected="true"]')?.dataset.tab)).observe(tablist, { subtree: true, attributes: true, attributeFilter: ["aria-selected"] });
  sync(tablist.querySelector('[aria-selected="true"]')?.dataset.tab);
}

function initFilters(scope) {
  scope.querySelectorAll(".filter").forEach(filter => {
    if (filter.dataset.pptFilterReady) return;
    filter.dataset.pptFilterReady = "1";
    const select = filter.querySelector("select");
    const count = filter.querySelector("[id^='query-count']");
    if (!select) return;
    const root = filter.closest("[data-slide]") ?? scope;
    const rows = [...root.querySelectorAll("tr[data-category]")];
    function apply() {
      rows.forEach(row => { row.hidden = !!select.value && row.dataset.category !== select.value; });
      if (count) count.textContent = `${rows.filter(row => !row.hidden).length} 条`;
    }
    select.addEventListener("change", apply);
    apply();
  });
}

function fitTadaEmbeds(scope) {
  scope.querySelectorAll(".tada-phone-embed").forEach(el => {
    const scaler = el.querySelector(".tada-phone-scale");
    if (!scaler) return;
    const ratio = el.clientWidth / 414;
    scaler.style.transform = `scale(${Number.isFinite(ratio) && ratio > 0 ? ratio : 1})`;
  });
}

function initFinalProductFallback() {
  const slide = document.querySelector(".slide-final");
  const frame = document.getElementById("product-frame-final");
  const fallback = document.getElementById("product-fallback-final");
  if (!slide || !frame || !fallback || slide.dataset.fallbackReady) return;
  slide.dataset.fallbackReady = "1";
  let fallbackOn = false;
  let timer = null;

  function showFallback() {
    if (fallbackOn) return;
    fallbackOn = true;
    fallback.hidden = false;
    frame.style.visibility = "hidden";
    const played = fallback.play();
    if (played && typeof played.catch === "function") played.catch(() => {});
  }

  function frameHasContent() {
    try {
      const doc = frame.contentDocument;
      if (!doc) return false;
      if (doc.URL && doc.URL !== "about:blank") return true;
      const root = doc.getElementById("root");
      if (root && root.childElementCount > 0) return true;
      return false;
    } catch (error) {
      return frame.getAttribute("src") === frame.dataset.lazySrc;
    }
  }

  function armTimer() {
    if (timer || fallbackOn) return;
    timer = setTimeout(() => {
      if (!frameHasContent()) showFallback();
    }, 5000);
  }

  frame.addEventListener("load", () => {
    if (frameHasContent()) {
      if (timer) { clearTimeout(timer); timer = null; }
    } else {
      showFallback();
    }
  });
  frame.addEventListener("error", showFallback);

  new MutationObserver(() => {
    if (!slide.classList.contains("is-active")) {
      fallback.pause();
      return;
    }
    if (frame.getAttribute("src")) armTimer();
  }).observe(slide, { attributes: true, attributeFilter: ["class"] });
}

function fitSlide(slide) {
  const scale = slide.querySelector(".slide-scale");
  const fit = slide.querySelector(".slide-fit");
  if (!scale || !fit) return;
  scale.style.setProperty("--fit-scale", "1");
  const naturalHeight = scale.scrollHeight;
  const naturalWidth = scale.offsetWidth || 1400;
  const availableHeight = fit.clientHeight;
  const availableWidth = fit.clientWidth;
  if (!naturalHeight || !availableHeight) return;
  const ratio = Math.min(availableWidth / naturalWidth, availableHeight / naturalHeight, 1);
  scale.style.setProperty("--fit-scale", String(Math.max(0.05, ratio)));
  scale.style.marginLeft = `${Math.max(0, (availableWidth - naturalWidth * ratio) / 2)}px`;
}

function fitAll() {
  slides.forEach(fitSlide);
}

function updateNav(index) {
  navButtons.forEach((button, i) => {
    const [start, end] = chapterRanges[i];
    const active = index >= start && index <= end;
    button.classList.toggle("is-active", active);
    if (active) button.setAttribute("aria-current", "location");
    else button.removeAttribute("aria-current");
  });
}

const preloadState = { images:new Map(), videos:new Map(), warm:false };

function preloadImage(src) {
  if (!src || preloadState.images.has(src)) return preloadState.images.get(src);
  const img = new Image();
  img.decoding = "async";
  const entry = { img, done:false, ok:false };
  img.onload = () => { entry.done = true; entry.ok = true; };
  img.onerror = () => { entry.done = true; entry.ok = false; };
  img.src = src;
  preloadState.images.set(src, entry);
  return entry;
}

function warmVideosForSlide(index) {
  const targets = [];
  if (index >= 8 && index <= 13) {
    slides[9]?.querySelectorAll("video[data-src]").forEach(v => targets.push(v));
    slides[10]?.querySelectorAll("video[data-src]").forEach(v => targets.push(v));
    slides[11]?.querySelectorAll("video[data-src]").forEach(v => targets.push(v));
  }
  if (index >= 12) {
    slides[13]?.querySelectorAll("video[data-src]").forEach(v => targets.push(v));
  }
  if (index >= 13) {
    const finale = document.getElementById("product-fallback-final");
    if (finale && !finale.dataset.warmed) {
      finale.dataset.warmed = "1";
      finale.preload = "auto";
      finale.load();
    }
  }
  targets.forEach(video => {
    const src = video.dataset.src || video.querySelector("source")?.getAttribute("src");
    if (!src || preloadState.videos.has(src)) return;
    preloadState.videos.set(src, true);
    const probe = document.createElement("video");
    probe.preload = "metadata";
    probe.muted = true;
    probe.src = src;
  });
}

function warmImagesForSlide(index) {
  const next = slides[index + 1];
  if (!next) return;
  next.querySelectorAll("img").forEach(img => {
    const src = img.currentSrc || img.getAttribute("src");
    if (src) preloadImage(src);
  });
}

function showSlide(index) {
  current = Math.max(0, Math.min(slides.length - 1, index));
  if (index >= 5) preloadDefine();
  if (preloadState.warm) { warmImagesForSlide(current); warmVideosForSlide(current); }
  slides.forEach((slide, i) => {
    const active = i === current;
    slide.classList.toggle("is-active", active);
    slide.setAttribute("aria-hidden", String(!active));
    if (active) {
      requestAnimationFrame(() => {
        fitSlide(slide);
        fitTadaEmbeds(slide);
      });
      slide.querySelectorAll("iframe[data-lazy-src]").forEach(frame => {
        if (!frame.getAttribute("src")) frame.src = frame.dataset.lazySrc;
      });
    }
  });
  updateNav(current);
}

function showImage(index) {
  if (!gallery.length) return;
  galleryIndex = (index + gallery.length) % gallery.length;
  const link = gallery[galleryIndex];
  dialogImage.src = link.href;
  dialogImage.alt = link.querySelector("img")?.alt ?? "";
  dialogCaption.textContent = link.closest("figure")?.querySelector("figcaption")?.textContent ?? "";
  dialogCount.textContent = `${galleryIndex + 1} / ${gallery.length}`;
  dialogNav.hidden = gallery.length < 2;
}

function initFeatureDetails() {
  const slide = document.querySelector(".d5-core");
  if (!slide || slide.dataset.featureReady) return;
  slide.dataset.featureReady = "1";
  const views = [...slide.querySelectorAll("[data-feature-view]")];
  const tabs = [...slide.querySelectorAll(".d5-core-tabs [data-feature]")];
  function show(name) {
    views.forEach(view => { view.hidden = view.dataset.featureView !== name; });
    tabs.forEach(tab => tab.setAttribute("aria-selected", String(tab.dataset.feature === name)));
    slide.querySelectorAll(".d5-detail-video-player").forEach(video => {
      if (!video.getAttribute("src") && video.dataset.src) video.src = video.dataset.src;
      video.pause();
    });
    fitSlide(slide);
    const activeVideo = slide.querySelector(`[data-feature-view="${name}"] .d5-detail-video-player`);
    if (activeVideo && activeVideo.getAttribute("src")) {
      const played = activeVideo.play();
      if (played && typeof played.catch === "function") played.catch(() => {});
    }
  }
  tabs.forEach(tab => tab.addEventListener("click", () => show(tab.dataset.feature)));
  slide.querySelectorAll("[data-open-feature]").forEach(button => button.addEventListener("click", () => show(button.dataset.openFeature)));
  slide.querySelectorAll("[data-back-feature]").forEach(button => button.addEventListener("click", () => show("core")));
  slide.querySelectorAll("[data-detail-step]").forEach(button => {
    button.addEventListener("click", () => {
      const wrap = button.closest(".d5-detail-view");
      const img = wrap?.querySelector("img");
      const link = wrap?.querySelector("a.zoom");
      if (!img || !link) return;
      const base = link.getAttribute("href").substring(0, link.getAttribute("href").lastIndexOf("/") + 1);
      const file = button.dataset.detailStep;
      img.src = base + file;
      link.href = base + file;
      wrap.querySelectorAll("[data-detail-step]").forEach(b => b.setAttribute("aria-selected", String(b === button)));
      const box = wrap.querySelector(".d5-detail-video");
      const video = wrap.querySelector(".d5-detail-video-player");
      const note = wrap.querySelector(".d5-detail-note");
      const src = button.dataset.detailVideo || "";
      if (box && video) {
        video.pause();
        box.hidden = !src;
        if (src) {
          if (video.getAttribute("src") !== src) video.src = src;
          const played = video.play();
          if (played && typeof played.catch === "function") played.catch(() => {});
        }
      }
      if (note) note.hidden = !!src;
    });
  });
  const detailVideos = [...slide.querySelectorAll(".d5-detail-video-player")];
  function pauseDetailVideos() { detailVideos.forEach(video => video.pause()); }
  function playVisibleDetailVideo() {
    const view = slide.querySelector("[data-feature-view]:not([hidden])");
    const video = view?.querySelector(".d5-detail-video-player");
    if (!video || !video.getAttribute("src")) return;
    const played = video.play();
    if (played && typeof played.catch === "function") played.catch(() => {});
  }
  const stepObserver = new MutationObserver(() => {
    if (!slide.classList.contains("is-active")) { pauseDetailVideos(); return; }
    playVisibleDetailVideo();
  });
  stepObserver.observe(slide, { attributes: true, attributeFilter: ["class"] });
}

function initIterate6() {
  const slide = document.querySelector(".slide-t6");
  if (!slide || slide.dataset.t6Ready) return;
  slide.dataset.t6Ready = "1";
  const tabs = [...slide.querySelectorAll(".t6-tabs [data-t6]")];
  const views = [...slide.querySelectorAll("[data-t6-view]")];
  const videos = [...slide.querySelectorAll(".t6-video")];

  function currentView() {
    return views.find(view => !view.hidden);
  }

  function ensureVideo(video) {
    if (video.dataset.t6Loaded) return;
    const src = video.dataset.src || video.querySelector("source")?.getAttribute("src");
    if (!src) return;
    video.src = src;
    video.load();
    video.dataset.t6Loaded = "1";
  }

  function pauseAll() {
    videos.forEach(video => video.pause());
  }

  function playCurrent() {
    const video = currentView()?.querySelector(".t6-video");
    if (!video) return;
    ensureVideo(video);
    video.muted = true;
    const played = video.play();
    if (played && typeof played.catch === "function") played.catch(() => {});
  }

  videos.forEach(video => {
    const wrap = video.closest(".t6-video-wrap");
    if (!wrap || wrap.querySelector(".t6-video-actions")) return;
    const actions = document.createElement("div");
    actions.className = "t6-video-actions";
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = "▶ 手动播放录像";
    const error = document.createElement("p");
    error.className = "t6-video-error";
    error.hidden = true;
    const href = video.dataset.src || video.querySelector("source")?.getAttribute("src") || "#";
    const link = document.createElement("a");
    link.href = href;
    link.target = "_blank";
    link.rel = "noopener";
    link.textContent = "打开原始录像";
    error.append("录像加载失败，请 ", link, "。");
    actions.append(button, error);
    wrap.append(actions);
    button.addEventListener("click", () => {
      ensureVideo(video);
      video.muted = false;
      const played = video.play();
      if (played && typeof played.catch === "function") played.catch(() => { error.hidden = false; });
    });
    video.addEventListener("error", () => { error.hidden = false; });
    video.addEventListener("loadeddata", () => { error.hidden = true; });
  });

  function show(name) {
    pauseAll();
    views.forEach(view => { view.hidden = view.dataset.t6View !== name; });
    tabs.forEach(tab => tab.setAttribute("aria-selected", String(tab.dataset.t6 === name)));
    fitSlide(slide);
    playCurrent();
  }

  tabs.forEach(tab => tab.addEventListener("click", () => show(tab.dataset.t6)));

  new MutationObserver(() => {
    if (slide.classList.contains("is-active")) playCurrent();
    else pauseAll();
  }).observe(slide, { attributes: true, attributeFilter: ["class"] });
}

initTabs(stage);
initAffinity(stage);
initFilters(stage);
let definePreloaded = false;
function preloadDefine() {
  if (definePreloaded) return;
  definePreloaded = true;
  const img = new Image();
  img.decoding = "async";
  img.src = "assets/define/用户画像和旅程地图.webp";
}

function initPresentationPreparer() {
  const enabled = new URLSearchParams(location.search).has("prepare");
  if (!enabled) { preloadState.warm = true; return; }
  const panel = document.createElement("div");
  panel.id = "prep-panel";
  panel.setAttribute("role", "status");
  panel.style.cssText = "position:fixed;right:18px;bottom:18px;z-index:9999;width:340px;max-height:60vh;overflow:auto;padding:14px 16px;border-radius:12px;background:rgba(24,18,14,.94);color:#fff9ed;font:14px/1.5 system-ui,sans-serif;box-shadow:0 8px 30px rgba(0,0,0,.35)";
  panel.innerHTML = '<div style="font-weight:700;margin-bottom:8px">汇报资源准备</div><div id="prep-status">准备中…</div><div id="prep-fails" style="margin-top:8px;color:#ffb4a0"></div>';
  document.body.appendChild(panel);
  const status = panel.querySelector("#prep-status");
  const fails = panel.querySelector("#prep-fails");
  const imageSrcs = [...new Set([...document.querySelectorAll("img")].map(i => i.getAttribute("src")).filter(Boolean))];
  const videoSrcs = [...new Set([...document.querySelectorAll("video[data-src],video source")].map(v => v.dataset.src || v.getAttribute("src")).filter(Boolean))];
  const failures = [];
  let done = 0;
  const total = imageSrcs.length + videoSrcs.length;
  const tick = () => { done++; status.textContent = `正在准备 ${done} / ${total}`; };
  imageSrcs.forEach(src => {
    const e = preloadImage(src);
    const check = () => { if (e.done) { tick(); if (!e.ok) failures.push(`图片 ${src}`); renderFails(); } else setTimeout(check, 120); };
    check();
  });
  videoSrcs.forEach(src => {
    const probe = document.createElement("video");
    probe.preload = "metadata"; probe.muted = true;
    let settled = false;
    const settle = ok => { if (settled) return; settled = true; tick(); if (!ok) failures.push(`视频 ${src}`); renderFails(); };
    probe.onloadedmetadata = () => settle(true);
    probe.onerror = () => settle(false);
    probe.src = src;
    setTimeout(() => settle(false), 15000);
  });
  function renderFails() {
    if (failures.length) fails.innerHTML = "加载失败：<br>" + failures.map(f => escapeHtml(f)).join("<br>");
  }
  function escapeHtml(s) { return s.replace(/[&<>]/g, c => ({ '&':'&amp;','<':'&lt;','>':'&gt;' }[c])); }
  const wait = setInterval(() => {
    if (done >= total) {
      clearInterval(wait);
      status.textContent = failures.length ? `准备结束，${failures.length} 项失败` : "汇报资源已准备完成";
      status.style.color = failures.length ? "#ffb4a0" : "#9fe0a6";
    }
  }, 200);
  preloadState.warm = true;
}

initPresentationPreparer();
initFeatureDetails();
initIterate6();
initFinalProductFallback();
slides.forEach(slide => {
  slide.querySelectorAll("img").forEach(img => {
    img.addEventListener("load", () => fitSlide(slide));
  });
});

navButtons.forEach(button => {
  button.addEventListener("click", () => showSlide(Number(button.dataset.slideGo)));
});

stage.addEventListener("wheel", event => {
  if (dialog.open) return;
  event.preventDefault();
  if (Math.abs(event.deltaY) < 8 || wheelLocked) return;
  wheelLocked = true;
  showSlide(current + (event.deltaY > 0 ? 1 : -1));
  setTimeout(() => { wheelLocked = false; }, 180);
}, { passive:false });

document.addEventListener("keydown", event => {
  if (dialog.open) return;
  const next = ["ArrowDown", "ArrowRight", "PageDown", " "];
  const prev = ["ArrowUp", "ArrowLeft", "PageUp"];
  if (next.includes(event.key)) { event.preventDefault(); showSlide(current + 1); }
  else if (prev.includes(event.key)) { event.preventDefault(); showSlide(current - 1); }
  else if (event.key === "Home") { event.preventDefault(); showSlide(0); }
  else if (event.key === "End") { event.preventDefault(); showSlide(slides.length - 1); }
});

document.addEventListener("click", event => {
  const link = event.target.closest("[data-gallery]");
  if (!link || typeof dialog.showModal !== "function" || event.metaKey || event.ctrlKey || event.altKey || event.shiftKey) return;
  event.preventDefault();
  galleryOpener = link;
  gallery = [...stage.querySelectorAll("[data-gallery]")].filter(item => {
    const slide = item.closest("[data-slide]");
    return item.getClientRects().length && (!slide || slide.classList.contains("is-active"));
  });
  showImage(gallery.indexOf(link));
  dialog.showModal();
  closeButton.focus();
});
closeButton.addEventListener("click", () => dialog.close());
dialog.addEventListener("click", event => {
  if (event.target === dialog) dialog.close();
  const step = event.target.closest("[data-lightbox-step]");
  if (step) showImage(galleryIndex + Number(step.dataset.lightboxStep));
});
dialog.addEventListener("keydown", event => {
  if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
  event.preventDefault();
  showImage(galleryIndex + (event.key === "ArrowLeft" ? -1 : 1));
});
dialog.addEventListener("close", () => galleryOpener?.focus({ preventScroll:true }));

window.addEventListener("resize", () => { fitAll(); fitTadaEmbeds(stage); });
requestAnimationFrame(() => { fitAll(); showSlide(0); });
setTimeout(fitAll, 500);
