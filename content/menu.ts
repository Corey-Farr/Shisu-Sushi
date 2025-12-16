import type { MenuCategory } from "@/lib/types";

export const menuCategories: MenuCategory[] = [
  {
    id: "omakase",
    name: "Omakase",
    description:
      "Chef-led progressions that move from cold, precise cuts to warm, composed bites.",
    items: [
      {
        id: "counter-14-course",
        name: "Counter omakase · 14 courses",
        description: "Seasonal sashimi, nigiri, and small plates.",
        price: "$165 per guest",
        isSignature: true,
        tags: ["chef_special", "premium"]
      },
      {
        id: "late-seating",
        name: "Late seating omakase",
        description:
          "A slightly shorter progression focused on nigiri and warm dishes.",
        isSignature: false
      }
    ]
  },
  {
    id: "nigiri",
    name: "Nigiri",
    items: [
      {
        id: "bluefin-chutoro",
        name: "Bluefin chu-toro",
        description: "Brushed with nikiri and served over warm, seasoned rice.",
        price: "$11",
        isSignature: true,
        tags: ["premium"]
      }
    ]
  },
  {
    id: "small-plates",
    name: "Small Plates",
    items: [
      {
        id: "cold-smoked-hamachi",
        name: "Cold smoked hamachi",
        description: "White ponzu, shiso, and a very quiet hint of smoke.",
        price: "$19",
        isSignature: true
      },
      {
        id: "roasted-maitake",
        name: "Roasted maitake, sesame tare",
        description: "Charcoal-roasted mushrooms with bright, nutty tare.",
        price: "$15",
        tags: ["vegetarian"]
      }
    ]
  }
];

export const signatureItems = menuCategories
  .flatMap((cat) => cat.items)
  .filter((item) => item.isSignature);


