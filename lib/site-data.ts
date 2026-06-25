export const business = {
  name: "Peneram Makcik",
  tagline: "Resepi Warisan, Rasa Yang Dirindui",
  location: "Puncak Alam",
  codArea: "Puncak Alam",
};

export const contacts = [
  {
    name: "Hakim",
    phoneDisplay: "0186959795",
    phoneInternational: "60186959795",
  },
  {
    name: "Namirah",
    phoneDisplay: "01116330149",
    phoneInternational: "601116330149",
  },
] as const;

export const whatsappMessages = {
  generalOrder:
    "Hi, saya nak order Peneram Makcik. Boleh saya tahu stok available?",
  smallPackOrder:
    "Hi, saya nak order Small Pack Peneram Makcik RM3. Saya faham minimum order 50 packs. Stok available lagi?",
  roundContainerOrder:
    "Hi, saya nak order Round Container Peneram Makcik RM15. Stok available lagi?",
  roundContainerPromo:
    "Hi, saya nak order 4 Round Container Peneram Makcik RM15 dan nak claim free postage. Stok available lagi?",
  bulkOrder:
    "Hi, saya nak tanya bulk order Peneram Makcik untuk majlis. Boleh share details?",
};

export const navItems = [
  { label: "Produk", href: "#produk" },
  { label: "Postage", href: "#postage" },
  { label: "COD", href: "#cod" },
  { label: "Testimoni", href: "#testimoni" },
  { label: "FAQ", href: "#faq" },
  { label: "Order", href: "#order" },
] as const;

export const heroBadges = [
  "Ready Stock",
  "COD Puncak Alam",
  "Bulk Order Available",
  "Postage Available",
] as const;

export const products = [
  {
    id: "small-pack",
    name: "Small Pack",
    image: "/images/peneram-small-pack.jpg",
    imageAlt: "Small Pack Peneram Makcik berisi peneram tradisional untuk majlis",
    quantity: "9 pcs",
    price: "RM3 / pack",
    minimumOrder: "Min. order 50 packs",
    postage: "Postage RM10",
    label: "Min. order 50 packs",
    description:
      "Small pack berisi 9 pcs peneram, sesuai untuk doorgift, majlis, jamuan, office makan-makan, kenduri, family gathering, atau bulk order.",
    orderLabel: "Order Small Pack",
    orderMessage: whatsappMessages.smallPackOrder,
    highlights: ["9 pcs", "RM3 / pack", "Min. order 50 packs", "Postage RM10"],
  },
  {
    id: "round-container",
    name: "Round Container",
    image: "/images/peneram-round-container.jpg",
    imageAlt: "Round Container Peneram Makcik berisi 32 pcs peneram tradisional",
    quantity: "32 pcs",
    price: "RM15 / container",
    minimumOrder: "No minimum order",
    postage: "Postage RM5",
    promo: "Buy 4 free postage",
    label: "Buy 4 free postage",
    description:
      "Round container berisi 32 pcs peneram, sesuai untuk makan keluarga, tetamu, office, kenduri kecil, buah tangan, atau simpan di rumah.",
    orderLabel: "Order Round Container",
    orderMessage: whatsappMessages.roundContainerOrder,
    promoLabel: "Order 4 & Free Postage",
    promoMessage: whatsappMessages.roundContainerPromo,
    highlights: [
      "32 pcs",
      "RM15 / container",
      "No minimum order",
      "Postage RM5",
      "Buy 4 free postage",
    ],
  },
] as const;

export const promoPostageCards = [
  {
    title: "Small Pack",
    lines: ["Add-on postage RM10", "Minimum order 50 packs"],
  },
  {
    title: "Round Container",
    lines: ["Add-on postage RM5", "No minimum order"],
  },
  {
    title: "Buy 4 Round Container",
    lines: ["Free postage", "Best for family, office, or gifting"],
  },
] as const;

export const bulkOrderBullets = [
  "Sesuai untuk doorgift",
  "Sesuai untuk jamuan",
  "Sesuai untuk office makan-makan",
  "Order awal untuk kuantiti banyak",
] as const;

export const deliveryCards = [
  {
    title: "Ready Stock",
    lines: ["Selagi stok masih ada"],
  },
  {
    title: "COD Puncak Alam",
    lines: ["Mudah untuk customer area sekitar"],
  },
  {
    title: "Postage Available",
    lines: [
      "Small Pack postage RM10",
      "Round Container postage RM5",
      "Buy 4 Round Container free postage",
    ],
  },
  {
    title: "Bulk Order",
    lines: ["Order awal untuk kuantiti banyak"],
  },
] as const;

export const testimonials = [
  "Rasa peneram asli, lemak manis dan sedap makan panas-panas.",
  "Packaging kemas, sesuai nak bawa pergi office.",
  "Sekali rasa memang teringat rasa kampung.",
] as const;

export const faqs = [
  {
    question: "Ada ready stock?",
    answer: "Ya, selagi stok masih ada. Boleh WhatsApp dulu untuk confirm.",
  },
  {
    question: "Small Pack boleh beli satu sahaja?",
    answer:
      "Small Pack minimum order 50 packs. Sesuai untuk majlis, doorgift, jamuan atau bulk order.",
  },
  {
    question: "Round Container ada minimum order?",
    answer: "Tiada minimum order untuk Round Container. Satu bekas RM15 berisi 32 pcs.",
  },
  {
    question: "Postage berapa?",
    answer:
      "Small Pack add-on postage RM10. Round Container add-on postage RM5. Buy 4 Round Container boleh dapat free postage.",
  },
  {
    question: "COD area mana?",
    answer: "COD sekitar Puncak Alam.",
  },
  {
    question: "Kalau luar Puncak Alam boleh order?",
    answer:
      "Boleh WhatsApp dulu untuk bincang ikut kawasan, kuantiti dan pilihan postage.",
  },
  {
    question: "Sesuai untuk majlis?",
    answer:
      "Ya, sesuai untuk kenduri, jamuan, office makan-makan, doorgift dan family gathering. Untuk kuantiti banyak, sila order awal.",
  },
] as const;

export type Product = (typeof products)[number];
