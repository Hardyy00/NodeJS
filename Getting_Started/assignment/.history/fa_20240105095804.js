const pr = new Promise((res, rej) => {
  let i = 0;

  if (i > 0) {
    rej("no vaid");
  } else {
    res("valid");
  }
});
