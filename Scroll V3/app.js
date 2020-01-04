const threshold = .1
const options = {
  root: null,
  rootMargin: '0px',
  threshold 
}

const handleIntersect = function (entries, observer) {
  entries.forEach(function (entry) {
    if (entry.intersectionRatio > threshold) {
       observer.unobserve(entry.target)
    }
  })
}

const observer = new IntersectionObserver(handleIntersect, options)
observer.observe(document.querySelector('.reveal'))
