export interface CategoryPresentation {
  name?: string;
  description?: string;
  icon?: string;
  color?: string;
  metaDescription?: string;
}

export const CATEGORY_PRESENTATION: Record<string, CategoryPresentation> = {
  weddings: {
    name: "Weddings",
    description:
      "Wedding entertainment ideas, tips, and inspiration for your special day in Dubai",
    icon: "Heart",
    color: "bg-pink-500",
    metaDescription: "Expert wedding entertainment tips and ideas from Box Entertainment Dubai",
  },
  corporate: {
    name: "Corporate",
    description: "Corporate event entertainment solutions and professional tips",
    icon: "Building2",
    color: "bg-blue-500",
    metaDescription: "Corporate event entertainment guides and best practices in Dubai",
  },
  entertainment: {
    name: "Entertainment",
    description: "Latest entertainment trends, ideas, and experiences for events",
    icon: "Sparkles",
    color: "bg-purple-500",
    metaDescription: "Entertainment trends and innovative ideas for Dubai events",
  },
  equipment: {
    name: "Equipment",
    description: "Event equipment guides, reviews, and technical insights",
    icon: "Settings",
    color: "bg-orange-500",
    metaDescription: "Event equipment guides and technical tips from Box Entertainment",
  },
  events: {
    name: "Events",
    description: "General event planning tips, guides, and best practices",
    icon: "Calendar",
    color: "bg-green-500",
    metaDescription: "Event planning tips and comprehensive guides for Dubai events",
  },
  "led-light-up-letters": {
    name: "LED Light Up Letters",
    description: "Creative inspiration featuring LED lettering and illuminated decor for events",
    icon: "Lightbulb",
    color: "bg-yellow-500",
    metaDescription: "LED light up letter ideas and styling tips from Box Entertainment Dubai",
  },
};

export const DEFAULT_CATEGORY_PRESENTATION: Required<Pick<CategoryPresentation, "icon" | "color">> &
  Partial<Omit<CategoryPresentation, "icon" | "color">> = {
  icon: "Sparkles",
  color: "bg-primary",
  description: "Latest updates and insights from Box Entertainment.",
  metaDescription: "Discover event planning tips, entertainment trends, and inspiration from Box Entertainment.",
};
