let isBusy = false;

setTimeout(() => {
  isBusy = true;
  // Do something critical here
  isBusy = false;
});

if (!isBusy) {
  isBusy = true;
  // Do something else very critical
  isBusy = false;
}
