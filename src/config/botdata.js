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
        content: "J'ai une question",
        value: 1,
        goTo: "question",
      },
      {
        content: "Je vais contacter un medecin",
        value: 2,
        goTo: 3,
      },
      {
        content: "Bear 🐻",
        value: 3,
        goTo: "error",
      },
    ],
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

    goTo: "bye",
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
