const reviewsItemsBlock = document.querySelector('.reviews-items');

if (reviewsItemsBlock) {
  const macyReviewsGrid = Macy({
    container: '.reviews-items',
    margin: 10,
    columns: 3,
    breakAt: {
      1100: 2,
      768: 1,
    }
  });
}


const header = document.querySelector("header");
window.addEventListener("scroll", function () {
  const headerTop = document.querySelector("header");
  if (window.scrollY > 0) {
    headerTop.classList.add("moved");
  } else {
    headerTop.classList.remove("moved");
  }
});


// const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
// const savedTheme = localStorage.getItem("theme");

// const currentTheme = savedTheme || (prefersDark ? "dark" : "light");
// document.documentElement.setAttribute("data-theme", currentTheme);
// updateImages(currentTheme);

// function updateImages(theme) {
//   const images = document.querySelectorAll("img[data-light][data-dark]");
//   images.forEach(img => {
//     img.src = theme === "dark" ? img.dataset.dark : img.dataset.light;
//   });
// }

const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const savedTheme = localStorage.getItem("theme");

const currentTheme = savedTheme || (prefersDark ? "dark" : "light");
setTheme(currentTheme);

function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
  updateImages(theme);
}

function updateImages(theme) {
  document.querySelectorAll("img[data-light][data-dark]").forEach(img => {
    img.src = theme === "dark" ? img.dataset.dark : img.dataset.light;
  });
}

document.querySelectorAll(".theme-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    setTheme(btn.dataset.themeBtn);
  });
});





document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".animate-item");
  if (!items.length) return;

  const observer = new IntersectionObserver(
    (entries) =>
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const index = [...items].indexOf(entry.target);
        entry.target.style.transitionDelay = `${0.15}s`;
        entry.target.classList.add("visible");

        observer.unobserve(entry.target);
      }),
    { threshold: 0.1 }
  );

  items.forEach((item) => observer.observe(item));
});




document.addEventListener("DOMContentLoaded", () => {
  const animatedItems = document.querySelectorAll(
    ".fade-left, .fade-right, .fade-top, .fade-bottom"
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
        
        }
      });
    },
    {
      threshold: 0.15, 
    }
  );

  animatedItems.forEach((item) => observer.observe(item));
});


$(function () {
  let Accordion = function (el, multiple) {
    this.el = el || {};
    this.multiple = multiple || false;
    let links = this.el.find(".link");
    links.on("click", { el: this.el, multiple: this.multiple }, this.dropdown);
  };

  Accordion.prototype.dropdown = function (e) {
    let $el = e.data.el;
    let $this = $(this),
      $next = $this.next();

    $next.slideToggle();

    if (!e.data.multiple) {
      $el.find(".submenu").not($next).slideUp();
    }

    if (!$this.hasClass("open")) {
      $(".link").removeClass("open");
      $this.addClass("open");
    } else {
      $this.removeClass("open");
    }
  };

  let accordion = new Accordion($("#accordion"), false);


});



