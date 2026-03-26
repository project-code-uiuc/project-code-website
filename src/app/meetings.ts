export interface Meeting {
  title: string;
  date?: string;
  location?: string;
  locationLink?: string;
  description?: string;
}

export const MEETINGS: Meeting[] = [
  {
    title: "Spring General Meeting #1 - Info Session",
    date: "Wed Jan 28, 6-7 PM",
    location: "Everitt Lab 1306",
    locationLink: "https://maps.app.goo.gl/nr9NecfCWTPTd1HK8",
    description:
      "Learn more about Project: Code and how to get started on a project this semester!",
  },
  {
    title: "Spring General Meeting #2 - Project Presentations",
    date: "Wed Feb 4, 6-7 PM",
    location: "Siebel 1404",
    locationLink: "https://maps.app.goo.gl/ZbpULkaStfVezV52A",
    description:
      "Learn about the projects being held this semester and select the project you are most interested in working on!",
  },
  // {
  //   title: "Fall General Meeting #3 - Midpoint Presentations",
  //   date: "Wed Oct 29, 2025, 6-7 PM",
  //   location: "Siebel 1404",
  //   locationLink: "https://maps.app.goo.gl/yCpsPaRFWMEaEnWt6",
  //   description:
  //     "Hear from project groups about the progress they've made so far this semester!",
  // },

  // {
  //   title: "Fall General Meeting #4 - Final Presentations",
  //   date: "Thu Dec 4, 2025, 6-7 PM",
  //   location: "Loomis 144",
  //   locationLink: "https://maps.app.goo.gl/ezuk4uzRfioekwAA8",
  //   description:
  //     "Hear from project groups again and see each team's final product!",
  // },
  {
    title: "More meetings coming soon!",
    // date: "Wed, Jan 24, 2024, 6–7 PM",
    description:
      "Keep an eye on Discord and this site so you never miss a meeting! You can also subscribe to our calendar with the links above.",
  },
];
