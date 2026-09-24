export interface RasaWork {
  id: string;
  rasa: string;
  sanskrit: string;
  sanskritName: string;
  meaning: string;
  title: string;
  quote: string;
  description: string;
  imageUrl: string;
  aspect: 'portrait' | 'landscape';
  cardTone: 'maroon' | 'sand' | 'noir' | 'gold';
}

export interface WeddingStory {
  id: string;
  couple: string;
  location: string;
  venue: string;
  tag: string;
  year: string;
  narrative: string;
  coverImage: string;
  gallery: {
    url: string;
    caption: string;
  }[];
  galleryImages: {
    url: string;
    caption: string;
  }[];
}

export interface EditorialPress {
  name: string;
  quote: string;
  issue: string;
}

// ============================================================================
// THE NAVARASA (The 9 Sacred Emotions of Indian Aesthetics & Weddings)
// 100% Real Indian Wedding Moments & Ceremonies
// ============================================================================
export const NAVARASA_DATA: RasaWork[] = [
  {
    id: 'bhaya-fear',
    rasa: 'BHAYA',
    sanskrit: 'भय',
    sanskritName: 'भय · Bhaya',
    meaning: 'Sacred Anticipation / The Threshold',
    title: 'The Final Solitude Before The Vows',
    quote: 'The quiet trembling breath of an Indian bride before stepping toward the mandap fire.',
    description: 'Caught in the quiet bridal suite at 4 PM in Udaipur. The rustle of heavy Zardozi silk, the cooling touch of sandalwood on her forehead, and the sacred realization that life is about to change forever.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Indian_Bride_with_viel_on_wedding_day.jpg',
    aspect: 'portrait',
    cardTone: 'sand',
  },
  {
    id: 'shringara-love',
    rasa: 'SHRINGARA',
    sanskrit: 'शृङ्गार',
    sanskritName: 'शृङ्गार · Shringara',
    meaning: 'Love / Devotion / The Sacred Bond',
    title: 'Eyes Met in The Court of Lamps',
    quote: 'Not a pose whispered by a director, but a secret glance shared amid Sanskrit mantras.',
    description: 'During the seven sacred steps (Saptapadi), when families are cheering and the holy agni flickers. In between the rituals, their hands squeeze with unspoken devotion.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/88/Bride_And_Groom_After_An_Indian_Wedding_%28156684579%29.jpeg',
    aspect: 'portrait',
    cardTone: 'maroon',
  },
  {
    id: 'shanta-peace',
    rasa: 'SHANTA',
    sanskrit: 'शान्त',
    sanskritName: 'शान्त · Shanta',
    meaning: 'Serenity / Sacred Calm',
    title: 'Dawn Over The Temple Ghats',
    quote: 'A rare still breath before the thousand-drum Baraat procession begins.',
    description: '5:30 AM at Lake Pichola, Udaipur. Gentle waves lap the marble steps while temple bells ring across the water. The bride and groom spend twenty uninterrupted minutes together before the day awakens.',
    imageUrl: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=85',
    aspect: 'landscape',
    cardTone: 'sand',
  },
  {
    id: 'karuna-sorrow',
    rasa: 'KARUNA',
    sanskrit: 'करुणा',
    sanskritName: 'करुणा · Karuna',
    meaning: 'Poignancy / Tears of Vidaai',
    title: 'The Sacred Embrace of Parting',
    quote: 'The poignant beauty of an Indian bride embracing her sister as the shehnai plays.',
    description: 'The Vidaai is the emotional soul of an Indian wedding. A tear traced in kohl, a sister holding on just a few seconds longer, tossing puffed rice over her head in blessing for her ancestral home.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/bc/Indian_Bride_with_sister_on_wedding_day.jpg',
    aspect: 'portrait',
    cardTone: 'noir',
  },
  {
    id: 'adbhuta-wonder',
    rasa: 'ADBHUTA',
    sanskrit: 'अद्भुत',
    sanskritName: 'अद्भुत · Adbhuta',
    meaning: 'Wonder / Magnificent Grace',
    title: 'The Royal Red Regalia',
    quote: 'The sheer timeless grandeur of an Indian bride adorned in heritage gold and crimson.',
    description: 'Illuminated under warm courtyard lamps, draped in pure heritage red silk woven by Banarasi master weavers, crowned by ancestral matha patti and uncut polki diamonds.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/e2/Indian_Bride_on_wedding_day.jpg',
    aspect: 'portrait',
    cardTone: 'maroon',
  },
  {
    id: 'hasya-laughter',
    rasa: 'HASYA',
    sanskrit: 'हास्य',
    sanskritName: 'हास्य · Hasya',
    meaning: 'Pure Joy / Spontaneous Laughter',
    title: 'The Golden Splash of Haldi',
    quote: 'Flying yellow turmeric, cousins drenched in marigolds, and unrestrained Indian joy.',
    description: 'The joyful chaos of an authentic Indian Haldi ceremony. Turmeric paste playfully smeared on cheeks, cold water splashed under the afternoon sun, and grandparents dancing without restraint.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/15/Haldi_-_wedding_ceremony.jpg',
    aspect: 'portrait',
    cardTone: 'gold',
  },
  {
    id: 'veera-heroism',
    rasa: 'VEERA',
    sanskrit: 'वीर',
    sanskritName: 'वीर · Veera',
    meaning: 'Dignity / Regal Ancestral Stride',
    title: 'The Royal Baraat Procession',
    quote: 'Riding through ancient fort archways with swords, safas, and brass bands playing.',
    description: 'The royal groom in an embroidered ivory sherwani, saffron Rajasthani safa, riding atop an adorned white mare flanked by royal umbrellas and hundred dancing cousins.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/e6/A_wedding_procession_with_the_bridegroom_on_a_horse%2C_Pushkar%2C_Rajasthan.jpg',
    aspect: 'portrait',
    cardTone: 'sand',
  },
  {
    id: 'raudra-fury',
    rasa: 'RAUDRA',
    sanskrit: 'रौद्र',
    sanskritName: 'रौद्र · Raudra',
    meaning: 'Sacred Fire / Intensity of Agni',
    title: 'The Seven Pheras in Agni Witness',
    quote: 'Smoke rising from sandalwood twigs, oblations offered into the eternal Vedic fire.',
    description: 'The solemn spiritual intensity of the Havan Kund. Pure ghee poured into flaming embers, the pandit reciting ancient Sanskrit verses, sealing seven lifetimes of commitment.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/A_collection_of_ritual_puja_and_sacrifice_offerings_for_a_Hindu_wedding.jpg',
    aspect: 'portrait',
    cardTone: 'maroon',
  },
  {
    id: 'bibhatsa-raw',
    rasa: 'BIBHATSA',
    sanskrit: 'बीभत्स',
    sanskritName: 'बीभत्स · Bibhatsa',
    meaning: 'Raw Craft / Intricate Henna Roots',
    title: 'The Intricate Story of Bridal Mehndi',
    quote: 'Hours of patient devotion as green henna paste transforms into deep auspicious red.',
    description: 'Hands painted with peacocks, lotuses, and hidden wedding dates. Dark henna stains, glass chooda bangles clinking together, and the honest, exhausted, beautiful reality behind every ceremony.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Bridal_Mehndi.JPG',
    aspect: 'portrait',
    cardTone: 'noir',
  },
];

