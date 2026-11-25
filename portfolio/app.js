const root = document.documentElement;

function initTabs(scope = document) {
  scope.querySelectorAll("[data-tabs]").forEach(tablist => {
    if (tablist.dataset.tabsReady) return;
    const section = tablist.parentElement?.querySelector(`[data-panels="${tablist.dataset.tabs}"]`) ?? document.querySelector(`[data-panels="${tablist.dataset.tabs}"]`);
    if (!section) return;
    tablist.dataset.tabsReady = "1";
    const namespace = `${tablist.dataset.tabs}-${Math.random().toString(36).slice(2, 8)}`;
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
        if (!Object.hasOwn(indexes, event.key)) return;
        event.preventDefault();
        select(indexes[event.key], true);
      });
    });
    select(0);
  });
}

function initAffinity(scope = document) {
  const tablist = scope.querySelector('[data-tabs="affinity"]');
  const shortcuts = [...scope.querySelectorAll("[data-affinity-shortcut]")];
  if (!tablist || !shortcuts.length || tablist.dataset.affinityReady) return;
  tablist.dataset.affinityReady = "1";
  function sync(name) {
    shortcuts.forEach(button => {
      const active = button.dataset.affinityShortcut === name;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", String(active));
    });
  }
  shortcuts.forEach(button => {
    button.addEventListener("click", () => {
      tablist.querySelector(`[data-tab="${button.dataset.affinityShortcut}"]`)?.click();
    });
  });
  new MutationObserver(() => sync(tablist.querySelector('[aria-selected="true"]')?.dataset.tab)).observe(tablist, { subtree:true, attributes:true, attributeFilter:["aria-selected"] });
  sync(tablist.querySelector('[aria-selected="true"]')?.dataset.tab);
}

initTabs();
initAffinity();

const productFrame = document.querySelector("#product-frame");
const productViewButtons = [...document.querySelectorAll("[data-product-view]")];
productViewButtons.forEach(button => {
  button.addEventListener("click", () => {
    if (!productFrame) return;
    const view = button.dataset.productView;
    productFrame.src = `assets/product-app/assets/index.html?data=demo#/${view}`;
    productViewButtons.forEach(item => {
      const active = item === button;
      item.classList.toggle("is-active", active);
      item.setAttribute("aria-pressed", String(active));
    });
  });
});

const nav = document.querySelector(".site-nav");
const menuButton = document.querySelector(".menu-button");

function setMenu(open) {
  nav.classList.toggle("is-open", open);
  menuButton.setAttribute("aria-expanded", String(open));
}

menuButton.addEventListener("click", () => setMenu(!nav.classList.contains("is-open")));
nav.addEventListener("click", event => {
  if (event.target.closest("a")) setMenu(false);
});
document.addEventListener("keydown", event => {
  if (event.key === "Escape" && nav.classList.contains("is-open")) {
    setMenu(false);
    menuButton.focus();
  }
});
matchMedia("(min-width: 651px)").addEventListener("change", () => setMenu(false));

function fitTadaEmbeds(scope = document) {
  scope.querySelectorAll(".tada-phone-embed").forEach(el => {
    const scaler = el.querySelector(".tada-phone-scale");
    if (!scaler) return;
    const ratio = el.clientWidth / 414;
    scaler.style.transform = `scale(${Number.isFinite(ratio) && ratio > 0 ? ratio : 1})`;
  });
}
fitTadaEmbeds();
window.addEventListener("resize", () => fitTadaEmbeds());