document.addEventListener("DOMContentLoaded", () => {
  const NWrappers = document.querySelectorAll(".language-select-wrapper");
  if (!NWrappers.length) return;

  NWrappers.forEach((NWrapper) => {
    const NHeader = NWrapper.querySelector(".language-select-header");
    const NHeaderText = NHeader?.querySelector("p");
    const NHeaderFlagImg = NHeader?.querySelector(".l-select-flag img");
    const NCloseBtn = NWrapper.querySelector(".icon-close");
    const NItems = NWrapper.querySelectorAll(".language-sub-item");

    if (!NHeader || !NItems.length) return;

   NHeader.addEventListener("click", (e) => {
      e.stopPropagation();
      NWrapper.classList.toggle("active");
    });

   if (NCloseBtn) {
      NCloseBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        NWrapper.classList.remove("active");
      });
    }

    NItems.forEach((NItem) => {
      NItem.addEventListener("click", (e) => {
        e.stopPropagation();

        NItems.forEach((item) => item.classList.remove("active"));
        NItem.classList.add("active");

        const NText = NItem.querySelector("p")?.innerText.trim();
        if (NText && NHeaderText) {
          NHeaderText.innerText = NText;
        }

        const NItemImg = NItem.querySelector("img");
        if (NItemImg && NHeaderFlagImg) {
          NHeaderFlagImg.src = NItemImg.src;
          NHeaderFlagImg.alt = NItemImg.alt || "flag";
        }

        NWrapper.classList.remove("active");
      });
    });

    document.addEventListener("click", (e) => {
      if (!NWrapper.contains(e.target)) {
        NWrapper.classList.remove("active");
      }
    });
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const areasSectionElement = document.querySelector(".areas-cnt");

  if (!areasSectionElement) return;

  const areasTabElements = areasSectionElement.querySelectorAll(".areas-tab-wrapper");
  const areasContentElements = areasSectionElement.querySelectorAll(".areas-right-cnt");

  if (!areasTabElements.length || !areasContentElements.length) return;

  function clearActiveArea() {
    areasTabElements.forEach((singleTabElement) => {
      singleTabElement.classList.remove("active");
    });

    areasContentElements.forEach((singleContentElement) => {
      singleContentElement.classList.remove("active");
      singleContentElement.style.display = "none";
    });
  }

  function setActiveArea(targetAreaId) {
    areasTabElements.forEach((singleTabElement) => {
      const singleTabId = singleTabElement.dataset.id;

      if (singleTabId === targetAreaId) {
        singleTabElement.classList.add("active");
      } else {
        singleTabElement.classList.remove("active");
      }
    });

    areasContentElements.forEach((singleContentElement) => {
      const singleContentId = singleContentElement.dataset.id;

      if (singleContentId === targetAreaId) {
        singleContentElement.classList.add("active");
        singleContentElement.style.display = "block";
      } else {
        singleContentElement.classList.remove("active");
        singleContentElement.style.display = "none";
      }
    });
  }

  const firstAreaTabElement = areasTabElements[0];

  if (firstAreaTabElement && firstAreaTabElement.dataset.id) {
    setActiveArea(firstAreaTabElement.dataset.id);
  }

  areasTabElements.forEach((singleTabElement) => {
    singleTabElement.addEventListener("click", function () {
      const clickedAreaId = this.dataset.id;

      if (!clickedAreaId) return;

      if (window.innerWidth < 992 && this.classList.contains("active")) {
        clearActiveArea();
      } else {
        setActiveArea(clickedAreaId);
      }
    });
  });
});





  document.addEventListener("DOMContentLoaded", function () {
    const catalog = document.querySelector("[data-catalog]");
    if (!catalog) return;

    const tabButtons = catalog.querySelectorAll("[data-tab-btn]");
    const tabPanels = catalog.querySelectorAll("[data-tab-content]");

    const subtabButtons = catalog.querySelectorAll("[data-subtab-btn]");
    const subtabPanels = catalog.querySelectorAll("[data-subtab-content]");

    tabButtons.forEach((button) => {
      button.addEventListener("click", function () {
        const target = this.getAttribute("data-tab-btn");

        tabButtons.forEach((btn) => btn.classList.remove("is-active"));
        this.classList.add("is-active");

        tabPanels.forEach((panel) => {
          panel.classList.toggle(
            "is-active",
            panel.getAttribute("data-tab-content") === target
          );
        });
      });
    });

    subtabButtons.forEach((button) => {
      button.addEventListener("click", function () {
        const target = this.getAttribute("data-subtab-btn");

        subtabButtons.forEach((btn) => btn.classList.remove("is-active"));
        this.classList.add("is-active");

        subtabPanels.forEach((panel) => {
          panel.classList.toggle(
            "is-active",
            panel.getAttribute("data-subtab-content") === target
          );
        });
      });
    });
  });



  document.addEventListener("DOMContentLoaded", () => {
  const tabsWrapper = document.querySelector(".possibilities-tabs");
  const buttons = document.querySelectorAll(".possibilities-tabs button");
  const columns = document.querySelectorAll(".possibilities-column");

  if (!tabsWrapper || !buttons.length || !columns.length) return;

  function showTab(value) {
    buttons.forEach((button) => {
      button.classList.toggle("active", button.dataset.val === value);
    });

    columns.forEach((column) => {
      column.style.display = "none";
    });

    columns.forEach((column) => {
      if (column.dataset.val === value) {
        column.style.display = "flex";
      }
    });
  }

  const firstButton = buttons[0];
  const firstValue = firstButton.dataset.val;

  if (firstValue) {
    showTab(firstValue);
  }

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const value = button.dataset.val;
      if (!value) return;

      showTab(value);
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const compareMobileTabsButtons = document.querySelectorAll('.compare-tabs-mobile button');
  const compareTableBlock = document.querySelector('.compare-table');

  if (!compareMobileTabsButtons.length || !compareTableBlock) return;

  const compareFeatureColumn = compareTableBlock.querySelector('.compare-col--feature');
  const compareAccentColumn = compareTableBlock.querySelector('.compare-col--accent');
  const compareOtherColumn = compareTableBlock.querySelector('.compare-col--other');

  if (!compareFeatureColumn || !compareAccentColumn || !compareOtherColumn) return;

  const setCompareMobileActiveTab = (targetSelector) => {
    compareMobileTabsButtons.forEach((compareTabButton) => {
      compareTabButton.classList.toggle(
        'active',
        compareTabButton.dataset.target === targetSelector
      );
    });
  };

  const scrollCompareTableToColumn = (compareTargetColumn) => {
    if (!compareTargetColumn) return;

    compareTableBlock.scrollTo({
      left: compareTargetColumn.offsetLeft,
      behavior: 'smooth'
    });
  };

  const switchCompareMobileColumns = (targetSelector) => {
    setCompareMobileActiveTab(targetSelector);

    if (targetSelector === '.compare-col--other') {
      compareTableBlock.classList.add('show-other');

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          scrollCompareTableToColumn(compareOtherColumn);
        });
      });

      return;
    }

    compareTableBlock.classList.remove('show-other');

    compareTableBlock.scrollTo({
      left: 0,
      behavior: 'smooth'
    });
  };

  const compareDefaultActiveButton =
    document.querySelector('.compare-tabs-mobile button.active') ||
    compareMobileTabsButtons[0];

  if (compareDefaultActiveButton) {
    switchCompareMobileColumns(compareDefaultActiveButton.dataset.target);
  }

  compareMobileTabsButtons.forEach((compareTabButton) => {
    compareTabButton.addEventListener('click', () => {
      const compareTargetSelector = compareTabButton.dataset.target;
      if (!compareTargetSelector) return;

      switchCompareMobileColumns(compareTargetSelector);
    });
  });
});



