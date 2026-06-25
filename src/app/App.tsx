import { useState, createContext, useContext } from "react";
import { Toaster, toast } from "sonner";
import { Menu, X, CalendarDays, ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";
import type { DateRange } from "react-day-picker";
import { format } from "date-fns";
import * as Popover from "@radix-ui/react-popover";
import * as Dialog from "@radix-ui/react-dialog";
import svgPaths from "@/imports/RutaVerdeLandingPage/svg-iinxsx3gog";
import imgHero from "@/imports/RutaVerdeLandingPage/b77e1988d70ea4d08badfb7a06bbd50a7f4e5ea2.png";
import imgAtitlan from "@/imports/RutaVerdeLandingPage/99a952a4beb8ea5048354f81cddea84bd25ccbd3.png";
import imgTikal from "@/imports/RutaVerdeLandingPage/e130a794774da661e9c0738e4694d693874660f2.png";
import imgAcatenango from "@/imports/RutaVerdeLandingPage/edeec8f6ef2c19457f5dc6df849b279bf42b7659.png";
import imgSemuc from "@/imports/RutaVerdeLandingPage/00c77899e6ebf409401b067ab7b4f245138629c6.png";
import imgRioDulce from "@/imports/RutaVerdeLandingPage/ade151d521da9a32a3663f9f7814543744229da8.png";
import imgElMirador from "@/imports/RutaVerdeLandingPage/3f5554c2420320c35c056d8f5dca2f0abba524db.png";
import imgQuetzal from "@/imports/RutaVerdeLandingPage/d3f00030f299010fdef25c90e9e9892e76058df8.png";
import imgLachua from "@/imports/RutaVerdeLandingPage/62f386234353f257c6b4ed58e55f7fad9f138e0d.png";
import imgAbout from "@/imports/RutaVerdeLandingPage/5622f99b896357143dfaea99459e1eb39114d125.png";
import imgGallery1 from "@/imports/RutaVerdeLandingPage/bf35b9056e0ca3b3ef1e7765ca0e86a510f1a3a8.png";
import imgGallery2 from "@/imports/RutaVerdeLandingPage/ff10c0ac98e754d82d33ea7e460f3945c135065c.png";
import imgGallery3 from "@/imports/RutaVerdeLandingPage/ed8f3898de3bf425dbba7a5f994a0f5eed73c81a.png";
import imgGallery4 from "@/imports/RutaVerdeLandingPage/2f1834e16feb1a347ae6b2b34b8358abe8f9173c.png";
import imgGallery5 from "@/imports/RutaVerdeLandingPage/448dfe9aff65b58ed6dfc01dc2a105487f3b83d6.png";

const SERIF = "'Young Serif', serif";
const SANS = "'Schibsted Grotesk', sans-serif";

type Lang = "en" | "es" | "fr";

const T = {
  en: {
    nav: { tours: "Tours", about: "About", gallery: "Gallery", contact: "Contact", bookTour: "Book Tour" },
    hero: {
      heading: "Explore Guatemala's Wild Heart",
      sub: "Private guided tours to the most breathtaking natural places in Central America. Discover hidden jungles and active peaks.",
      cta: "Book Your Adventure",
    },
    stats: [
      { value: "12+ Years", label: "Experience" },
      { value: "8 Natural", label: "Destinations" },
      { value: "5★ Rating", label: "Guided Experience" },
    ],
    tours: {
      heading: "Choose Your Destination", bookNow: "Book Now", viewDetails: "View Details", from: "From",
      difficulty: { Easy: "Easy", Moderate: "Moderate", Challenging: "Challenging" },
    },
    modal: { highlights: "Highlights", includes: "What's Included", bookThis: "Book This Tour" },
    customTour: {
      heading: "Design Your Own Adventure",
      sub: "Have a specific destination or experience in mind? Our expert guides will build a fully personalised itinerary just for you.",
      labels: { name: "Full Name", email: "Email Address", phone: "Phone Number", destination: "Destination / Idea", groupSize: "Group Size", dates: "Preferred Dates" },
      placeholders: { name: "John Doe", email: "john@example.com", phone: "+1 (555) 000-0000", destination: "Describe your dream trip...", groupSize: "Select size", dates: "Pick a date range" },
      groupSizes: ["Solo (1)", "Couple (2)", "Small Group (3–5)", "Medium Group (6–8)"],
      button: "Request Custom Tour",
    },
    directBooking: {
      heading: "Ready to Go? Book Directly",
      sub: "Skip the middleman — book your tour directly with us in minutes. Instant confirmation, flexible cancellation, no booking fees.",
      labels: { tour: "Tour Selector", date: "Date", groupSize: "Group Size", name: "Name", email: "Email", phone: "Phone" },
      placeholders: { tour: "Select your tour", groupSize: "1–8 people", name: "John Doe", email: "john@example.com", phone: "+1 (555) 000-0000" },
      people: (n: number) => `${n} ${n === 1 ? "person" : "people"}`,
      trust: { secure: "Secure Payment", confirm: "Instant Confirmation", cancel: "Free Cancellation" },
      button: "Confirm Booking",
    },
    about: {
      heading: "Your Expert Guatemalan Guides",
      para1: "Founded in 2012, Ruta Verde is a local family-run company dedicated to sharing the raw beauty of our homeland. We believe that true travel is about deep connection with nature and the communities that protect it.",
      para2: "Our guides carry generations of indigenous knowledge and a conservation-first ethos. We specialize in intimate, small-group experiences (max 8 people) to ensure every journey leaves a light footprint and a lasting memory.",
      tag1: { title: "Native Insights", sub: "Local indigenous perspective" },
      tag2: { title: "Eco-Conscious", sub: "Sustainable trekking practices" },
    },
    testimonials: { heading: "Adventure Stories", sub: "Read what our travelers have to say about their wild journeys across Guatemala." },
    footer: {
      tagline: "Guatemala's premier nature tour specialist. Immersive, sustainable, and unforgettable adventures.",
      slogan: "Where the wild things are",
      explore: "Explore", contact: "Contact",
      copyright: "© 2024 Ruta Verde Nature Tours. All rights reserved.",
      links: ["All Tours", "About Us", "Gallery", "Contact"],
    },
    toast: {
      custom: "Request received! We'll be in touch within 24 hours.",
      booking: (tour: string) => `Booking request sent for ${tour}! You'll hear from us shortly.`,
      required: "Please fill in the required fields.",
      error: "Something went wrong. Please try again or email us directly.",
    },
    tourDesc: {
      atitlan: "Kayak the volcanic crater lake and visit traditional villages.",
      tikal: "Trek ancient Maya ruins hidden deep in the subtropical jungle.",
      acatenango: "Summit an active volcano at dawn for views of erupting Fuego.",
      semuc: "Turquoise limestone pools and mysterious water-filled caves.",
      riodulce: "Explore river canyons and the unique Caribbean Garifuna coast.",
      elmirador: "Remote jungle trek to the tallest Maya pyramid in the world.",
      quetzal: "Spot resplendent quetzals in the misty highland cloud forest.",
      lachua: "A pristine, perfectly circular turquoise lagoon in the lowland jungle.",
    },
  },
  es: {
    nav: { tours: "Tours", about: "Sobre Nosotros", gallery: "Galería", contact: "Contacto", bookTour: "Reservar Tour" },
    hero: {
      heading: "Explora el Corazón Salvaje de Guatemala",
      sub: "Tours privados guiados a los lugares más impresionantes de América Central. Descubre selvas ocultas y volcanes activos.",
      cta: "Reserva Tu Aventura",
    },
    stats: [
      { value: "12+ Años", label: "Experiencia" },
      { value: "8 Destinos", label: "Naturales" },
      { value: "5★ Rating", label: "Experiencia Guiada" },
    ],
    tours: {
      heading: "Elige Tu Destino", bookNow: "Reservar", viewDetails: "Ver Detalles", from: "Desde",
      difficulty: { Easy: "Fácil", Moderate: "Moderado", Challenging: "Difícil" },
    },
    modal: { highlights: "Destacados", includes: "Qué Incluye", bookThis: "Reservar Este Tour" },
    customTour: {
      heading: "Diseña Tu Propia Aventura",
      sub: "¿Tienes un destino o experiencia en mente? Nuestros guías expertos crearán un itinerario completamente personalizado para ti.",
      labels: { name: "Nombre Completo", email: "Correo Electrónico", phone: "Número de Teléfono", destination: "Destino / Idea", groupSize: "Tamaño del Grupo", dates: "Fechas Preferidas" },
      placeholders: { name: "Juan García", email: "juan@ejemplo.com", phone: "+502 0000-0000", destination: "Describe tu viaje soñado...", groupSize: "Selecciona el tamaño", dates: "Elige un rango de fechas" },
      groupSizes: ["Solo (1)", "Pareja (2)", "Grupo Pequeño (3–5)", "Grupo Mediano (6–8)"],
      button: "Solicitar Tour Personalizado",
    },
    directBooking: {
      heading: "¿Listo para Ir? Reserva Directamente",
      sub: "Sin intermediarios — reserva tu tour directamente en minutos. Confirmación instantánea, cancelación flexible, sin tarifas de reserva.",
      labels: { tour: "Selector de Tour", date: "Fecha", groupSize: "Tamaño del Grupo", name: "Nombre", email: "Correo", phone: "Teléfono" },
      placeholders: { tour: "Selecciona tu tour", groupSize: "1–8 personas", name: "Juan García", email: "juan@ejemplo.com", phone: "+502 0000-0000" },
      people: (n: number) => `${n} ${n === 1 ? "persona" : "personas"}`,
      trust: { secure: "Pago Seguro", confirm: "Confirmación Instantánea", cancel: "Cancelación Gratuita" },
      button: "Confirmar Reserva",
    },
    about: {
      heading: "Tus Guías Expertos Guatemaltecos",
      para1: "Fundada en 2012, Ruta Verde es una empresa familiar local dedicada a compartir la belleza natural de nuestra tierra. Creemos que el verdadero viaje es una conexión profunda con la naturaleza y las comunidades que la protegen.",
      para2: "Nuestros guías llevan generaciones de conocimiento indígena y una ética de conservación. Nos especializamos en experiencias íntimas en grupos pequeños (máx. 8 personas) para asegurar que cada viaje deje una huella ligera y un recuerdo duradero.",
      tag1: { title: "Perspectiva Nativa", sub: "Visión indígena local" },
      tag2: { title: "Eco-Consciente", sub: "Prácticas de senderismo sostenibles" },
    },
    testimonials: { heading: "Historias de Aventura", sub: "Lee lo que nuestros viajeros tienen que decir sobre sus travesías por Guatemala." },
    footer: {
      tagline: "El especialista en tours de naturaleza premier de Guatemala. Aventuras inmersivas, sostenibles e inolvidables.",
      slogan: "Donde viven las cosas salvajes",
      explore: "Explorar", contact: "Contacto",
      copyright: "© 2024 Ruta Verde Nature Tours. Todos los derechos reservados.",
      links: ["Todos los Tours", "Sobre Nosotros", "Galería", "Contacto"],
    },
    toast: {
      custom: "¡Solicitud recibida! Nos pondremos en contacto en 24 horas.",
      booking: (tour: string) => `¡Solicitud de reserva enviada para ${tour}! Te contactaremos pronto.`,
      required: "Por favor, completa los campos requeridos.",
      error: "Algo salió mal. Inténtalo de nuevo o escríbenos por correo.",
    },
    tourDesc: {
      atitlan: "Recorre en kayak el lago de cráter volcánico y visita aldeas tradicionales.",
      tikal: "Explora antiguas ruinas mayas escondidas en la selva subtropical.",
      acatenango: "Sube un volcán activo al amanecer para ver la erupción del Fuego.",
      semuc: "Pozas de piedra caliza turquesa y misteriosas cuevas inundadas.",
      riodulce: "Explora los cañones del río y la única costa caribeña Garífuna.",
      elmirador: "Trekking remoto a la pirámide maya más alta del mundo.",
      quetzal: "Avista quetzales resplandecientes en el nuboso bosque de altura.",
      lachua: "Una laguna turquesa perfectamente circular en la selva tropical baja.",
    },
  },
  fr: {
    nav: { tours: "Circuits", about: "À Propos", gallery: "Galerie", contact: "Contact", bookTour: "Réserver" },
    hero: {
      heading: "Explorez le Cœur Sauvage du Guatemala",
      sub: "Circuits guidés privés vers les plus beaux endroits d'Amérique Centrale. Découvrez des jungles cachées et des sommets volcaniques.",
      cta: "Réservez Votre Aventure",
    },
    stats: [
      { value: "12+ Ans", label: "d'Expérience" },
      { value: "8 Sites", label: "Naturels" },
      { value: "5★ Note", label: "Circuits Guidés" },
    ],
    tours: {
      heading: "Choisissez Votre Destination", bookNow: "Réserver", viewDetails: "Voir Détails", from: "À partir de",
      difficulty: { Easy: "Facile", Moderate: "Modéré", Challenging: "Difficile" },
    },
    modal: { highlights: "Points Forts", includes: "Ce qui est Inclus", bookThis: "Réserver ce Circuit" },
    customTour: {
      heading: "Concevez Votre Propre Aventure",
      sub: "Vous avez une destination ou une expérience en tête ? Nos guides experts créeront un itinéraire entièrement personnalisé pour vous.",
      labels: { name: "Nom Complet", email: "Adresse E-mail", phone: "Numéro de Téléphone", destination: "Destination / Idée", groupSize: "Taille du Groupe", dates: "Dates Souhaitées" },
      placeholders: { name: "Jean Dupont", email: "jean@exemple.com", phone: "+33 6 00 00 00 00", destination: "Décrivez votre voyage de rêve...", groupSize: "Sélectionnez la taille", dates: "Choisissez une période" },
      groupSizes: ["Solo (1)", "Couple (2)", "Petit Groupe (3–5)", "Groupe Moyen (6–8)"],
      button: "Demander un Circuit Personnalisé",
    },
    directBooking: {
      heading: "Prêt à Partir ? Réservez Directement",
      sub: "Sans intermédiaire — réservez votre circuit en quelques minutes. Confirmation immédiate, annulation flexible, sans frais.",
      labels: { tour: "Sélection du Circuit", date: "Date", groupSize: "Taille du Groupe", name: "Nom", email: "E-mail", phone: "Téléphone" },
      placeholders: { tour: "Sélectionnez votre circuit", groupSize: "1–8 personnes", name: "Jean Dupont", email: "jean@exemple.com", phone: "+33 6 00 00 00 00" },
      people: (n: number) => `${n} ${n === 1 ? "personne" : "personnes"}`,
      trust: { secure: "Paiement Sécurisé", confirm: "Confirmation Immédiate", cancel: "Annulation Gratuite" },
      button: "Confirmer la Réservation",
    },
    about: {
      heading: "Vos Guides Experts Guatémaltèques",
      para1: "Fondée en 2012, Ruta Verde est une entreprise familiale locale dédiée à partager la beauté brute de notre pays. Nous croyons que le vrai voyage est une connexion profonde avec la nature et les communautés qui la protègent.",
      para2: "Nos guides portent des générations de savoir indigène et une éthique de conservation. Nous nous spécialisons dans des expériences intimistes en petits groupes (max. 8 personnes) pour laisser une empreinte légère et un souvenir durable.",
      tag1: { title: "Perspectives Locales", sub: "Point de vue indigène local" },
      tag2: { title: "Éco-Responsable", sub: "Pratiques de randonnée durables" },
    },
    testimonials: { heading: "Récits d'Aventure", sub: "Lisez ce que nos voyageurs ont à dire sur leurs aventures au Guatemala." },
    footer: {
      tagline: "Le spécialiste des circuits nature au Guatemala. Des aventures immersives, durables et inoubliables.",
      slogan: "Là où vivent les choses sauvages",
      explore: "Explorer", contact: "Contact",
      copyright: "© 2024 Ruta Verde Nature Tours. Tous droits réservés.",
      links: ["Tous les Circuits", "À Propos", "Galerie", "Contact"],
    },
    toast: {
      custom: "Demande reçue ! Nous vous contacterons dans les 24 heures.",
      booking: (tour: string) => `Demande envoyée pour ${tour} ! Nous vous répondrons bientôt.`,
      required: "Veuillez remplir les champs obligatoires.",
      error: "Une erreur s'est produite. Réessayez ou contactez-nous par e-mail.",
    },
    tourDesc: {
      atitlan: "Kayak sur le lac de cratère volcanique et visite de villages traditionnels.",
      tikal: "Explorez les ruines mayas ancestrales cachées dans la jungle subtropicale.",
      acatenango: "Gravissez un volcan actif à l'aube pour voir le Fuego en éruption.",
      semuc: "Vasques de calcaire turquoise et grottes mystérieuses remplies d'eau.",
      riodulce: "Explorez les canyons fluviaux et la côte caraïbe Garifuna unique.",
      elmirador: "Trek en jungle vers la plus haute pyramide maya du monde.",
      quetzal: "Observez les quetzals resplendissants dans la forêt nuageuse.",
      lachua: "Un lagon turquoise parfaitement circulaire dans la jungle tropicale.",
    },
  },
};

const LangCtx = createContext<{ t: typeof T["en"]; lang: Lang; setLang: (l: Lang) => void }>({
  t: T.en, lang: "en", setLang: () => {},
});

const TOURS = [
  {
    id: "atitlan", name: "Lake Atitlán", difficulty: "Easy", duration: "1 day", price: "$89", image: imgAtitlan,
    descKey: "atitlan" as const, description: "Kayak the volcanic crater lake and visit traditional villages.",
    longDescription: "Cradled by three sleeping volcanoes, Lake Atitlán is one of the most beautiful lakes in the world. Paddle across its mirror-still surface at dawn, explore the colour-drenched Mayan villages on its shores, and end the day watching the sun sink behind the volcanic peaks.",
    highlights: ["Sunrise kayak across the volcanic crater lake", "Visit San Juan la Laguna Mayan village", "Coffee farm tour with tasting", "Textile workshop with local artisans"],
    includes: ["Expert bilingual guide", "Kayak equipment & safety gear", "Traditional Guatemalan lunch", "Round-trip transport from Antigua"],
    gallery: [imgGallery2, imgGallery4],
  },
  {
    id: "tikal", name: "Tikal", difficulty: "Moderate", duration: "2 days", price: "$245", image: imgTikal,
    descKey: "tikal" as const, description: "Trek ancient Maya ruins hidden deep in the subtropical jungle.",
    longDescription: "Rise before dawn and hike through the dark jungle to reach Temple IV before sunrise. As the mist clears, the sound of howler monkeys fills the air and the great pyramids of Tikal emerge from the canopy. This is a spiritual experience unlike anything else on Earth.",
    highlights: ["Pre-dawn hike to Temple IV for sunrise", "Explore the Gran Plaza & Temple of the Jaguar", "Wildlife spotting: toucans & howler monkeys", "Night sounds walk through the jungle"],
    includes: ["Certified Maya archaeologist guide", "Park entrance fees", "All meals & 1-night accommodation", "Transport from Flores or Guatemala City"],
    gallery: [imgGallery1, imgGallery5],
  },
  {
    id: "acatenango", name: "Volcán Acatenango", difficulty: "Challenging", duration: "2 days", price: "$179", image: imgAcatenango,
    descKey: "acatenango" as const, description: "Summit an active volcano at dawn for views of erupting Fuego.",
    longDescription: "One of Central America's most dramatic overnight hikes. You'll push through cloud forest and alpine grassland to camp at 3,700m — then wake at 4am to watch Fuego erupt in the darkness while sipping hot coffee above a sea of clouds. Unforgettable doesn't cover it.",
    highlights: ["Overnight camp at 3,700m elevation", "Watch Fuego erupt at dawn", "Sea of clouds below the summit", "High-altitude sunrise over Guatemala"],
    includes: ["Expert mountain guide & safety briefing", "Camping equipment & sleeping bag", "Hot dinner, breakfast & coffee at camp", "Transport from Antigua"],
    gallery: [imgGallery3, imgGallery5],
  },
  {
    id: "semuc", name: "Semuc Champey", difficulty: "Moderate", duration: "1 day", price: "$119", image: imgSemuc,
    descKey: "semuc" as const, description: "Turquoise limestone pools and mysterious water-filled caves.",
    longDescription: "Hidden deep in a jungle gorge, Semuc Champey is a natural limestone bridge over the Cahabón River, filled with a series of stepped turquoise pools. Below, the roaring river disappears underground. Above, the lookout reveals a view that stops you in your tracks.",
    highlights: ["Swim in tiered turquoise limestone pools", "Candle-lit cave exploration by lantern", "Tubing down the Cahabón River", "Lookout hike over the natural bridge"],
    includes: ["Local guide throughout the day", "Cave lantern & equipment", "Inner tube for river float", "Lunch by the pools"],
    gallery: [imgGallery2, imgGallery4],
  },
  {
    id: "riodulce", name: "Río Dulce & Livingston", difficulty: "Easy", duration: "1 day", price: "$99", image: imgRioDulce,
    descKey: "riodulce" as const, description: "Explore river canyons and the unique Caribbean Garifuna coast.",
    longDescription: "Cruise down the Río Dulce through towering limestone canyon walls draped in jungle. Stop at a steaming hot spring waterfall, then arrive at Livingston — a Caribbean port town unlike anywhere else in Guatemala, home to the Garifuna people and their infectious music and food.",
    highlights: ["Boat cruise through dramatic river canyon", "Hot spring waterfall swim", "Garifuna cultural experience in Livingston", "Fresh Caribbean seafood lunch"],
    includes: ["Bilingual local guide", "Private boat throughout", "Lunch in Livingston", "Transport from Guatemala City or Antigua"],
    gallery: [imgGallery3, imgGallery1],
  },
  {
    id: "elmirador", name: "El Mirador", difficulty: "Challenging", duration: "5 days", price: "$695", image: imgElMirador,
    descKey: "elmirador" as const, description: "Remote jungle trek to the tallest Maya pyramid in the world.",
    longDescription: "A true expedition into the Petén jungle. Over five days you'll trek to the lost Pre-Classic Maya city of El Mirador, home to La Danta — the largest pyramid on Earth by volume. Almost no one makes it here. Those who do say it changes them.",
    highlights: ["Trek to La Danta — the world's largest pyramid by volume", "Remote jungle camp under a canopy of stars", "Scarlet macaws, howler monkeys & jaguars", "Sunrise over a lost Maya civilisation"],
    includes: ["Experienced jungle guide & muleteer", "All camping gear & food for 5 days", "Mule support for luggage", "Helicopter extraction option available"],
    gallery: [imgGallery5, imgGallery2],
  },
  {
    id: "quetzal", name: "Quetzal Cloud Forest", difficulty: "Easy", duration: "1 day", price: "$89", image: imgQuetzal,
    descKey: "quetzal" as const, description: "Spot resplendent quetzals in the misty highland cloud forest.",
    longDescription: "Guatemala's national bird and one of the most stunning creatures on Earth, the resplendent quetzal lives in the high cloud forests of Baja Verapaz. An expert ornithologist guide will lead you to the known nesting areas at dawn, when your chances of a sighting are highest.",
    highlights: ["Guided dawn quetzal-spotting walk", "Misty cloud forest birding trail", "Learn about quetzal conservation efforts", "Views over the Sierra de las Minas reserve"],
    includes: ["Expert ornithologist guide", "Binoculars provided", "Hot cloud-forest breakfast", "Transport from Guatemala City"],
    gallery: [imgGallery1, imgGallery3],
  },
  {
    id: "lachua", name: "Laguna Lachuá", difficulty: "Moderate", duration: "2 days", price: "$149", image: imgLachua,
    descKey: "lachua" as const, description: "A pristine, perfectly circular turquoise lagoon in the lowland jungle.",
    longDescription: "Laguna Lachuá is one of Guatemala's best-kept secrets — a perfectly circular, spring-fed lagoon of extraordinary turquoise clarity, surrounded by untouched lowland rainforest. Kayak its calm surface, night-hike for wildlife, and sleep at the eco-camp to wake with the birds.",
    highlights: ["Kayak the perfectly circular turquoise lagoon", "Night walk for jungle wildlife", "Jungle trail to the lagoon viewpoint", "Eco-camp under the rainforest canopy"],
    includes: ["Park ranger guide", "Kayak equipment", "Camping gear for 1 night", "All meals at the eco-camp"],
    gallery: [imgGallery4, imgGallery2],
  },
];

const TESTIMONIALS = [
  { name: "Sarah Jenkins", tour: "Tikal Ancient Maya", quote: "The Tikal sunrise tour was spiritual. Seeing the pyramids emerge from the jungle mist with a guide who knew every bird call was unforgettable." },
  { name: "David Miller", tour: "Volcán Acatenango", quote: "Acatenango was the hardest thing I've ever done, but Ruta Verde made it safe and spectacular. Watching Fuego erupt while drinking coffee was wild." },
  { name: "Elena Rodriguez", tour: "Semuc Champey", quote: "Semuc Champey is a paradise. The pools are even more turquoise in person. The small group size meant we had the caves mostly to ourselves." },
];

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

function encode(data: Record<string, string>) {
  return Object.entries(data)
    .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`)
    .join("&");
}

function LeafIcon({ color = "#FF7F6D" }: { color?: string }) {
  return (
    <div className="relative shrink-0 size-8">
      <svg className="absolute block inset-0 size-full" fill="none" viewBox="0 0 32 32">
        <path d={svgPaths.p261ac300} stroke={color} strokeLinecap="round" strokeWidth="2" />
      </svg>
    </div>
  );
}

function QuoteIcon() {
  return (
    <div className="relative shrink-0 size-8">
      <svg className="absolute block inset-0 size-full" fill="none" viewBox="0 0 32 32">
        <path d={svgPaths.p34a93b00} stroke="#FF7F6D" strokeLinecap="round" strokeWidth="2" />
        <path d={svgPaths.p2f8bc900} stroke="#FF7F6D" strokeLinecap="round" strokeWidth="2" />
      </svg>
    </div>
  );
}

function ChevronDown() {
  return (
    <svg className="shrink-0 size-4" fill="none" viewBox="0 0 16 16">
      <path d="M4 6L8 10L12 6" stroke="#1B2B1B" strokeLinecap="round" strokeWidth="2" />
    </svg>
  );
}

function DifficultyBadge({ level }: { level: "Easy" | "Moderate" | "Challenging" }) {
  const { t } = useContext(LangCtx);
  return (
    <span className="bg-[#e6f1f1] px-2 py-1 rounded text-[#2d8a8a] text-xs font-bold uppercase" style={{ fontFamily: SANS }}>
      {t.tours.difficulty[level]}
    </span>
  );
}

function TourModal({ tour, onBook }: { tour: typeof TOURS[0] | null; onBook: (name: string) => void }) {
  const { t } = useContext(LangCtx);
  const [activeImg, setActiveImg] = useState(0);
  if (!tour) return null;
  const images = [tour.image, ...tour.gallery];

  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 bg-[rgba(27,43,27,0.7)] z-50 backdrop-blur-sm" />
      <Dialog.Content
        className="fixed inset-0 z-50 flex items-start justify-center p-4 sm:p-6 overflow-y-auto"
        aria-describedby={undefined}
      >
        <div className="bg-white rounded-xl w-full max-w-2xl my-4 sm:my-8 overflow-hidden shadow-2xl">

          {/* Image gallery */}
          <div className="relative">
            <div className="h-[260px] sm:h-[380px] overflow-hidden">
              <img
                alt={tour.name}
                src={images[activeImg]}
                className="w-full h-full object-cover transition-opacity duration-300"
              />
            </div>
            {/* Thumbnail strip */}
            <div className="flex gap-2 p-3 bg-[#1b2b1b]">
              {images.map((src, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className={`h-14 flex-1 min-w-0 rounded overflow-hidden border-2 transition-all cursor-pointer ${i === activeImg ? "border-[#ff7f6d]" : "border-transparent opacity-60 hover:opacity-90"}`}
                >
                  <img src={src} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
            {/* Close */}
            <Dialog.Close className="absolute top-3 right-3 bg-[rgba(27,43,27,0.6)] hover:bg-[rgba(27,43,27,0.85)] text-white rounded-full w-9 h-9 flex items-center justify-center cursor-pointer transition-colors backdrop-blur-sm">
              <X size={18} />
            </Dialog.Close>
          </div>

          {/* Content */}
          <div className="p-6 sm:p-8 flex flex-col gap-6">
            {/* Header */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 flex-wrap">
                <DifficultyBadge level={tour.difficulty} />
                <span className="text-[#2d8a8a] text-sm font-semibold" style={{ fontFamily: SANS }}>{tour.duration}</span>
              </div>
              <Dialog.Title className="text-[#1b2b1b] text-3xl sm:text-4xl leading-tight" style={{ fontFamily: SERIF }}>
                {tour.name}
              </Dialog.Title>
              <p className="text-[rgba(27,43,27,0.8)] text-base leading-[1.6]" style={{ fontFamily: SANS }}>
                {tour.longDescription}
              </p>
            </div>

            {/* Highlights */}
            <div className="flex flex-col gap-3">
              <p className="text-[#1b2b1b] text-sm font-bold uppercase tracking-wide" style={{ fontFamily: SANS }}>{t.modal.highlights}</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {tour.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-[rgba(27,43,27,0.8)]" style={{ fontFamily: SANS }}>
                    <span className="text-[#ff7f6d] mt-0.5 shrink-0">◆</span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>

            {/* Includes */}
            <div className="flex flex-col gap-3 bg-[#faf9f6] rounded-lg p-4">
              <p className="text-[#1b2b1b] text-sm font-bold uppercase tracking-wide" style={{ fontFamily: SANS }}>{t.modal.includes}</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {tour.includes.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-[rgba(27,43,27,0.8)]" style={{ fontFamily: SANS }}>
                    <span className="text-[#2d8a8a] mt-0.5 shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Footer CTA */}
            <div className="flex items-center justify-between pt-2 border-t border-[rgba(27,43,27,0.08)]">
              <div className="flex flex-col gap-0.5">
                <span className="text-[rgba(27,43,27,0.5)] text-xs uppercase" style={{ fontFamily: SANS }}>{t.tours.from}</span>
                <span className="text-[#1b2b1b] text-2xl" style={{ fontFamily: SERIF }}>{tour.price}</span>
              </div>
              <Dialog.Close asChild>
                <button
                  onClick={() => onBook(tour.name)}
                  className="bg-[#ff7f6d] hover:bg-[#ff6a55] active:scale-95 text-white font-bold text-sm uppercase px-8 py-4 rounded cursor-pointer transition-all"
                  style={{ fontFamily: SANS }}
                >
                  {t.modal.bookThis}
                </button>
              </Dialog.Close>
            </div>
          </div>
        </div>
      </Dialog.Content>
    </Dialog.Portal>
  );
}

function TourCard({ tour, onBook, onOpen }: { tour: typeof TOURS[0]; onBook: (name: string) => void; onOpen: (tour: typeof TOURS[0]) => void }) {
  const { t } = useContext(LangCtx);
  return (
    <div className="bg-white flex flex-col rounded-lg overflow-hidden shadow-[0px_4px_12px_0px_rgba(0,0,0,0.05)] group">
      <button onClick={() => onOpen(tour)} className="text-left cursor-pointer">
        <div className="h-[220px] sm:h-[260px] relative w-full overflow-hidden">
          <img alt={tour.name} className="absolute inset-0 object-cover size-full group-hover:scale-105 transition-transform duration-500" src={tour.image} />
          <div className="absolute inset-0 bg-[rgba(27,43,27,0)] group-hover:bg-[rgba(27,43,27,0.15)] transition-colors duration-300 flex items-center justify-center">
            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 text-[#1b2b1b] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full" style={{ fontFamily: SANS }}>
              {t.tours.viewDetails}
            </span>
          </div>
        </div>
        <div className="p-5 sm:p-6 flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <DifficultyBadge level={tour.difficulty} />
            <span className="text-[#2d8a8a] text-sm font-semibold" style={{ fontFamily: SANS }}>{tour.duration}</span>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-[#1b2b1b] text-2xl sm:text-[28px] leading-normal" style={{ fontFamily: SERIF }}>{tour.name}</p>
            <p className="text-[rgba(27,43,27,0.8)] text-sm sm:text-[15px] leading-[1.5]" style={{ fontFamily: SANS }}>{t.tourDesc[tour.descKey]}</p>
          </div>
        </div>
      </button>
        <div className="border-t border-[#faf9f6] p-5 sm:p-6 flex items-center justify-between">
          <div className="flex flex-col gap-0.5">
            <span className="text-[rgba(27,43,27,0.5)] text-xs uppercase" style={{ fontFamily: SANS }}>{t.tours.from}</span>
            <span className="text-[#1b2b1b] text-xl" style={{ fontFamily: SERIF }}>{tour.price}</span>
          </div>
          <button
            onClick={() => onBook(tour.name)}
            className="bg-[#ff7f6d] hover:bg-[#ff6a55] active:scale-95 text-white font-bold text-sm sm:text-base uppercase px-5 sm:px-8 py-3 sm:py-4 rounded cursor-pointer transition-all"
            style={{ fontFamily: SANS }}
          >
            {t.tours.bookNow}
          </button>
        </div>
    </div>
  );
}

function FormField({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-2 flex-1 min-w-0">
      <label className="text-[#1b2b1b] text-sm font-bold uppercase" style={{ fontFamily: SANS }}>{label}</label>
      {children}
    </div>
  );
}

const inputCls = "w-full h-12 bg-white border border-[#1b2b1b] rounded px-4 text-base text-[#1b2b1b] placeholder:text-[rgba(27,43,27,0.5)] focus:outline-none focus:border-[#2d8a8a] focus:ring-1 focus:ring-[#2d8a8a] transition-colors";

const dayPickerCls = {
  root: "p-1",
  months: "flex flex-col",
  month: "space-y-3",
  caption: "flex justify-center items-center relative h-8 mb-1",
  caption_label: "text-sm font-semibold text-[#1b2b1b]",
  nav: "flex items-center",
  nav_button: "absolute p-1 rounded hover:bg-[#e6f1f1] text-[#1b2b1b] transition-colors cursor-pointer",
  nav_button_previous: "left-0",
  nav_button_next: "right-0",
  table: "w-full border-collapse",
  head_row: "flex",
  head_cell: "text-[rgba(27,43,27,0.4)] w-9 text-center text-xs font-medium py-1",
  row: "flex w-full mt-1",
  cell: "relative p-0 text-center",
  day: "h-9 w-9 mx-auto flex items-center justify-center rounded text-sm text-[#1b2b1b] hover:bg-[#e6f1f1] cursor-pointer transition-colors",
  day_selected: "!bg-[#2d8a8a] !text-white hover:!bg-[#267a7a]",
  day_today: "border border-[#ff7f6d] font-semibold",
  day_outside: "text-[rgba(27,43,27,0.25)]",
  day_disabled: "text-[rgba(27,43,27,0.2)] cursor-not-allowed",
  day_range_start: "!bg-[#2d8a8a] !text-white rounded-r-none",
  day_range_end: "!bg-[#2d8a8a] !text-white rounded-l-none",
  day_range_middle: "!bg-[#e6f1f1] !text-[#1b2b1b] rounded-none hover:!bg-[#d4eaea]",
};

const fieldBtnCls = "w-full h-12 bg-white border border-[#1b2b1b] rounded px-4 text-base flex items-center justify-between gap-2 cursor-pointer hover:border-[#2d8a8a] focus:outline-none focus:border-[#2d8a8a] focus:ring-1 focus:ring-[#2d8a8a] transition-colors";

function SingleDatePicker({ value, onChange, placeholder = "Select date" }: {
  value: Date | undefined;
  onChange: (d: Date | undefined) => void;
  placeholder?: string;
}) {
  const [open, setOpen] = useState(false);
  return (
    <Popover.Root open={open} onOpenChange={setOpen}>
      <Popover.Trigger asChild>
        <button type="button" className={fieldBtnCls} style={{ fontFamily: SANS }}>
          <span className={value ? "text-[#1b2b1b]" : "text-[rgba(27,43,27,0.5)]"}>
            {value ? format(value, "MMM d, yyyy") : placeholder}
          </span>
          <CalendarDays size={16} className="shrink-0 text-[rgba(27,43,27,0.4)]" />
        </button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          className="z-50 bg-white rounded-lg shadow-xl border border-[rgba(27,43,27,0.1)] p-3 min-w-[280px]"
          align="start" sideOffset={4}
        >
          <DayPicker
            mode="single"
            selected={value}
            onSelect={(d) => { onChange(d); setOpen(false); }}
            disabled={{ before: new Date() }}
            classNames={dayPickerCls}
            components={{
              IconLeft: () => <ChevronLeft size={14} />,
              IconRight: () => <ChevronRight size={14} />,
            }}
          />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}

function DateRangePicker({ value, onChange, placeholder = "Select date range" }: {
  value: DateRange | undefined;
  onChange: (r: DateRange | undefined) => void;
  placeholder?: string;
}) {
  const [open, setOpen] = useState(false);
  const label = value?.from
    ? value.to
      ? `${format(value.from, "MMM d")} – ${format(value.to, "MMM d, yyyy")}`
      : `${format(value.from, "MMM d, yyyy")} – ...`
    : placeholder;

  return (
    <Popover.Root open={open} onOpenChange={setOpen}>
      <Popover.Trigger asChild>
        <button type="button" className={fieldBtnCls} style={{ fontFamily: SANS }}>
          <span className={value?.from ? "text-[#1b2b1b]" : "text-[rgba(27,43,27,0.5)]"}>
            {label}
          </span>
          <CalendarDays size={16} className="shrink-0 text-[rgba(27,43,27,0.4)]" />
        </button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          className="z-50 bg-white rounded-lg shadow-xl border border-[rgba(27,43,27,0.1)] p-3 min-w-[280px]"
          align="start" sideOffset={4}
        >
          <DayPicker
            mode="range"
            selected={value}
            onSelect={(r) => { onChange(r); if (r?.from && r?.to) setOpen(false); }}
            disabled={{ before: new Date() }}
            numberOfMonths={1}
            classNames={dayPickerCls}
            components={{
              IconLeft: () => <ChevronLeft size={14} />,
              IconRight: () => <ChevronRight size={14} />,
            }}
          />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}

// ─── Sections ────────────────────────────────────────────────

const LANGS: { code: Lang; flag: string; label: string }[] = [
  { code: "en", flag: "🇬🇧", label: "EN" },
  { code: "es", flag: "🇪🇸", label: "ES" },
  { code: "fr", flag: "🇫🇷", label: "FR" },
];

function Navbar({ onBook }: { onBook: () => void }) {
  const { t, lang, setLang } = useContext(LangCtx);
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: t.nav.tours, id: "tours" },
    { label: t.nav.about, id: "about" },
    { label: t.nav.gallery, id: "gallery" },
    { label: t.nav.contact, id: "footer" },
  ];

  function handleNav(id: string) {
    setMenuOpen(false);
    scrollTo(id);
  }

  function handleBook() {
    setMenuOpen(false);
    onBook();
  }

  return (
    <nav className="relative z-20 w-full">
      <div className="flex items-center justify-between px-5 sm:px-8 lg:px-16 py-6 sm:py-8">
        <button onClick={() => handleNav("hero")} className="flex items-center gap-3 cursor-pointer">
          <LeafIcon />
          <span className="text-white text-2xl sm:text-[28px] leading-none" style={{ fontFamily: SERIF }}>Ruta Verde</span>
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8 lg:gap-12">
          {navLinks.map(({ label, id }) => (
            <button key={id} onClick={() => handleNav(id)} className="text-white text-base font-semibold cursor-pointer hover:opacity-80 transition-opacity" style={{ fontFamily: SANS }}>
              {label}
            </button>
          ))}
          {/* Language switcher */}
          <div className="flex items-center gap-1 border border-[rgba(255,255,255,0.4)] rounded px-1 py-1">
            {LANGS.map(({ code, flag, label }) => (
              <button
                key={code}
                onClick={() => setLang(code)}
                className={`text-xs font-bold px-2 py-1 rounded cursor-pointer transition-all ${lang === code ? "bg-white text-[#1b2b1b]" : "text-white hover:bg-[rgba(255,255,255,0.15)]"}`}
                style={{ fontFamily: SANS }}
                title={flag}
              >
                {label}
              </button>
            ))}
          </div>
          <button onClick={handleBook} className="border border-white text-white font-bold text-sm uppercase px-5 py-3 rounded hover:bg-white hover:text-[#1b2b1b] cursor-pointer transition-colors" style={{ fontFamily: SANS }}>
            {t.nav.bookTour}
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white cursor-pointer p-1"
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu drawer */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[rgba(27,43,27,0.97)] backdrop-blur-sm flex flex-col py-6 px-5 gap-5 shadow-lg">
          {navLinks.map(({ label, id }) => (
            <button key={id} onClick={() => handleNav(id)} className="text-white text-lg font-semibold text-left cursor-pointer hover:opacity-80 transition-opacity py-1" style={{ fontFamily: SANS }}>
              {label}
            </button>
          ))}
          <div className="flex items-center gap-2 pt-1">
            {LANGS.map(({ code, flag, label }) => (
              <button
                key={code}
                onClick={() => setLang(code)}
                className={`flex items-center gap-1.5 text-sm font-bold px-3 py-2 rounded cursor-pointer transition-all flex-1 justify-center ${lang === code ? "bg-white text-[#1b2b1b]" : "text-white border border-[rgba(255,255,255,0.3)] hover:bg-[rgba(255,255,255,0.1)]"}`}
                style={{ fontFamily: SANS }}
              >
                <span>{flag}</span> {label}
              </button>
            ))}
          </div>
          <button onClick={handleBook} className="border border-white text-white font-bold text-sm uppercase px-5 py-3 rounded hover:bg-white hover:text-[#1b2b1b] cursor-pointer transition-colors w-full" style={{ fontFamily: SANS }}>
            {t.nav.bookTour}
          </button>
        </div>
      )}
    </nav>
  );
}

function Hero({ onBook }: { onBook: () => void }) {
  const { t } = useContext(LangCtx);
  return (
    <section id="hero" className="relative min-h-[600px] sm:min-h-[750px] lg:h-[900px] w-full flex flex-col items-center shrink-0">
      <img alt="" className="absolute inset-0 object-cover size-full" src={imgHero} />
      <div className="absolute inset-0 bg-[rgba(27,43,27,0.3)]" />
      <Navbar onBook={onBook} />
      <div className="relative flex flex-col items-center gap-8 sm:gap-10 pt-12 sm:pt-16 lg:pt-24 px-5 sm:px-10 lg:px-16 pb-16 text-center text-white w-full">
        <div className="flex flex-col gap-4 sm:gap-6 items-center">
          <h1
            className="text-5xl sm:text-7xl lg:text-[96px] leading-[0.95] max-w-[1000px]"
            style={{ fontFamily: SERIF }}
          >
            {t.hero.heading}
          </h1>
          <p className="text-base sm:text-xl lg:text-2xl leading-[1.4] max-w-[640px] lg:max-w-[720px]" style={{ fontFamily: SANS }}>
            {t.hero.sub}
          </p>
        </div>
        <button
          onClick={onBook}
          className="bg-[#ff7f6d] hover:bg-[#ff6a55] active:scale-95 text-white font-bold text-sm sm:text-base uppercase px-8 py-4 rounded cursor-pointer transition-all"
          style={{ fontFamily: SANS }}
        >
          {t.hero.cta}
        </button>
      </div>
    </section>
  );
}

function IntroStrip() {
  const { t } = useContext(LangCtx);
  const stats = t.stats;
  return (
    <section className="bg-[#2d8a8a] w-full px-5 sm:px-10 lg:px-16 py-12 lg:py-16 flex flex-col sm:flex-row items-center justify-around gap-8 sm:gap-0 shrink-0">
      {stats.map((stat, i) => (
        <div key={i} className="flex items-center gap-0 flex-1 w-full sm:w-auto justify-center sm:justify-start">
          <div className="flex flex-col gap-1 items-center sm:items-start">
            <p className="text-white text-[32px] sm:text-[40px] leading-none" style={{ fontFamily: SERIF }}>{stat.value}</p>
            <p className="text-white text-sm sm:text-base font-semibold uppercase" style={{ fontFamily: SANS }}>{stat.label}</p>
          </div>
          {i < stats.length - 1 && (
            <div className="hidden sm:flex flex-1 items-center justify-center max-w-[160px] mx-auto">
              <div className="w-16 h-px bg-[#FF7F6D]" />
            </div>
          )}
        </div>
      ))}
    </section>
  );
}

function ToursSection({ onBook }: { onBook: (name: string) => void }) {
  const { t } = useContext(LangCtx);
  const [activeTour, setActiveTour] = useState<typeof TOURS[0] | null>(null);

  function handleBook(name: string) {
    setActiveTour(null);
    onBook(name);
  }

  return (
    <Dialog.Root open={!!activeTour} onOpenChange={open => !open && setActiveTour(null)}>
      <section id="tours" className="bg-[#faf9f6] w-full px-5 sm:px-10 lg:px-16 py-16 sm:py-20 lg:py-[120px] flex flex-col gap-10 sm:gap-16 lg:gap-[80px] shrink-0">
        <h2 className="text-[#1b2b1b] text-4xl sm:text-5xl lg:text-[56px] leading-[1.1]" style={{ fontFamily: SERIF }}>
          {t.tours.heading}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 sm:gap-6">
          {TOURS.map(t => (
            <TourCard key={t.id} tour={t} onBook={handleBook} onOpen={setActiveTour} />
          ))}
        </div>
      </section>
      <TourModal tour={activeTour} onBook={handleBook} />
    </Dialog.Root>
  );
}

function CustomTour() {
  const { t } = useContext(LangCtx);
  const [dateRange, setDateRange] = useState<DateRange | undefined>(undefined);
  const [form, setForm] = useState({ name: "", email: "", phone: "", destination: "", groupSize: "" });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name || !form.email || !form.destination) {
      toast.error("Please fill in the required fields.");
      return;
    }
    try {
      const dates = dateRange?.from
        ? dateRange.to
          ? `${format(dateRange.from, "MMM d")} – ${format(dateRange.to, "MMM d, yyyy")}`
          : format(dateRange.from, "MMM d, yyyy")
        : "";
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "custom-tour", ...form, dates }),
      });
      toast.success(t.toast.custom);
      setDateRange(undefined);
      setForm({ name: "", email: "", phone: "", destination: "", groupSize: "" });
    } catch {
      toast.error(t.toast.error);
    }
  }

  return (
    <section className="bg-[#ffc75f] w-full px-5 sm:px-10 lg:px-16 py-16 sm:py-20 lg:py-[100px] flex flex-col gap-10 sm:gap-14 lg:gap-16 shrink-0">
      <div className="flex flex-col gap-4 items-center text-center">
        <h2 className="text-[#1b2b1b] text-4xl sm:text-5xl lg:text-[56px] leading-[1.1]" style={{ fontFamily: SERIF }}>
          {t.customTour.heading}
        </h2>
        <p className="text-[rgba(27,43,27,0.8)] text-base sm:text-lg lg:text-xl leading-[1.5] max-w-[680px]" style={{ fontFamily: SANS }}>
          {t.customTour.sub}
        </p>
      </div>
      <form onSubmit={handleSubmit} className="bg-white p-6 sm:p-8 lg:p-12 rounded-lg flex flex-col gap-6 sm:gap-8 max-w-[1100px] w-full mx-auto">
        <div className="flex flex-col sm:flex-row gap-5 sm:gap-6">
          <FormField label={t.customTour.labels.name}>
            <input className={inputCls} style={{ fontFamily: SANS }} placeholder={t.customTour.placeholders.name} value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} />
          </FormField>
          <FormField label={t.customTour.labels.email}>
            <input type="email" className={inputCls} style={{ fontFamily: SANS }} placeholder={t.customTour.placeholders.email} value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} />
          </FormField>
          <FormField label={t.customTour.labels.phone}>
            <input type="tel" className={inputCls} style={{ fontFamily: SANS }} placeholder={t.customTour.placeholders.phone} value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))} />
          </FormField>
        </div>
        <div className="flex flex-col md:flex-row gap-5 sm:gap-6 md:items-stretch">
          <FormField label={t.customTour.labels.destination}>
            <textarea
              className="w-full bg-white border border-[#1b2b1b] rounded px-4 py-3.5 text-base text-[#1b2b1b] placeholder:text-[rgba(27,43,27,0.5)] focus:outline-none focus:border-[#2d8a8a] focus:ring-1 focus:ring-[#2d8a8a] transition-colors resize-none min-h-[120px] md:flex-1"
              style={{ fontFamily: SANS }}
              placeholder={t.customTour.placeholders.destination}
              value={form.destination}
              onChange={e => setForm(f => ({ ...f, destination: e.target.value }))}
            />
          </FormField>
          <div className="flex flex-col gap-5 sm:gap-6 flex-1 min-w-0 w-full md:w-auto">
            <FormField label={t.customTour.labels.groupSize}>
              <div className="relative">
                <select className={inputCls + " appearance-none pr-10 cursor-pointer"} style={{ fontFamily: SANS }} value={form.groupSize} onChange={e => setForm(f => ({ ...f, groupSize: e.target.value }))}>
                  <option value="" disabled>{t.customTour.placeholders.groupSize}</option>
                  {t.customTour.groupSizes.map((s, i) => <option key={i} value={s}>{s}</option>)}
                </select>
                <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2"><ChevronDown /></div>
              </div>
            </FormField>
            <FormField label={t.customTour.labels.dates}>
              <DateRangePicker value={dateRange} onChange={setDateRange} placeholder={t.customTour.placeholders.dates} />
            </FormField>
          </div>
        </div>
        <div className="flex justify-center">
          <button type="submit" className="bg-[#ff7f6d] hover:bg-[#ff6a55] active:scale-95 text-white font-bold text-sm sm:text-base uppercase px-8 py-4 rounded cursor-pointer transition-all" style={{ fontFamily: SANS }}>
            {t.customTour.button}
          </button>
        </div>
      </form>
    </section>
  );
}

function DirectBooking({ selectedTour, setSelectedTour }: { selectedTour: string; setSelectedTour: (v: string) => void }) {
  const { t } = useContext(LangCtx);
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [form, setForm] = useState({ groupSize: "", name: "", email: "", phone: "" });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!selectedTour || !form.name || !form.email) {
      toast.error("Please fill in the required fields.");
      return;
    }
    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "direct-booking", tour: selectedTour, date: date ? format(date, "yyyy-MM-dd") : "", ...form }),
      });
      toast.success(t.toast.booking(selectedTour));
      setSelectedTour("");
      setDate(undefined);
      setForm({ groupSize: "", name: "", email: "", phone: "" });
    } catch {
      toast.error(t.toast.error);
    }
  }

  return (
    <section id="direct-booking" className="bg-[#2d8a8a] w-full px-5 sm:px-10 lg:px-16 py-16 sm:py-20 lg:py-[100px] flex flex-col gap-10 sm:gap-14 lg:gap-16 items-start shrink-0">
      <div className="flex flex-col gap-4 items-center text-center w-full">
        <h2 className="text-white text-4xl sm:text-5xl lg:text-[56px] leading-[1.1]" style={{ fontFamily: SERIF }}>
          {t.directBooking.heading}
        </h2>
        <p className="text-[rgba(255,255,255,0.8)] text-base sm:text-lg lg:text-xl leading-[1.5] max-w-[680px]" style={{ fontFamily: SANS }}>
          {t.directBooking.sub}
        </p>
      </div>
      <form onSubmit={handleSubmit} className="bg-white p-6 sm:p-8 lg:p-12 rounded-lg flex flex-col gap-6 sm:gap-8 max-w-[1100px] w-full mx-auto">
        <div className="flex flex-col sm:flex-row gap-5 sm:gap-6">
          <FormField label={t.directBooking.labels.tour}>
            <div className="relative">
              <select className={inputCls + " appearance-none pr-10 cursor-pointer"} style={{ fontFamily: SANS }} value={selectedTour} onChange={e => setSelectedTour(e.target.value)}>
                <option value="" disabled>{t.directBooking.placeholders.tour}</option>
                {TOURS.map(tour => <option key={tour.id} value={tour.name}>{tour.name} — {tour.price}</option>)}
              </select>
              <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2"><ChevronDown /></div>
            </div>
          </FormField>
          <FormField label={t.directBooking.labels.date}>
            <SingleDatePicker value={date} onChange={setDate} placeholder={t.directBooking.placeholders.groupSize} />
          </FormField>
          <FormField label={t.directBooking.labels.groupSize}>
            <div className="relative">
              <select className={inputCls + " appearance-none pr-10 cursor-pointer"} style={{ fontFamily: SANS }} value={form.groupSize} onChange={e => setForm(f => ({ ...f, groupSize: e.target.value }))}>
                <option value="" disabled>{t.directBooking.placeholders.groupSize}</option>
                {[1,2,3,4,5,6,7,8].map(n => <option key={n} value={n}>{t.directBooking.people(n)}</option>)}
              </select>
              <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2"><ChevronDown /></div>
            </div>
          </FormField>
        </div>
        <div className="flex flex-col sm:flex-row gap-5 sm:gap-6">
          <FormField label={t.directBooking.labels.name}>
            <input className={inputCls} style={{ fontFamily: SANS }} placeholder={t.directBooking.placeholders.name} value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} />
          </FormField>
          <FormField label={t.directBooking.labels.email}>
            <input type="email" className={inputCls} style={{ fontFamily: SANS }} placeholder={t.directBooking.placeholders.email} value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} />
          </FormField>
          <FormField label={t.directBooking.labels.phone}>
            <input type="tel" className={inputCls} style={{ fontFamily: SANS }} placeholder={t.directBooking.placeholders.phone} value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))} />
          </FormField>
        </div>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 sm:gap-6">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start sm:items-center">
            {[
              { path: svgPaths.p3ad10700, clip: null, label: t.directBooking.trust.secure, id: "sp" },
              { path: svgPaths.p14571d48, clip: "cc1", label: t.directBooking.trust.confirm, id: "ic" },
              { path: svgPaths.p16e7ef00, clip: null, label: t.directBooking.trust.cancel, id: "fc" },
            ].map(({ path, clip, label, id }) => (
              <div key={id} className="flex items-center gap-2">
                <div className="relative size-5 shrink-0">
                  <svg className="absolute block inset-0 size-full" fill="none" viewBox="0 0 20 20">
                    {clip && <defs><clipPath id={id}><rect fill="white" height="20" width="20" /></clipPath></defs>}
                    <path d={path} stroke="#2D8A8A" strokeLinecap="round" strokeWidth="2" clipPath={clip ? `url(#${id})` : undefined} />
                  </svg>
                </div>
                <span className="text-[rgba(27,43,27,0.8)] text-xs sm:text-sm font-semibold whitespace-nowrap" style={{ fontFamily: SANS }}>{label}</span>
              </div>
            ))}
          </div>
          <button
            type="submit"
            className="bg-[#ff7f6d] hover:bg-[#ff6a55] active:scale-95 text-white font-bold text-sm sm:text-base uppercase px-8 py-4 rounded cursor-pointer transition-all w-full sm:w-auto shrink-0"
            style={{ fontFamily: SANS }}
          >
            {t.directBooking.button}
          </button>
        </div>
      </form>
    </section>
  );
}

