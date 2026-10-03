/*
  CREATOR DATA
  ---------------------------------------------------------
  This is the main customization area.

  Replace the demo values below with the creator's real,
  accurate information. Do not publish invented metrics,
  testimonials or brand partnerships.
*/

const creator = {
  name: "Maya Johnson",
  niche: "Lifestyle • Beauty • UGC Creator",
  location: "Lagos, Nigeria",
  specialty: "Short-form storytelling",
  languages: "English",
  email: "hello@example.com",
  whatsapp: "2348000000000",
  whatsappDisplay: "+234 800 000 0000",

  social: {
    instagram: "https://instagram.com/",
    tiktok: "https://tiktok.com/",
    youtube: "https://youtube.com/"
  },

  stats: {
    instagramFollowers: "85K",
    tiktokFollowers: "120K",
    youtubeSubscribers: "42K",
    engagementRate: "4.8%"
  },

  audience: {
    location: "Nigeria",
    age: "18–34",
    focus: "Lifestyle & beauty",
    reach: "420K+"
  }
};

/* ---------- Small helpers ---------- */

function setText(selector, value) {
  document.querySelectorAll(selector).forEach((element) => {
    element.textContent = value;
  });
}

function setLink(selector, value) {
  document.querySelectorAll(selector).forEach((element) => {
    element.href = value;
  });
}

/* ---------- Apply creator data ---------- */

function applyCreatorData() {
  setText('[data-creator="name"]', creator.name);
  setText('[data-creator="niche"]', creator.niche);
  setText('[data-creator="location"]', creator.location);
  setText('[data-creator="specialty"]', creator.specialty);
  setText('[data-creator="languages"]', creator.languages);
  setText('[data-creator="email"]', creator.email);
  setText('[data-creator="whatsappDisplay"]', creator.whatsappDisplay);

  setText('[data-stat="instagramFollowers"]', creator.stats.instagramFollowers);
  setText('[data-stat="tiktokFollowers"]', creator.stats.tiktokFollowers);
  setText('[data-stat="youtubeSubscribers"]', creator.stats.youtubeSubscribers);
  setText('[data-stat="engagementRate"]', creator.stats.engagementRate);

  setText('[data-audience="location"]', creator.audience.location);
  setText('[data-audience="age"]', creator.audience.age);
  setText('[data-audience="focus"]', creator.audience.focus);
  setText('[data-audience="reach"]', creator.audience.reach);

  setLink('[data-social="instagram"]', creator.social.instagram);
  setLink('[data-social="tiktok"]', creator.social.tiktok);
  setLink('[data-social="youtube"]', creator.social.youtube);
  setLink('[data-email-link]', `mailto:${creator.email}`);
  setLink('[data-whatsapp-link]', `https://wa.me/${creator.whatsapp}`);

  document.title = `${creator.name} — Creator Portfolio`;
}

/* ---------- Mobile navigation ---------- */

const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector("#primary-menu");

function closeMenu() {
  if (!menuToggle || !navMenu) return;
  menuToggle.setAttribute("aria-expanded", "false");
  navMenu.classList.remove("is-open");
  document.body.classList.remove("menu-open");
}

if (menuToggle && navMenu) {
  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";

    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    navMenu.classList.toggle("is-open", !isOpen);
    document.body.classList.toggle("menu-open", !isOpen);
  });

  navMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });
}

/* ---------- Portfolio filtering ---------- */

const filterButtons = document.querySelectorAll("[data-filter]");
const workCards = document.querySelectorAll(".work-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedCategory = button.dataset.filter;

    filterButtons.forEach((item) => {
      item.classList.toggle("is-active", item === button);
    });

    workCards.forEach((card) => {
      const cardCategory = card.dataset.category;
      const shouldShow =
        selectedCategory === "all" || cardCategory === selectedCategory;

      card.classList.toggle("is-hidden", !shouldShow);
    });
  });
});

/* ---------- Static contact form -> mailto ---------- */

const collaborationForm = document.querySelector("#collaboration-form");

if (collaborationForm) {
  collaborationForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(collaborationForm);

    const name = formData.get("name");
    const company = formData.get("company");
    const email = formData.get("email");
    const campaign = formData.get("campaign");
    const budget = formData.get("budget");
    const message = formData.get("message");

    const subject = encodeURIComponent(
      `Collaboration inquiry — ${company}`
    );

    const body = encodeURIComponent(
`Hello ${creator.name},

My name is ${name} from ${company}.

Campaign type: ${campaign}
Budget range: ${budget}
My email: ${email}

Campaign details:
${message}

Thank you.`
    );

    window.location.href =
      `mailto:${creator.email}?subject=${subject}&body=${body}`;
  });
}

/* ---------- Footer year ---------- */

const year = document.querySelector("#year");
if (year) {
  year.textContent = new Date().getFullYear();
}

/* ---------- Start ---------- */

applyCreatorData();