document.addEventListener("DOMContentLoaded", function () {
  const HEADER_HEIGHT = 100;

  const sideNavElement = document.getElementById("sideNav");
  const templatesSectionElement = document.getElementById("templates");
  const navItemElements = document.querySelectorAll(".side-nav__item");
  const sectionElements = document.querySelectorAll(
    "#templates, #advantages, #features, #export, #compare, #areas, #reviews, #faq"
  );

  if (!sideNavElement || !templatesSectionElement || !navItemElements.length) return;

  function toggleSideNavVisibility() {
    const templatesTop = templatesSectionElement.offsetTop;

    if (window.scrollY >= templatesTop - HEADER_HEIGHT) {
      sideNavElement.classList.add("show");
    } else {
      sideNavElement.classList.remove("show");
    }
  }

  function setActiveNavItem() {
    let currentSectionId = "";

    sectionElements.forEach((sectionElement) => {
      const sectionTop = sectionElement.offsetTop - HEADER_HEIGHT - 40;
      const sectionBottom = sectionTop + sectionElement.offsetHeight;

      if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
        currentSectionId = sectionElement.id;
      }
    });

    navItemElements.forEach((navItemElement) => {
      navItemElement.classList.toggle(
        "active",
        navItemElement.dataset.target === currentSectionId
      );
    });
  }

  navItemElements.forEach((navItemElement) => {
    navItemElement.addEventListener("click", function (event) {
      event.preventDefault();

      const targetId = this.dataset.target;
      const targetElement = document.getElementById(targetId);

      if (!targetElement) return;

      const targetTop = targetElement.offsetTop - HEADER_HEIGHT;

      window.scrollTo({
        top: targetTop,
        behavior: "smooth",
      });
    });
  });

  toggleSideNavVisibility();
  setActiveNavItem();

  window.addEventListener("scroll", function () {
    toggleSideNavVisibility();
    setActiveNavItem();
  });

  window.addEventListener("resize", function () {
    toggleSideNavVisibility();
    setActiveNavItem();
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const heroGenerateElement = document.querySelector(".hero-generate");
  const heroGenerateInputElement = heroGenerateElement?.querySelector("input");

  if (!heroGenerateElement || !heroGenerateInputElement) return;

  heroGenerateInputElement.addEventListener("focus", function () {
    heroGenerateElement.classList.add("active");
  });

  heroGenerateInputElement.addEventListener("blur", function () {
    heroGenerateElement.classList.remove("active");
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const mobileSideNavBlock = document.querySelector(".side-nav-mobile");
  const mobileSideNavScrollContainer = document.querySelector(".side-nav-mobile-wrapper ul");
  const mobileTemplatesBlock = document.getElementById("templates");

  if (!mobileSideNavBlock || !mobileSideNavScrollContainer || !mobileTemplatesBlock) return;

  const mobileSideNavLinks = mobileSideNavScrollContainer.querySelectorAll("a");
  const mobileHeaderOffsetValue = 100;

  if (!mobileSideNavLinks.length) return;

  const mobileSectionsData = [];

  mobileSideNavLinks.forEach((mobileLinkElement) => {
    const mobileSectionId =
      mobileLinkElement.getAttribute("data-target") ||
      mobileLinkElement.getAttribute("href")?.replace("#", "");

    if (!mobileSectionId) return;

    const mobileTargetSectionElement = document.getElementById(mobileSectionId);

    if (!mobileTargetSectionElement) return;

    mobileSectionsData.push({
      link: mobileLinkElement,
      section: mobileTargetSectionElement,
    });

    mobileLinkElement.addEventListener("click", (event) => {
      event.preventDefault();

      const mobileTargetTopPosition =
        mobileTargetSectionElement.getBoundingClientRect().top +
        window.pageYOffset -
        mobileHeaderOffsetValue;

      window.scrollTo({
        top: mobileTargetTopPosition,
        behavior: "smooth",
      });

      setTimeout(() => {
        scrollMobileActiveLinkIntoView(mobileLinkElement);
      }, 200);
    });
  });

  if (!mobileSectionsData.length) return;

  const removeMobileActiveClasses = () => {
    mobileSectionsData.forEach((mobileItem) => {
      mobileItem.link.classList.remove("active");
    });
  };

  const scrollMobileActiveLinkIntoView = (mobileActiveLinkElement) => {
    if (!mobileActiveLinkElement) return;

    mobileActiveLinkElement.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  };

  const updateMobileSideNavVisibility = () => {
    const mobileTemplatesStartPoint =
      mobileTemplatesBlock.offsetTop - mobileHeaderOffsetValue;

    if (window.scrollY >= mobileTemplatesStartPoint) {
      mobileSideNavBlock.classList.add("active");
    } else {
      mobileSideNavBlock.classList.remove("active");
    }
  };

  const updateMobileHorizontalEdgeClasses = () => {
    const mobileCurrentScrollLeft = mobileSideNavScrollContainer.scrollLeft;
    const mobileVisibleWidth = mobileSideNavScrollContainer.clientWidth;
    const mobileFullScrollWidth = mobileSideNavScrollContainer.scrollWidth;

    mobileSideNavBlock.classList.remove("first", "last");

    if (mobileCurrentScrollLeft <= 2) {
      mobileSideNavBlock.classList.add("first");
    }

    if (mobileCurrentScrollLeft + mobileVisibleWidth >= mobileFullScrollWidth - 2) {
      mobileSideNavBlock.classList.add("last");
    }
  };

  let mobileLastActiveLinkElement = null;

  const updateMobileActiveLinkByScroll = () => {
    const mobileCurrentScrollPoint = window.scrollY + mobileHeaderOffsetValue + 20;
    let mobileNewActiveLinkElement = null;

    mobileSectionsData.forEach((mobileItem) => {
      const mobileSectionTopPoint = mobileItem.section.offsetTop;
      const mobileSectionBottomPoint =
        mobileSectionTopPoint + mobileItem.section.offsetHeight;

      if (
        mobileCurrentScrollPoint >= mobileSectionTopPoint &&
        mobileCurrentScrollPoint < mobileSectionBottomPoint
      ) {
        mobileNewActiveLinkElement = mobileItem.link;
      }
    });

    removeMobileActiveClasses();

    if (mobileNewActiveLinkElement) {
      mobileNewActiveLinkElement.classList.add("active");

      if (mobileLastActiveLinkElement !== mobileNewActiveLinkElement) {
        mobileLastActiveLinkElement = mobileNewActiveLinkElement;
        scrollMobileActiveLinkIntoView(mobileNewActiveLinkElement);
      }
    } else {
      mobileLastActiveLinkElement = null;
    }
  };

  const updateMobileSideNavAllStates = () => {
    updateMobileSideNavVisibility();
    updateMobileActiveLinkByScroll();
    updateMobileHorizontalEdgeClasses();
  };

  updateMobileSideNavAllStates();

  window.addEventListener("scroll", updateMobileSideNavAllStates);
  window.addEventListener("resize", updateMobileSideNavAllStates);
  mobileSideNavScrollContainer.addEventListener("scroll", updateMobileHorizontalEdgeClasses);
});


document.addEventListener('DOMContentLoaded', function () {
  const templatesTabsWrapper = document.querySelector('.templates-tabs');
  const templatesTabButtons = document.querySelectorAll('.templates-tabs button');
  const templatesContentItems = document.querySelectorAll('.templates-items');

  if (templatesTabsWrapper && templatesTabButtons.length && templatesContentItems.length) {
    function setActiveTemplateTab(templateId) {
      templatesTabButtons.forEach(function (singleTemplateButton) {
        singleTemplateButton.classList.toggle(
          'active',
          singleTemplateButton.dataset.id === templateId
        );
      });

      templatesContentItems.forEach(function (singleTemplateContent) {
        if (singleTemplateContent.dataset.id === templateId) {
          singleTemplateContent.style.display = 'grid'; 
        } else {
          singleTemplateContent.style.display = 'none';
        }
      });
    }

    const firstTemplateButton = templatesTabButtons[0];
    const firstTemplateId = firstTemplateButton.dataset.id;

    setActiveTemplateTab(firstTemplateId);

    templatesTabButtons.forEach(function (singleTemplateButton) {
      singleTemplateButton.addEventListener('click', function () {
        const currentTemplateId = this.dataset.id;
        setActiveTemplateTab(currentTemplateId);
      });
    });
  }
});