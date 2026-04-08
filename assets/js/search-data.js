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
        },{id: "nav-repositories",
          title: "repositories",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "news-received-a-bronze-medal-in-the-physics-olympiad",
          title: '🥉 Received a Bronze Medal in the Physics Olympiad.',
          description: "",
          section: "News",},{id: "news-received-the-outstanding-senior-project-award-at-sharif-university-of-technology",
          title: '🏆 Received the Outstanding Senior Project Award at Sharif University of Technology.',
          description: "",
          section: "News",},{id: "news-graduated-with-a-b-sc-in-electrical-engineering-from-sharif-university-of-technology",
          title: '🎓 Graduated with a B.Sc. in Electrical Engineering from Sharif University of Technology....',
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
          section: "News",},{id: "news-defended-my-m-sc-thesis-fairness-in-entity-matching-and-blocking-at-western-university",
          title: '🎓 Defended my M.Sc. thesis: Fairness in Entity Matching and Blocking at Western...',
          description: "",
          section: "News",},{id: "news-awarded-western-university-doctoral-excellency-scholarship-cad-160k-for-research-excellence",
          title: 'Awarded Western University Doctoral Excellency Scholarship (CAD 160k) for research excellence.',
          description: "",
          section: "News",},{id: "news-paper-accepted-to-elsevier-data-amp-amp-knowledge-engineering",
          title: '📄 Paper accepted to Elsevier Data &amp;amp;amp; Knowledge Engineering!',
          description: "",
          section: "News",},{id: "news-started-a-research-internship-at-the-vector-institute-working-with-gautam-kamath-and-yiwei-lu",
          title: 'Started a research internship at the Vector Institute, working with Gautam Kamath and...',
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
          window.open("https://github.com/mhmoslemi2338", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/mohammad-hosein-moslemi", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0009-0002-0278-4665# your ORCID ID", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=vfufSS0AAAAJ", "_blank");
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
