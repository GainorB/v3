export default {
  skills: () => fetch('https://gainorportfolio.firebaseio.com/skills/.json').then(res => res.json()),
  projects: () => fetch('https://gainorportfolio.firebaseio.com/projects/.json').then(res => res.json()),
  experience: () => fetch('https://gainorportfolio.firebaseio.com/experience/.json').then(res => res.json()),
  fetchCommits: () => fetch('https://api.github.com/repos/GainorB/v3/commits').then(res => res.json()),
};