// ============================================================================
// SELECTED DESTINATION WEDDING MONOGRAPHS
// 100% India Locations Only: Udaipur, Jaipur, Goa, Jodhpur
// ============================================================================
const udaipurGallery = [
  {
    url: 'https://upload.wikimedia.org/wikipedia/commons/e/e2/Indian_Bride_on_wedding_day.jpg',
    caption: 'Ananya in her crimson Banarasi lehenga, adjusting her polki necklace before the mandap',
  },
  {
    url: 'https://upload.wikimedia.org/wikipedia/commons/8/88/Bride_And_Groom_After_An_Indian_Wedding_%28156684579%29.jpeg',
    caption: 'The couple surrounded by fragrant rose petals after the final round of the sacred fire',
  },
  {
    url: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Bridal_Mehndi.JPG',
    caption: 'Intricate Rajasthani peacock mehndi with ancestral bridal bangles',
  },
  {
    url: 'https://upload.wikimedia.org/wikipedia/commons/2/27/Bride_and_Groom_During_Pair_Pujan_Rasam.jpg',
    caption: 'Traditional pair pujan ceremony guided by family elders and Sanskrit chants',
  },
];

const jaipurGallery = [
  {
    url: 'https://upload.wikimedia.org/wikipedia/commons/f/fb/A_Baraat_procession%2C_Jaipur.jpg',
    caption: 'The exuberant Baraat procession marching through the historic streets of Jaipur',
  },
  {
    url: 'https://upload.wikimedia.org/wikipedia/commons/9/9f/Indian_Bride_on_wedding_day_3.jpg',
    caption: 'Devika crowned with jasmine gajra under the carved palace archway',
  },
  {
    url: 'https://upload.wikimedia.org/wikipedia/commons/1/15/Haldi_-_wedding_ceremony.jpg',
    caption: 'Golden morning Haldi with marigold showers in the palace courtyard',
  },
  {
    url: 'https://upload.wikimedia.org/wikipedia/commons/c/c0/Indian_Wedding_Mandap_Decoration.jpg',
    caption: 'The starlit mandap crafted from fresh tuberose and marigold garlands',
  },
];

