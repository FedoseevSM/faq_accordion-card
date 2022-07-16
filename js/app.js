document.querySelectorAll(".accordion__trigger").forEach((item) => {
  item.addEventListener("click", () => {
    const parentAccordion = item.parentNode
    if (parentAccordion.classList.contains("accordion__item--active")) {
      parentAccordion.classList.remove("accordion__item--active")
    } else {
      document
        .querySelectorAll(".accordion__item")
        .forEach((childAccordion) => {
          childAccordion.classList.remove("accordion__item--active")
          parentAccordion.classList.add("accordion__item--active")
        })
    }
  })
})
