function onEntry(entry) {
  entry.forEach((change) => {
    if (change.isIntersecting) {
      change.target.classList.add('element-show');
    } else {
      change.target.classList.remove('element-show');
    }
  });
}

let options = {
  threshold: [0.5],
};
let observer = new IntersectionObserver(onEntry, options);
let elementMore = document.querySelectorAll('.block-link');
let elementsNumber = document.querySelectorAll('.number');
let elementsBlock = document.querySelectorAll('.benefits-block');

for (let elm of elementsNumber) {
  observer.observe(elm);
}
for (let elm of elementsBlock) {
  observer.observe(elm);
}
for (let elm of elementMore) {
  observer.observe(elm);
}
