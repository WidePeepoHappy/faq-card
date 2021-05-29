const allDetails = document.querySelectorAll(".details");
const allSummaries = document.querySelectorAll(".details__summary");

allDetails.forEach((det) => {
  det.addEventListener("click", (e) => e.preventDefault());
});

allSummaries.forEach((sum) => {
  sum.addEventListener("focus", toggleDetails);
});

function toggleDetails(e) {
  e.target.parentElement.open = true;
  allDetails.forEach((det) => {
    if (det != e.target.parentElement && det.open) det.open = false;
  });
}
