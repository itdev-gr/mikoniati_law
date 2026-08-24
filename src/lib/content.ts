export const firm = {
  name: "Saitakis Mykoniati & Partners",
  tagline: "Law Firm",
  address: ["12 Lorem Ipsum Street", "Athens 105 62, Greece"],
  phone: "+30 210 000 0000",
  email: "info@example.com",
  hours: "Mon – Fri, 9:00 – 18:00",
};

export type AreaIconName =
  | "briefcase"
  | "building"
  | "scales"
  | "family"
  | "users"
  | "document";

export type PracticeArea = {
  slug: string;
  name: string;
  icon: AreaIconName;
  short: string;
  intro: string;
  body: string[];
  services: string[];
};

export const practiceAreas: PracticeArea[] = [
  {
    slug: "corporate-commercial",
    icon: "briefcase",
    name: "Corporate & Commercial",
    short:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    intro:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    body: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Cras justo odio, dapibus ac facilisis in, egestas eget quam.",
      "Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Nullam quis risus eget urna mollis ornare vel eu leo. Maecenas faucibus mollis interdum. Aenean lacinia bibendum nulla sed consectetur.",
    ],
    services: [
      "Lorem ipsum dolor sit amet",
      "Consectetur adipiscing elit",
      "Sed do eiusmod tempor incididunt",
      "Ut labore et dolore magna aliqua",
      "Quis nostrud exercitation ullamco",
    ],
  },
  {
    slug: "real-estate-property",
    icon: "building",
    name: "Real Estate & Property",
    short:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    intro:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa.",
    body: [
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
      "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae.",
    ],
    services: [
      "Sed ut perspiciatis unde omnis",
      "Iste natus error sit voluptatem",
      "Accusantium doloremque laudantium",
      "Totam rem aperiam eaque ipsa",
      "Quae ab illo inventore veritatis",
    ],
  },
  {
    slug: "civil-litigation",
    icon: "scales",
    name: "Civil Litigation",
    short:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum.",
    intro:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.",
    body: [
      "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.",
      "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus.",
    ],
    services: [
      "At vero eos et accusamus",
      "Iusto odio dignissimos ducimus",
      "Blanditiis praesentium voluptatum",
      "Deleniti atque corrupti quos",
      "Dolores et quas molestias",
    ],
  },
  {
    slug: "family-law",
    icon: "family",
    name: "Family Law",
    short:
      "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod.",
    intro:
      "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat.",
    body: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    ],
    services: [
      "Nam libero tempore cum soluta",
      "Nobis est eligendi optio",
      "Cumque nihil impedit quo minus",
      "Id quod maxime placeat facere",
      "Possimus omnis voluptas assumenda",
    ],
  },
  {
    slug: "employment-law",
    icon: "users",
    name: "Employment Law",
    short:
      "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam nisi.",
    intro:
      "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi.",
    body: [
      "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur. Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
      "Accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur.",
    ],
    services: [
      "Ut enim ad minima veniam",
      "Quis nostrum exercitationem",
      "Ullam corporis suscipit laboriosam",
      "Nisi ut aliquid ex ea commodi",
      "Consequatur quis autem vel eum",
    ],
  },
  {
    slug: "tax-law",
    icon: "document",
    name: "Tax Law",
    short:
      "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et.",
    intro:
      "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae.",
    body: [
      "Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.",
    ],
    services: [
      "Temporibus autem quibusdam",
      "Aut officiis debitis aut rerum",
      "Necessitatibus saepe eveniet",
      "Voluptates repudiandae sint",
      "Molestiae non recusandae itaque",
    ],
  },
];

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
};

export const team: TeamMember[] = [
  {
    name: "Georgios Saitakis",
    role: "Founding Partner",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
  },
  {
    name: "Aggeliki Mykoniati",
    role: "Founding Partner",
    bio: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque.",
  },
  {
    name: "Lorem Ipsum",
    role: "Senior Associate",
    bio: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.",
  },
  {
    name: "Dolor Sit Amet",
    role: "Associate",
    bio: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere.",
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec ullamcorper nulla non metus auctor fringilla.",
    name: "Lorem Ipsum",
    role: "Client, Corporate Matter",
  },
  {
    quote:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae ab illo inventore veritatis.",
    name: "Dolor Sit Amet",
    role: "Client, Property Dispute",
  },
];

export const stats = [
  { value: "25+", label: "Years of practice" },
  { value: "600", label: "Cases handled" },
  { value: "6", label: "Practice areas" },
  { value: "98%", label: "Client retention" },
];

export const values = [
  {
    title: "Integrity",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Precision",
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute.",
  },
  {
    title: "Discretion",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint.",
  },
  {
    title: "Commitment",
    text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum sed ut.",
  },
];