function AboutStrip() {
  const { t } = useContext(LangCtx);
  return (
    <section id="about" className="bg-[#faf9f6] w-full px-5 sm:px-10 lg:px-16 py-16 sm:py-20 lg:py-[120px] flex flex-col lg:flex-row gap-10 sm:gap-14 lg:gap-20 items-center shrink-0">
      <div className="w-full lg:w-[600px] lg:shrink-0 h-[320px] sm:h-[440px] lg:h-[700px] relative rounded-lg overflow-hidden">
        <img alt="Guatemalan guide in the jungle" className="absolute inset-0 object-cover size-full rounded-lg" src={imgAbout} />
      </div>
      <div className="flex flex-col gap-6 sm:gap-8 flex-1 min-w-0">
        <h2 className="text-[#1b2b1b] text-4xl sm:text-5xl lg:text-[56px] leading-[1.1]" style={{ fontFamily: SERIF }}>
          {t.about.heading}
        </h2>
        <div className="flex flex-col gap-5 text-[rgba(27,43,27,0.8)] text-base sm:text-lg leading-[1.6]" style={{ fontFamily: SANS }}>
          <p>{t.about.para1}</p>
          <p>{t.about.para2}</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-10">
          <div className="flex flex-col gap-2">
            <p className="text-[#2d8a8a] text-xl sm:text-2xl" style={{ fontFamily: SERIF }}>{t.about.tag1.title}</p>
            <p className="text-[rgba(27,43,27,0.5)] text-sm" style={{ fontFamily: SANS }}>{t.about.tag1.sub}</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-[#2d8a8a] text-xl sm:text-2xl" style={{ fontFamily: SERIF }}>{t.about.tag2.title}</p>
            <p className="text-[rgba(27,43,27,0.5)] text-sm" style={{ fontFamily: SANS }}>{t.about.tag2.sub}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const { t } = useContext(LangCtx);
  return (
    <section className="bg-white w-full px-5 sm:px-10 lg:px-16 py-16 sm:py-20 lg:py-[120px] flex flex-col gap-10 sm:gap-16 items-center shrink-0">
      <div className="flex flex-col gap-4 items-center text-center">
        <h2 className="text-[#1b2b1b] text-4xl sm:text-5xl lg:text-[56px] leading-[1.1]" style={{ fontFamily: SERIF }}>
          {t.testimonials.heading}
        </h2>
        <p className="text-[rgba(27,43,27,0.8)] text-base sm:text-lg lg:text-xl leading-[1.5] max-w-[680px]" style={{ fontFamily: SANS }}>
          {t.testimonials.sub}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 w-full">
        {TESTIMONIALS.map((t, i) => (
          <div key={i} className="bg-[#faf9f6] rounded-lg p-8 sm:p-10 flex flex-col gap-6">
            <QuoteIcon />
            <p className="text-[#1b2b1b] text-base sm:text-lg leading-[1.5] italic flex-1" style={{ fontFamily: SANS }}>
              &ldquo;{t.quote}&rdquo;
            </p>
            <div className="flex flex-col gap-1">
              <p className="text-[#1b2b1b] text-base font-bold" style={{ fontFamily: SANS }}>{t.name}</p>
              <p className="text-[#2d8a8a] text-sm" style={{ fontFamily: SANS }}>{t.tour}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Gallery() {
  const images = [imgGallery1, imgGallery2, imgGallery3, imgGallery4, imgGallery5];
  return (
    <section id="gallery" className="w-full shrink-0">
      {/* Mobile / tablet: 2-column grid, last image spans full width */}
      <div className="grid grid-cols-2 md:hidden">
        {images.map((src, i) => (
          <div key={i} className={`relative h-[180px] sm:h-[240px] overflow-hidden ${i === 4 ? "col-span-2" : ""}`}>
            <img alt="" className="absolute inset-0 object-cover size-full" src={src} />
          </div>
        ))}
      </div>
      {/* Desktop: 5-column strip */}
      <div className="hidden md:flex h-[400px]">
        {images.map((src, i) => (
          <div key={i} className="flex-1 min-w-0 relative overflow-hidden">
            <img alt="" className="absolute inset-0 object-cover size-full" src={src} />
          </div>
        ))}
      </div>
    </section>
  );
}

function Footer({ onNav }: { onNav: (id: string) => void }) {
  const { t } = useContext(LangCtx);
  const socials = [
    { path: svgPaths.p39e97e00, clip: "ig-clip", label: "Instagram" },
    { path: svgPaths.p3e6b5500, clip: null, label: "Facebook" },
    { path: svgPaths.p2a83ba00, clip: null, label: "YouTube" },
    { path: svgPaths.p68ff180, clip: "tw-clip", label: "Twitter" },
  ];

  return (
    <footer id="footer" className="bg-[#1b2b1b] w-full px-5 sm:px-10 lg:px-16 pt-16 sm:pt-20 lg:pt-[120px] pb-10 sm:pb-14 lg:pb-[60px] flex flex-col gap-12 sm:gap-16 lg:gap-20 shrink-0">
      <div className="flex flex-col lg:flex-row items-start justify-between gap-10 lg:gap-16">
        <div className="flex flex-col gap-5 max-w-full lg:max-w-[400px]">
          <button onClick={() => onNav("hero")} className="flex items-center gap-3 cursor-pointer w-fit">
            <LeafIcon />
            <span className="text-white text-2xl sm:text-[32px] leading-normal" style={{ fontFamily: SERIF }}>Ruta Verde</span>
          </button>
          <p className="text-[rgba(255,255,255,0.8)] text-base sm:text-lg leading-[1.5]" style={{ fontFamily: SANS }}>
            {t.footer.tagline}
          </p>
          <p className="text-[#ffc75f] text-lg sm:text-xl" style={{ fontFamily: SERIF }}>{t.footer.slogan}</p>
        </div>
        <div className="flex gap-12 sm:gap-20 lg:gap-[120px]">
          <div className="flex flex-col gap-5">
            <p className="text-white text-sm font-bold uppercase" style={{ fontFamily: SANS }}>{t.footer.explore}</p>
            <div className="flex flex-col gap-3 sm:gap-4">
              {t.footer.links.map((label, i) => {
                const ids = ["tours", "about", "gallery", "footer"];
                return { label, id: ids[i] };
              }).map(({ label, id }) => (
                <button
                  key={id}
                  onClick={() => onNav(id)}
                  className="text-[rgba(255,255,255,0.6)] text-sm sm:text-base hover:text-white transition-colors cursor-pointer text-left"
                  style={{ fontFamily: SANS }}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <p className="text-white text-sm font-bold uppercase" style={{ fontFamily: SANS }}>{t.footer.contact}</p>
            <div className="flex flex-col gap-3 sm:gap-4">
              {["info@rutaverde.gt", "+502 2456-7890", "Guatemala City, Zona 10"].map(item => (
                <p key={item} className="text-[rgba(255,255,255,0.6)] text-sm sm:text-base" style={{ fontFamily: SANS }}>{item}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 pt-8 sm:pt-10 border-t border-[rgba(255,255,255,0.1)]">
        <p className="text-[rgba(255,255,255,0.4)] text-xs sm:text-sm" style={{ fontFamily: SANS }}>
          {t.footer.copyright}
        </p>
        <div className="flex gap-5 sm:gap-6 items-center">
          {socials.map(({ path, clip, label }) => (
            <button key={label} aria-label={label} className="relative size-5 opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
              <svg className="absolute block inset-0 size-full" fill="none" viewBox="0 0 20 20">
                {clip && <defs><clipPath id={clip}><rect fill="white" height="20" width="20" /></clipPath></defs>}
                <path d={path} stroke="white" strokeLinecap="round" strokeWidth="2" clipPath={clip ? `url(#${clip})` : undefined} />
              </svg>
            </button>
          ))}
        </div>
      </div>
    </footer>
  );
}

// ─── Root ─────────────────────────────────────────────────────

export default function App() {
  const [selectedTour, setSelectedTour] = useState("");
  const [lang, setLang] = useState<Lang>("en");

  function handleBookTour(tourName?: string) {
    if (tourName) setSelectedTour(tourName);
    scrollTo("direct-booking");
  }

  return (
    <LangCtx.Provider value={{ t: T[lang], lang, setLang }}>
      <Toaster richColors position="top-right" />
      <div className="bg-[#faf9f6] flex flex-col w-full overflow-x-hidden">
        <Hero onBook={() => handleBookTour()} />
        <IntroStrip />
        <ToursSection onBook={name => handleBookTour(name)} />
        <DirectBooking selectedTour={selectedTour} setSelectedTour={setSelectedTour} />
        <CustomTour />
        <AboutStrip />
        <Testimonials />
        <Gallery />
        <Footer onNav={scrollTo} />
      </div>
    </LangCtx.Provider>
  );
}
