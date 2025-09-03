export interface Meeting {
  title: string;
  date?: string;
  location?: string;
  locationLink?: string;
  description?: string;
}

export const MEETINGS: Meeting[] = [
  {
    title: "Fall General Meeting #1 - Info Session",
    date: "Wed, Sep 3, 2025, 6-7 PM",
    location: "Siebel 1404",
    locationLink: "https://maps.app.goo.gl/yCpsPaRFWMEaEnWt6",
    description:
      "Learn more about Project: Code and how to get started on a project this semester!",
  },
  {
    title: "Fast Enterprises - Resume Workshop",
    date: "Tue, Sep 9, 2025, 7:30-8:30 PM",
    location: "DCL 1310",
    locationLink: "https://maps.app.goo.gl/iLi2grocoZwMHrKF7",
    description:
      "Learn about creating a powerful resume with Fast Enterprises, as well as more about Project Code!",
  },
  {
    title: "Fall General Meeting #2 - Projects Intro",
    date: "Wed, Sep 17, 6-7 PM",
    location: "Loomis 151",
    locationLink: "https://maps.app.goo.gl/ezuk4uzRfioekwAA8",
    description:
      "Learn about the projects being held this semester and select the project you are most interested in working on!",
  },
  {
    title: "Fall General Meeting #3 - Midpoint Presentations",
    date: "Wed, Oct 29, 2025, 6-7 PM",
    location: "Siebel 1404",
    locationLink: "https://maps.app.goo.gl/yCpsPaRFWMEaEnWt6",
    description:
      "Hear from project groups about the progress they've made so far this semester!",
  },

  {
    title: "Fall General Meeting #4 - Final Presentations",
    date: "Dec TBA, 2025",
    location: "Location TBA",
    locationLink: "",
    description:
      "Hear from project groups again and see each team's final product!",
  },

  // {
  //   title: "More meetings coming soon!",
  //   // date: "Wed, Jan 24, 2024, 6–7 PM",
  //   description:
  //     "Keep an eye on Discord and this site so you never miss a meeting! You can also subscribe to our calendar with the links above.",
  // },
];