const goaGallery = [
  {
    url: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Indian_Bride_on_wedding_day_5.jpg',
    caption: 'Meera caught in natural golden hour light by the Goan coastline',
  },
  {
    url: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Indian_Bride_with_viel_on_wedding_day.jpg',
    caption: 'The bride walking toward the floral mandap as the Arabian Sea murmurs behind',
  },
  {
    url: 'https://upload.wikimedia.org/wikipedia/commons/b/bc/Indian_Bride_with_sister_on_wedding_day.jpg',
    caption: 'Tears and tight hugs during the seaside Vidaai ceremony',
  },
  {
    url: 'https://upload.wikimedia.org/wikipedia/commons/8/88/Bride_And_Groom_After_An_Indian_Wedding_%28156684579%29.jpeg',
    caption: 'Sunset smiles as husband and wife under twilight skies',
  },
];

const jodhpurGallery = [
  {
    url: 'https://upload.wikimedia.org/wikipedia/commons/8/86/Columns%2C_Umaid_Bhawan%2C_Jodhpur%2C_Rajasthan%2C_India.jpg',
    caption: 'The grand royal colonnade of Umaid Bhawan Palace illuminated for the wedding night',
  },
  {
    url: 'https://upload.wikimedia.org/wikipedia/commons/e/e6/A_wedding_procession_with_the_bridegroom_on_a_horse%2C_Pushkar%2C_Rajasthan.jpg',
    caption: 'The regal groom arriving with traditional royal Rajasthani fanfare',
  },
  {
    url: 'https://upload.wikimedia.org/wikipedia/commons/2/27/Bride_and_Groom_During_Pair_Pujan_Rasam.jpg',
    caption: 'The sacred pair pujan ritual in the palace royal baradari',
  },
  {
    url: 'https://upload.wikimedia.org/wikipedia/commons/e/e2/Indian_Bride_on_wedding_day.jpg',
    caption: 'Roshni adorned in uncut diamonds and royal Marwari lehenga',
  },
];

