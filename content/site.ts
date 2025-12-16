import type { SiteContent } from "@/lib/types";

export const site: SiteContent = {
  heroHeadline: "A quiet room for very good fish.",
  heroSubcopy:
    "Seasonal, chef-led omakase and precise nigiri, served at a thirteen-seat counter. No rush, just a long conversation between rice, fish, and time.",
  highlights: [
    {
      title: "Omakase",
      body: "Chef-led tastings that move from the coldest cuts of the day to warm, precise nigiri."
    },
    {
      title: "Seasonal fish",
      body: "We work with a small network of fishmongers and farmers and write the menu around what they bring us."
    },
    {
      title: "Intimate room",
      body: "Thirteen seats, soft light, and just enough music. A space built for slow dinners and long conversations."
    }
  ],
  addressLines: ["123 Main Street"],
  cityLine: "New York, NY 10001",
  phone: "+1 (928) 965-8502",
  email: "corey.p.farr@gmail.com",
  reservationsEmail: "corey.p.farr@gmail.com",
  mapUrl: "https://maps.google.com?q=Times+Square",
  hoursSummary: "Wednesday – Sunday",
  seatingsSummary: "First seating 5:30pm · Second seating 8:15pm",
  social: [
    {
      platform: "instagram",
      url: "https://instagram.com/"
    }
  ],
  seo: {
    home: {
      title: "Shisu Sushi | Omakase & Modern Sushi Bar",
      description:
        "An intimate omakase-focused sushi bar offering seasonal fish, refined cocktails, and a slow dining experience."
    },
    menu: {
      title: "Menu | Shisu Sushi",
      description:
        "Explore Shisu Sushi’s omakase and à la carte menu, written daily around the best of the market."
    },
    reservations: {
      title: "Reservations | Shisu Sushi",
      description:
        "Reserve a seat at the Shisu Sushi counter. Limited omakase seating released on a rolling 30-day calendar."
    },
    about: {
      title: "About | Shisu Sushi",
      description:
        "Learn about the philosophy behind Shisu Sushi, our sourcing, and the small team behind the counter."
    },
    contact: {
      title: "Contact & Visit | Shisu Sushi",
      description:
        "Find Shisu Sushi’s hours, address, and contact details for reservations and private events."
    }
  }
};


