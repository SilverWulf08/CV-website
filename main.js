const translations = {
  en: {
    subtitle: "Junior Software Developer",
    sections: {
      introduction: {
        title: "Introduction",
        content:
          "Hi, I'm Jorik Roosjen. I'm a junior software developer at Logis.P. I'm still very much in a learning process, but I’m focused, motivated, and always looking to improve. Right now I am mostly working with Frontend code. I enjoy working on projects where I can contribute, learn from others, and develop practical skills. I value a relaxed yet productive work environment, clear communication, and respectful teamwork. Whether working independently or as part of a team, my goal is to deliver reliable results and continuously enhance my abilities. I am committed to making a positive impact and welcoming constructive feedback that drives my professional development.",
      },
      skills: {
        title: "Skills",
        tooltips: {
          C: "Minimal experience; used only in coursework.",
          Python: "Minimal experience; used only in coursework.",
          HTML: "Used regularly at work.",
          CSS: "Used regularly at work.",
          JavaScript: "Occasional use; mainly coursework and this site.",
          "Angular CLI": "Used regularly at work; still learning.",
          "Node.js & npm": "Used regularly at work.",
          TypeScript: "Used regularly at work; still learning.",
          Jira: "Used regularly at work.",
          "Azure DevOps": "Used regularly at work.",
          "C#": "Limited experience; learning it for work.",
        },
      },
      experience: {
        title: "Experience",
        exp2: {
          header: "Logis.P:",
          content:
            "Currently working at Logis.P, a company specialized in software solutions for patient flow management in hospitals.",
        },
      },
      degrees: {
        title: "Degrees",
        content: "List your degrees or certifications.",
      },
    },
  },
  nl: {
    subtitle: "Junior Software Developer",
    sections: {
      introduction: {
        title: "Introductie",
        content:
          "Hoi, ik ben Jorik Roosjen. Ik ben een junior software developer bij Logis.P. Ik zit nog volop in een leerproces, maar ik ben gefocust, gemotiveerd en altijd bereid mezelf te verbeteren. Op dit moment werk ik vooral met Frontend code. Ik werk graag aan projecten waarin ik kan bijdragen, van anderen kan leren en praktische vaardigheden kan ontwikkelen. Ik hecht waarde aan een ontspannen maar productieve werksfeer, duidelijke communicatie en respectvolle samenwerking. Of ik nu zelfstandig werk of in een team, mijn doel is om betrouwbare resultaten te leveren en mijn vaardigheden continu te verbeteren. Ik ben vastbesloten een positieve bijdrage te leveren en sta open voor constructieve feedback om mijn professionele groei te stimuleren.",
      },
      skills: {
        title: "Vaardigheden",
        tooltips: {
          C: "Beperkte ervaring; alleen gebruikt tijdens de opleiding.",
          Python: "Beperkte ervaring; alleen gebruikt tijdens de opleiding.",
          HTML: "Gebruik ik regelmatig op het werk.",
          CSS: "Gebruik ik regelmatig op het werk.",
          JavaScript: "Gebruik ik af en toe; vooral opleiding en deze site.",
          "Angular CLI": "Gebruik ik regelmatig op het werk; nog lerende.",
          "Node.js & npm": "Gebruik ik regelmatig op het werk.",
          TypeScript: "Gebruik ik regelmatig op het werk; nog lerende.",
          Jira: "Gebruik ik regelmatig op het werk.",
          "Azure DevOps": "Gebruik ik regelmatig op het werk.",
          "C#": "Beperkte ervaring; aan het leren voor werk.",
        },
      },
      experience: {
        title: "Ervaring",
        exp2: {
          header: "Logis.P:",
          content:
            "Momenteel werk ik bij Logis.P, een bedrijf dat gespecialiseerd is in het ontwikkelen van softwareoplossingen voor patiëntenstroombeheer in ziekenhuizen.",
        },
        exp3: {
          header: "Student CV Website:",
          content:
            "Ik heb deze website zelf gecodeerd met behulp van AI om mijn vaardigheden te tonen en een interactieve, moderne CV-ervaring te creëren.",
        },
      },
      degrees: {
        title: "Opleidingen",
        content: "Vermeld je diploma's of certificaten.",
      },
    },
  },
};

const setText = (id, value) => {
  const node = document.getElementById(id);
  if (node) node.innerText = value;
};

function setLanguage(lang) {
  const language = translations[lang] ?? translations.en;
  const { subtitle, sections } = language;

  setText("subtitle", subtitle);

  setText("intro-title", sections.introduction.title);
  setText("intro-content", sections.introduction.content);

  setText("skills-title", sections.skills.title);
  document.querySelectorAll(".tooltip").forEach((el) => {
    const skill = el.dataset.skill;
    const tooltipText = el.querySelector(".tooltiptext");
    if (!tooltipText) return;
    tooltipText.innerText = sections.skills.tooltips[skill] ?? "";
  });

  setText("exp-title", sections.experience.title);

  if (sections.experience.exp1) {
    setText("exp1-header", sections.experience.exp1.header);
    setText("exp1-content", sections.experience.exp1.content);
  }

  if (sections.experience.exp2) {
    setText("exp2-header", sections.experience.exp2.header);
    setText("exp2-content", sections.experience.exp2.content);
  }

  if (sections.experience.exp3) {
    setText("exp3-header", sections.experience.exp3.header);
    setText("exp3-content", sections.experience.exp3.content);
  }

  setText("degrees-title", sections.degrees.title);
  // Optional element; guard keeps existing UI unchanged.
  setText("degrees-content", sections.degrees.content);
}

// Needed because the HTML uses inline onclick handlers.
window.setLanguage = setLanguage;

window.addEventListener("load", () => setLanguage("nl"));
