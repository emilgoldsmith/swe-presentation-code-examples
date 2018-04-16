let isBusy = false;

setTimeout(() => {
  isBusy = true;
  console.log("critical 1");
  // Do something critical here
  isBusy = false;
}, 0);

if (!isBusy) {
  isBusy = true;
  console.log("critical 2");
  // Do something else very critical
  isBusy = false;
}
