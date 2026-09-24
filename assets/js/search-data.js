// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "publicationss in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-misc",
          title: "misc",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/misc/";
          },
        },{id: "news-received-a-bronze-medal-in-the-physics-olympiad",
          title: '🥉 Received a Bronze Medal in the Physics Olympiad.',
          description: "",
          section: "News",},{id: "news-paper-accepted-at-sigmod-24",
          title: '📄 Paper accepted at SIGMOD’24!',
          description: "",
          section: "News",},{id: "news-paper-accepted-at-the-guide-ai-workshop-at-sigmod-24",
          title: '📄 Paper accepted at the GUIDE-AI workshop at SIGMOD’24!',
          description: "",
          section: "News",},{id: "news-paper-accepted-to-ieee-bigdata-24",
          title: '📄 Paper accepted to IEEE BigData’24!',
          description: "",
          section: "News",},{id: "news-awarded-western-university-doctoral-excellency-scholarship-cad-160k",
          title: '🏆 Awarded Western University Doctoral Excellency Scholarship (CAD 160k).',
          description: "",
          section: "News",},{id: "news-paper-accepted-to-elsevier-data-amp-amp-knowledge-engineering",
          title: '📄 Paper accepted to Elsevier Data &amp;amp;amp; Knowledge Engineering!',
          description: "",
          section: "News",},{id: "news-started-a-research-internship-at-the-vector-institute-working-with-gautam-kamath-and-yiwei-lu",
          title: 'Started a research internship at the Vector Institute, working with Gautam Kamath and...',
          description: "",
          section: "News",},{id: "news-paper-accepted-to-icml-2026",
          title: 'Paper accepted to ICML 2026!',
          description: "",
          section: "News",},{id: "news-joined-huawei-noah-s-ark-lab-as-a-phd-researcher-working-on-llm-post-training-for-scientific-discovery",
          title: 'Joined Huawei Noah’s Ark Lab as a PhD researcher, working on LLM post-training...',
          description: "",
          section: "News",},{id: "news-became-the-youngest-iranian-to-finish-a-full-distance-ironman-completing-my-debut-race-in-11-48-18-with-a-sub-4-hour-marathon",
          title: 'Became the youngest Iranian to finish a full-distance IRONMAN, completing my debut race...',
          description: "",
          section: "News",},{id: "news-paper-accepted-to-neurips-2026-as-an-oral-presentation-congrats-to-zhimin",
          title: 'Paper accepted to NeurIPS 2026 as an oral presentation! Congrats to Zhimin!',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6D%68%6D%6F%73%6C%65%6D%69%32%33%33%38@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/mhmoslemi", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/mohammad-hosein-moslemi", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=vfufSS0AAAAJ", "_blank");
        },
      },{
        id: 'social-strava',
        title: 'Strava',
        section: 'Socials',
        handler: () => {
          window.open("https://www.strava.com/athletes/131183274", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
