document.addEventListener("DOMContentLoaded", () => {
  const mainVideo = document.getElementById("mainVideo");
  const mainSource = document.getElementById("mainSource");
  const mainTitle = document.getElementById("mainTitle");
  const mainMeta = document.getElementById("mainMeta");
  const mainDesc = document.getElementById("mainDesc");
  const creatorName = document.getElementById("creatorName");
  const creatorDesc = document.getElementById("creatorDesc");

  const items = document.querySelectorAll(".thumb-item");
  

  items.forEach(item => {
    item.addEventListener("click", () => {
      items.forEach(i => i.classList.remove("active"));
      item.classList.add("active");

      const videoSrc = item.dataset.video;
      const thumbSrc = item.dataset.thumb;
      const title = item.dataset.title;
      const meta = item.dataset.meta;
      const desc = item.dataset.desc;
      const cName = item.dataset.creator;
      const cDesc = item.dataset.creatorDesc;

      mainSource.src = videoSrc;
      mainVideo.poster = thumbSrc;
      mainVideo.load();
      mainVideo.play().catch(() => {});

      if (title) mainTitle.textContent = title;
      if (meta) mainMeta.textContent = meta;
      if (desc) mainDesc.textContent = desc;
      if (cName) creatorName.textContent = cName;
      if (cDesc) creatorDesc.textContent = cDesc;
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.querySelector(".menu-toggle");
  const navLinks = document.querySelectorAll(".main-nav a");

  if (menuBtn) {
    menuBtn.addEventListener("click", () => {
      document.body.classList.toggle("nav-open");
    });
  }

  // 메뉴 항목 눌렀을 때 자동으로 닫히게 (선택 사항)
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      document.body.classList.remove("nav-open");
    });
  });
});