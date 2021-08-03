const tabs = document.querySelectorAll('a.tab');
const actives = document.querySelectorAll('tabactive');

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tab.classList.toggle('tabactive')
  });
});
