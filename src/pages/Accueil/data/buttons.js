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
      "Le test vous aide  avec les orienations vers un hôpital ou une clinique ayant un médecin spécialisé pour traiter votre cas.",
    path: "/CureMedicament",
  },
  {
    icone: Vector2,
    nom: "Hopital Proche",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate necessitatibus repellendus illo adipisci fugit natus, ",
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
