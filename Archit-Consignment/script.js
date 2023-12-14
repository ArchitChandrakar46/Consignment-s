console.log("running");

document.querySelector('.cross').style.display = 'none';

document.querySelector('.hamburger').addEventListener("click", () => {
  document.querySelector('.sidebar').classList.toggle('sidebarGo');

  if (document.querySelector('.sidebar').classList.contains('sidebarGo')) {
    document.querySelector('.ham').style.display = 'none'; // Hide ham
    document.querySelector('.cross').style.display = 'inline'; // Show cross
  } else {
    document.querySelector('.ham').style.display = 'inline'; // Show ham
    document.querySelector('.cross').style.display = 'none'; // Hide cross
  }
});