export const WEDDING_STORIES: WeddingStory[] = [
  {
    id: 'ananya-kabir-udaipur',
    couple: 'Ananya & Kabir',
    location: 'Udaipur, Rajasthan',
    venue: 'Taj Lake Palace & City Palace',
    tag: 'Three Days on Lake Pichola',
    year: '2025',
    narrative: 'A celebration suspended between water and sky. The couple arrived by carved wooden boats illuminated by flaming mashals. The sacred pheras took place on the marble courtyard as evening diyas floated upon the tranquil lake.',
    coverImage: 'https://upload.wikimedia.org/wikipedia/commons/2/21/City_Palace_Udaipur_Front.jpg',
    gallery: udaipurGallery,
    galleryImages: udaipurGallery,
  },
  {
    id: 'devika-aryan-jaipur',
    couple: 'Devika & Aryan',
    location: 'Jaipur, Rajasthan',
    venue: 'Samode Haveli & Jal Mahal',
    tag: 'Pink City Royal Heritage',
    year: '2025',
    narrative: 'In the frescoed courtyards of the Pink City, under centuries-old carved sandstone jharokhas. Aryan led a grand Baraat of 200 drummers through the palace gateway, greeted by raining marigold petals and traditional folk chants.',
    coverImage: 'https://upload.wikimedia.org/wikipedia/commons/7/77/Jaipur%2C_Jal_Mahal.jpg',
    gallery: jaipurGallery,
    galleryImages: jaipurGallery,
  },
  {
    id: 'meera-siddharth-goa',
    couple: 'Meera & Siddharth',
    location: 'South Goa, India',
    venue: 'Heritage Coastal Haveli & Beach',
    tag: 'Coastal Sunset Nuptials',
    year: '2024',
    narrative: 'An intimate, breezy seaside wedding under coconut groves in South Goa. Salt in the air, warm coastal sun, barefoot pheras in the sand, and an electric open-air Sangeet celebration under glowing fairy lights.',
    coverImage: 'https://upload.wikimedia.org/wikipedia/commons/c/c0/Indian_Wedding_Mandap_Decoration.jpg',
    gallery: goaGallery,
    galleryImages: goaGallery,
  },
  {
    id: 'roshni-samir-jodhpur',
    couple: 'Roshni & Samir',
    location: 'Jodhpur, Rajasthan',
    venue: 'Umaid Bhawan Palace',
    tag: 'Marwar Citadel Nuptials',
    year: '2024',
    narrative: 'High above the Blue City of Jodhpur, set amidst the golden Chittar sandstone of Umaid Bhawan Palace. A thousand-year-old Marwari ceremony illuminated by four hundred brass diyas and the majestic echoing of traditional nagadas.',
    coverImage: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Umaid_Bhawan%2C_Jodhpur.jpg',
    gallery: jodhpurGallery,
    galleryImages: jodhpurGallery,
  },
];

// ============================================================================
// EDITORIAL PRESS QUOTES
// ============================================================================
export const EDITORIAL_PRESS: EditorialPress[] = [
  {
    name: 'Vogue India',
    quote: 'Wedding Tales treats wedding photography not as an event record, but as raw poetic cinema steeped in the ancient philosophy of the Navarasa.',
    issue: 'The Wedding Collector\'s Edition',
  },
  {
    name: 'WeddingSutra',
    quote: 'The masters of candid intimacy in royal Rajasthan. They capture the unseen trembling hands and secret smiles that everyone else misses.',
    issue: 'India Top 10 Masters of Wedding Photography',
  },
  {
    name: 'Harper\'s Bazaar Bride',
    quote: 'Breathtaking 35mm grain, painterly light, and a deep reverence for ancestral Indian wedding traditions.',
    issue: 'The Royal Edition',
  },
  {
    name: 'Architectural Digest India',
    quote: 'How Wedding Tales frames heritage palaces and havelis is nothing short of fine art.',
    issue: 'Palaces & Heritage Spaces',
  },
];
