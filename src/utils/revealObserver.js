export function initRevealObserver() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed')
        observer.unobserve(entry.target)
      }
    })
  }, { threshold: 0.12 })

  const observe = () => {
    document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => {
      if (!el.classList.contains('revealed')) observer.observe(el)
    })
  }

  observe()
  const mo = new MutationObserver(observe)
  mo.observe(document.body, { childList: true, subtree: true })
}
