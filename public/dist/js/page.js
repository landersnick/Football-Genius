const playNowBtn = document.getElementById('playNowBtn');
const studyBtn = document.getElementById('studyBtn');
const studyTile = document.getElementById('studyTile');
const offensiveStudyTile = document.getElementById('offensiveStudyTile');
const mainContent = document.getElementById('mainContent');
const studySection = document.getElementById('studySection');
const offensiveStudySection = document.getElementById('offensiveStudySection');


playNowBtn.addEventListener('click', () => {
  window.location.href = 'play_off.html';
});



// function toggleStudySection() {
//   mainContent.classList.toggle('hidden');
//   studySection.classList.toggle('hidden');
//   offensiveStudySection.classList.add('hidden'); // Ensure Offensive Study is hidden
// }

// function toggleOffensiveStudySection() {
//   mainContent.classList.toggle('hidden');
//   offensiveStudySection.classList.toggle('hidden');
//   studySection.classList.add('hidden'); // Ensure Defensive Study is hidden
// }



// studyBtn.addEventListener('click', toggleStudySection);
// studyTile.addEventListener('click', toggleStudySection);
// offensiveStudyTile.addEventListener('click', toggleOffensiveStudySection);

// const sections = document.querySelectorAll('.section');
// sections.forEach(section => {
//   section.querySelector('.section-title').addEventListener('click', () => {
//     section.classList.toggle('active');
//   });
// });

// // For Defensive Study Section
// const defensiveQuizBtn = studySection.querySelector('.quiz-btn');
// const defensiveBackBtn = studySection.querySelector('.back-btn');
// defensiveQuizBtn.addEventListener('click', () => {
//   window.location.href = 'play_off.html';
// });
// defensiveBackBtn.addEventListener('click', toggleStudySection);

// // For Offensive Study Section
// const offensiveQuizBtn = offensiveStudySection.querySelector('.quiz-btn');
// const offensiveBackBtn = offensiveStudySection.querySelector('.back-btn');
// offensiveQuizBtn.addEventListener('click', () => {
//   window.location.href = 'play_off.html';
// });
// offensiveBackBtn.addEventListener('click', toggleOffensiveStudySection);