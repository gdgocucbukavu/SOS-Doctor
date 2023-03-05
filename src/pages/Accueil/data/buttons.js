import Vector1 from "../Assets/Vector.svg";
import Vector2 from "../Assets/Vector (1).svg";
import casque from "../Assets/casque.png";
import maternite from "../Assets/Vector (2).svg";
import sexe from "../Assets/sexe.png";
import divers from "../Assets/divers.png";

export const Buttons = [
  {
    icone: Vector1,
    nom: "Cure médicament",
    description:
      "Je vous aide à bien planifier vos cures médicaments et à bien les suivre.",
    path: "/CureMedicament",
  },
  {
    icone: Vector2,
    nom: "Hopital Proche",
    description:
      "Je vous aide à trouver l'hopital le plus proche de vous avec le numéro d'urgence",
    path: "/hopitalProche",
  },
  {
    icone: casque,
    nom: "Secours",
    description:
      "Etes-vous jeune ? Retrouvez ici les articles sur le secourisme et les soins de premières nécessités.",
    path: "/Secours",
  },
  {
    icone: maternite,
    nom: "Matérnité",
    description:
      "Etes-vous mère ou en devenir? Retrouvez les articles à lire sur la contraception, la grossesse et la maternité",
    path: "/Maternite",
  },
  {
    icone: sexe,
    nom: "Sexualité",
    description:
      "Retrouvez différents articles sur la sexualité, la reproduction et l’éducation sexuelle par les experts.",
    path: "/Sexualite",
  },
  {
    icone: divers,
    nom: "divers",
    description:
      " Besoin de faire un régime alimentaire, une activité physique etc ?, retrouvez des articles et conseils sanitaires.",
    path: "/Divers",
  },
];
