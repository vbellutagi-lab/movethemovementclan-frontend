// Everything editable about the marketing page lives here — coach roster, plan
// pricing, reviews, copy. Section components read from this object; nothing
// below is hardcoded in JSX. Source: documents/internals/design/readme.md
// (brand copy/voice) and documents/internals/packages.png (plan pricing).

export const client = {
  // todo: add more fileds for address
  centre: {
    name: "Basaveshwar Nagar",
    address:
      "No 28, Modi Hospital Rd, West of Chord Road, Stage 2, Basaveshwar Nagar, Bengaluru, Karnataka 560079, India",
    hours: "05:30 – 22:00",
    phone: "+91 6366-385855",
    whatsapp: "+91 6366-385855",
    email: "movethemovementclan@gmail.com",
  },

  social: {
    instagram: "https://www.instagram.com/_move_clan",
    facebook: "https://www.facebook.com/people/MOVE-The-Movement-Clan/61593119798493/",
  },

  hero: {
    eyebrow: "Basaveshwar Nagar · Opening Soon",
    title: "Every Movement Sparks Evolution",
    body: "You walk in on a Tuesday morning or a Thursday night, and whoever is leading the floor knows your injury history, your current maxes, and your daily programming. No repeating yourself. No lost progress.",
    ctaPrimary: { label: "Book a session", href: "#contact" },
    ctaSecondary: { label: "See plans", href: "#pricing" },
    image: "/images/athlete-chalk.png",
  },

  syncStrip: [
    { icon: "users", title: "Group energy", detail: "Small groups, never a class." },
    { icon: "target", title: "1-1 precision", detail: "Programming written for your body." },
    {
      icon: "shield-check",
      title: "Omnipresent coaching",
      detail: "Every coach knows your profile.",
    },
  ] as const,

  sessionTypes: [
    {
      type: "SGPT",
      name: "Small Group PT",
      copy: "Four to six people, one coach, individual programming. The Move default.",
      icon: "users",
      illustration: "/icons/session-sgpt.png",
    },
    {
      type: "PT",
      name: "Personal Training",
      copy: "One coach, one athlete, full hour. For rebuilds, big lifts and specifics.",
      icon: "dumbbell",
      illustration: "/icons/session-pt.png",
    },
    {
      type: "CONDITIONING",
      name: "Conditioning",
      copy: "Engine work. Intervals, carries, sled and bell — capacity under fatigue.",
      icon: "flame",
      illustration: "/icons/session-conditioning.png",
    },
  ] as const,

  about: {
    eyebrow: "Info",
    title: "An ego-free, distraction-free ecosystem",
    lead: "At Move, you don't just get a trainer; you get an entire coaching ecosystem. We've eliminated the disconnect of traditional gyms. Through our synchronized coaching network, every trainer on our floor is tapped into your specific profile.",
    body: "You walk in on a Tuesday morning or a Thursday night, and whoever is leading the floor knows your injury history, your current maxes, and your daily programming.",
    // Phrases from `body` to render in gold — exact substring matches, case-insensitive.
    highlights: ["injury history", "current maxes", "daily programming"],
    stats: [
      { label: "Members", value: "480" },
      { label: "Coaches", value: "11" },
      { label: "Max group", value: "6" },
    ],
    image: "/images/studio-interior.png",
  },

  coaches: [
    {
      name: "Nikhil Varma",
      qualification: "ACSM-CPT · L2 Kettlebell",
      specialisations: ["Strength", "Rehab"],
      photo: "/images/athlete-portrait.png",
    },
    {
      name: "Sneha Kulkarni",
      qualification: "NSCA-CSCS · Pre/Post-natal",
      specialisations: ["Conditioning", "Mobility"],
      photo: "/images/apparel-coach.png",
    },
    {
      name: "Rahul Menon",
      qualification: "ACE-CPT · FMS Level 2",
      specialisations: ["Small group", "Fat loss"],
      photo: "/images/athlete-swing.png",
    },
    {
      name: "Divya Iyer",
      qualification: "ISSA-CPT · Kettlebell Sport",
      specialisations: ["Technique", "Endurance"],
      photo: "/images/athlete-press.png",
    },
  ],

  reviews: {
    average: 4.9,
    count: 412,
    list: [
      {
        quote:
          "I came in able to deadlift nothing and terrified of a barbell. Eighteen months later my coach had to talk me down from a 130 kg pull. Nobody here let me guess at form.",
        name: "Arjun Rao",
        since: "Member since 2023",
        type: "SGPT",
      },
      {
        quote:
          "The group is four people, so there is nowhere to hide — and no one watching you either. My programming changed the week I mentioned my shoulder, not the month after.",
        name: "Priya Nair",
        since: "Member since 2024",
        type: "SGPT",
      },
      {
        quote:
          "I travel every other week. Credits carry, coaches read the same notes, and I have never once had to re-explain my knee.",
        name: "Rohan Desai",
        since: "Member since 2022",
        type: "PT",
      },
    ],
  },

  // From documents/internals/packages.png — 4 tiers x 4 durations, prices in INR.
  plans: {
    eyebrow: "Plans",
    title: "Pick your training format",
    lead: "Four formats, four durations — the longer the commitment, the better the rate per month.",
    durations: ["1 month", "3 months", "6 months", "12 months"],
    months: [1, 3, 6, 12],
    tiers: [
      {
        id: "small-group",
        name: "Small group",
        prices: [5000, 14000, 27000, 50000],
        features: [
          "16 sessions per month",
          "Shared floor programming",
          "Profile synced to every coach",
        ],
        featured: false,
      },
      {
        id: "hybrid-1",
        name: "Hybrid 1",
        prices: [7000, 20000, 37000, 60000],
        features: [
          "1 one-on-one session / week",
          "3 small group sessions / week",
          "1 conditioning session / week (complimentary)",
        ],
        featured: false,
      },
      {
        id: "hybrid-2",
        name: "Hybrid 2",
        prices: [9000, 25000, 47000, 90000],
        features: [
          "2 one-on-one sessions / week",
          "2 small group sessions / week",
          "1 conditioning session / week (complimentary)",
        ],
        featured: true,
      },
      {
        id: "pt",
        name: "PT — one on one",
        prices: [12000, 32000, 60000, 110000],
        features: [
          "16 one-on-one sessions per month",
          "1 conditioning session (complimentary)",
          "Individual programming",
        ],
        featured: false,
      },
    ],
  },

  careers: {
    eyebrow: "Careers",
    title: "Join the clan",
    lead: "We hire coaches who like being read by other coaches. Send us your resume and we'll call within a week.",
    roles: [
      {
        title: "Small group coach",
        meta: "Full-time · Indiranagar",
        detail: "L2 kettlebell or equivalent, 2+ years on a floor.",
      },
      {
        title: "Personal trainer",
        meta: "Full-time · Indiranagar",
        detail: "CSCS/CPT with rehab-adjacent experience.",
      },
      {
        title: "Front desk & member ops",
        meta: "Part-time · Indiranagar",
        detail: "Mornings, 5:30–11:00.",
      },
    ],
  },

  contact: {
    eyebrow: "Contact",
    title: "Come stand on the floor",
    lead: "Walk in for a session, or send a note and we'll set one up.",
  },

  footer: {
    tagline: "One profile. Every coach. Zero gaps.",
    train: ["Small group PT", "Personal training", "Conditioning", "Plans"],
    clan: ["Our coaches", "Contact", "Careers", "Client login"],
    year: 2026,
  },
} as const;

export type Client = typeof client;
export type SessionType = (typeof client.sessionTypes)[number]["type"];