const sections = [...document.querySelectorAll("#problem,#research,#definition,#solution,#brand,#sketches,#features,#testing,#iteration,#implementation,#product-archive,#demo,#outcome")];
const navigation = [...nav.querySelectorAll("a")];
const sectionAliases = { sketches:"brand", features:"brand", implementation:"brand", iteration:"testing", "product-archive":"testing", outcome:"demo" };
const designSubnav = document.querySelector("#design-subnav");
const designSections = [...document.querySelectorAll("#brand,#sketches,#features,#implementation")];
const designLinks = designSubnav ? [...designSubnav.querySelectorAll("[data-design-step]")] : [];
let pending = false;
function updateDesignNav() {
  if (!designSubnav || !designSections.length) return;
  const marker = Math.min(190, innerHeight * .26);
  const firstTop = designSections[0].getBoundingClientRect().top;
  const lastBottom = designSections.at(-1).getBoundingClientRect().bottom;
  const visible = firstTop < marker && lastBottom > marker;
  designSubnav.classList.toggle("is-visible", visible);
  const active = designSections.filter(section => section.getBoundingClientRect().top <= marker).at(-1) ?? designSections[0];
  designLinks.forEach(link => {
    const selected = link.dataset.designStep === active.id;
    link.classList.toggle("is-active", selected);
    if (selected) link.setAttribute("aria-current", "location");
    else link.removeAttribute("aria-current");
  });
}
function updateProgress() {
  const distance = root.scrollHeight - innerHeight;
  const ratio = distance > 0 ? Math.min(1, Math.max(0, scrollY / distance)) : 0;
  root.style.setProperty("--progress", ratio);
  const section = sections.findLast(item => item.getBoundingClientRect().top < Math.min(190, innerHeight * .26));
  const current = section ? (sectionAliases[section.id] ?? section.id) : "top";
  navigation.forEach(link => {
    if (link.hash === `#${current}`) link.setAttribute("aria-current", "location");
    else link.removeAttribute("aria-current");
  });
  updateDesignNav();
  pending = false;
}

function requestProgress() {
  if (pending) return;
  pending = true;
  requestAnimationFrame(updateProgress);
}
window.addEventListener("scroll", requestProgress, { passive:true });
window.addEventListener("resize", requestProgress);
window.addEventListener("load", requestProgress);
requestProgress();

const dialog = document.querySelector("#lightbox");
const dialogImage = document.querySelector("#lightbox-image");
const dialogCaption = document.querySelector("#lightbox-caption");
const dialogCount = document.querySelector("#lightbox-count");
const dialogNav = dialog.querySelector(".lightbox-nav");
const closeButton = dialog.querySelector(".close-lightbox");
let group = [];
let activeIndex = 0;
let opener = null;

function showImage(index) {
  activeIndex = (index + group.length) % group.length;
  const link = group[activeIndex];
  const description = link.closest("figure").querySelector("figcaption").textContent;
  dialogImage.src = link.href;
  dialogImage.alt = link.querySelector("img").alt;
  dialogCaption.textContent = description;
  dialogCount.textContent = `${activeIndex + 1} / ${group.length}`;
  dialogNav.hidden = group.length < 2;
}

document.addEventListener("click", event => {
  const link = event.target.closest("[data-gallery]");
  if (!link || typeof dialog.showModal !== "function" || event.metaKey || event.ctrlKey || event.altKey || event.shiftKey) return;
  event.preventDefault();
  opener = link;
  group = [...document.querySelectorAll("[data-gallery]")].filter(item => item.dataset.gallery === link.dataset.gallery && item.getClientRects().length);
  showImage(group.indexOf(link));
  dialog.showModal();
  closeButton.focus();
});
closeButton.addEventListener("click", () => dialog.close());
dialog.addEventListener("click", event => {
  if (event.target === dialog) {
    const rect = dialog.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
  }
  const step = event.target.closest("[data-lightbox-step]");
  if (step) showImage(activeIndex + Number(step.dataset.lightboxStep));
});
dialog.addEventListener("keydown", event => {
  if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
  event.preventDefault();
  showImage(activeIndex + (event.key === "ArrowLeft" ? -1 : 1));
});
dialog.addEventListener("close", () => opener?.focus({ preventScroll: true }));

const filter = document.querySelector("#query-category");
const rows = [...document.querySelectorAll("tr[data-category]")];
filter.addEventListener("change", () => {
  rows.forEach(row => { row.hidden = !!filter.value && row.dataset.category !== filter.value; });
  document.querySelector("#query-count").textContent = `${rows.filter(row => !row.hidden).length} 条`;
});

const targetDetails = document.querySelector("#search-records");
function showLinkedDetails() {
  if (location.hash === "#search-records") targetDetails.open = true;
}
window.addEventListener("hashchange", showLinkedDetails);
showLinkedDetails();

root.classList.add("js");
