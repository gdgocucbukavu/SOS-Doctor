import sexe from "./sexe";

function getRandomInt(max) {
  console.log(max);
  return Math.floor(Math.random() * max);
}

const CustomComponentWithBubble = ({ answers }) => {
  const { values } = answers;
  const { nom } = values;

  return (
    <div>
      Merci pour votre question {nom} 😇, nous vous contacterons dans les plus
      brefs délais 📱
    </div>
  );
};

const CustomComponentWithBubblelink = ({ answers }) => {
  return (
    <div>
      <p>Utilisez ce lien pour nous contacter : </p>
      <a href="https://wa.link/hkd9ta">Ici</a>
    </div>
  );
};
export const steps = [
  {
    id: 1,
    content: "Bonjour 👋! En quoi puis-je vous aider aujourd'hui 😃?",
    goTo: 2,
  },
  {
    id: 2,
    content: "Veuillez choisir une option qui vous convient 👇:",
    options: [
      {
        content: "Astuces",
        value: 2,
        goTo: "astuces",
      },
      {
        content: "J'ai une question",
        value: 1,
        goTo: "question",
      },
      {
        content: "Contactez-nous",
        value: 3,
        goTo: "contact",
      },
    ],
  },

  /**
   * Espace pour contact
   */
  {
    id: "contact",
    component: {
      content: CustomComponentWithBubblelink,
    },
    end: true,
  },

  /**
   * Cette conserne astuces
   */
  {
    id: "astuces",
    content: "Intéressant 😇, veuillez choisir un domaine 👇: ",
    options: [
      {
        content: "Sexualité",
        value: 1,
        goTo: "sexe",
      },
      {
        content: "Maternité",
        value: 2,
        goTo: 3,
      },
      {
        content: "Autres",
        value: 3,
        goTo: "error",
      },
    ],
    goTo: 2,
  },

  /**
   * Cette partie conserne le sexe
   *
   */

  {
    id: "sexe",
    content: sexe[getRandomInt(sexe.length)],
    goTo: "astuce",
  },

  {
    id: "astuce",
    content: "Une autre astuce ?, veuillez choisir un domaine 👇: ",
    options: [
      {
        content: "Sexualité",
        value: 1,
        goTo: "sexe",
      },
      {
        content: "Maternité",
        value: 2,
        goTo: 3,
      },
      {
        content: "Autres",
        value: 3,
        goTo: "error",
      },
      {
        content: "Menu",
        value: 3,
        goTo: 2,
      },
    ],
    goTo: 2,
  },

  {
    id: "question",
    content: "Intéressant 😇, veuillez choisir un domaine 👇: ",
    options: [
      {
        content: "Sexualité",
        value: 1,
        goTo: "nom",
      },
      {
        content: "Maternité",
        value: 2,
        goTo: "nom",
      },
      {
        content: "Autres",
        value: 3,
        goTo: "nom",
      },
    ],
    goTo: 2,
  },
  {
    id: "nom",
    content: "Commençons par votre nom 😇?",
    receiveInput: true,
    goTo: "mail",
  },
  {
    id: "mail",
    content: "C'est quoi votre numero whastapp 📱?",
    receiveInput: true,
    goTo: "message",
  },
  {
    id: "message",
    content: "C'est quoi votre question 🧠?",
    receiveInput: true,
    goTo: "finish",
  },
  {
    id: "finish",
    component: {
      content: CustomComponentWithBubble,
    },

    goTo: 2,
  },
  {
    id: "bye",
    content: "A bientôt 😇",
    end: true,
  },
  {
    id: "error",
    content: "You're wrong! Try again...",
    goTo: 2,
  },
];
