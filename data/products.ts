export interface Product {
    id: string;
    name: string;
    category: string;
    subName: string;
    price: number;
    formattedPrice: string;
    description: string;
    folderPath: string;
    frameCount: number;
    themeColor: string;
    gradient: string;
    features: string[];
    stats: { label: string; val: string }[];
    section1: { title: string; subtitle: string };
    section2: { title: string; subtitle: string };
    section3: { title: string; subtitle: string };
    section4: { title: string; subtitle: string };
    detailsSection: { title: string; description: string; imageAlt: string };
    freshnessSection: { title: string; description: string };
    buyNowSection: {
        price: string;
        unit: string;
        processingParams: string[];
        deliveryPromise: string;
        returnPolicy: string;
    };
    // New fields for detail page
    styleNo?: string;
    mainImage?: string;
    badge?: string;
    variants?: {
        metalColors: { name: string; hex: string; stock: string }[];
        metals: { name: string; stock: string }[];
        diamondColors: { name: string; stock: string }[];
        diamondSizes: { size: string; stock: string }[];
    };
}

export const products: Product[] = [
    {
        id: "radiance-cream",
        name: "Cosmetic",
        category: "Cosmetic",
        subName: "Eternal Glow.",
        price: 1800,
        formattedPrice: "₹1,800",
        description: "Anti-Aging - Deep Hydration - SPF 30",
        folderPath: "/images/cosmetic",
        frameCount: 132,
        themeColor: "#8b7e74",
        gradient: "radial-gradient(circle at center, #fdfcfb 0%, #a8a29e 60%, #78716c 100%)",
        features: ["Anti-Aging", "Deep Hydration", "SPF 30"],
        stats: [{ label: "Moisture", val: "+85%" }, { label: "Wrinkles", val: "-40%" }, { label: "Natural", val: "98%" }],
        section1: { title: "Radiance Cream.", subtitle: "Eternal Glow." },
        section2: { title: "Unveil Your Inner Brilliance.", subtitle: "A breakthrough formula designed to rejuvenate and brighten your skin." },
        section3: { title: "Hydration That Lasts.", subtitle: "Locked-in moisture for 24 hours, giving you a plump and youthful look." },
        section4: { title: "Skin Science, Refined.", subtitle: "" },
        detailsSection: {
            title: "The Ultimate Elixir",
            description: "Our Radiance Cream is crafted with rare botanical extracts and advanced peptides. It penetrates deep into the dermal layers to stimulate collagen production and restore elasticity.",
            imageAlt: "Cream Details"
        },
        mainImage: "/images/assets/PinkTherapy_Range-min.webp",
        freshnessSection: {
            title: "Purity Guaranteed",
            description: "We use airless packaging technology to ensure the product remains uncontaminated and potent until the very last drop."
        },
        buyNowSection: {
            price: "₹1,800",
            unit: "per 50ml tube",
            processingParams: ["Dermatologically Tested", "Cruelty Free", "Paraben Free"],
            deliveryPromise: "Luxury packaging. 2-day priority shipping included.",
            returnPolicy: "Skin happiness guarantee. Return within 30 days."
        }
    },
    {
        id: "luminous-necklace",
        name: "Jewellery",
        category: "Jewellery",
        subName: "Timeless Elegance.",
        price: 12500,
        formattedPrice: "₹12,500",
        description: "18K Gold Plated - Handcrafted - Ethically Sourced",
        folderPath: "/images/jewellery",
        frameCount: 192,
        themeColor: "#57534e",
        gradient: "radial-gradient(circle at center, #fdfcfb 0%, #78716c 60%, #44403c 100%)",
        features: ["18K Gold", "Handcrafted", "Ethically Sourced"],
        stats: [{ label: "Purity", val: "99.9%" }, { label: "Artisans", val: "100+" }, { label: "Warranty", val: "Life" }],
        section1: { title: "Luminous Necklace.", subtitle: "Timeless Elegance." },
        section2: { title: "Crafted for Perfection.", subtitle: "Every piece tells a story of heritage and sophisticated craftsmanship." },
        section3: { title: "Golden Radiance.", subtitle: "Designed to capture light and attention with every movement." },
        section4: { title: "Heritage, Reimagined.", subtitle: "" },
        detailsSection: {
            title: "The Golden Standard",
            description: "Hand-finished by master jewelers, our collection represents the pinnacle of luxury and attention to detail.",
            imageAlt: "Jewellery Details"
        },
        freshnessSection: {
            title: "Ethical Luxury",
            description: "We believe in beauty without compromise. All our materials are responsibly sourced and conflict-free."
        },
        buyNowSection: {
            price: "₹12,500",
            unit: "per piece",
            processingParams: ["Certified Authentic", "Luxury Box", "Insured Shipping"],
            deliveryPromise: "Vault-secure delivery. Signature required.",
            returnPolicy: "Lifetime authenticity guarantee."
        }
    }
];

export const jewelleryCatalog: Product[] = [
    {
        id: "cathedral-princess-ring",
        name: "Cathedral Of Lab Grown Princess Diamond Ring",
        category: "Jewellery",
        subName: "Princess Cut",
        price: 70938,
        formattedPrice: "₹70,938",
        description: "Elegant princess cut diamond in a cathedral setting.",
        folderPath: "",
        frameCount: 0,
        themeColor: "#d4af37",
        gradient: "",
        features: ["Lab Grown", "Cathedral Setting", "Princess Cut"],
        stats: [],
        section1: { title: "", subtitle: "" },
        section2: { title: "", subtitle: "" },
        section3: { title: "", subtitle: "" },
        section4: { title: "", subtitle: "" },
        detailsSection: { title: "", description: "", imageAlt: "" },
        freshnessSection: { title: "", description: "" },
        buyNowSection: { price: "₹70,938", unit: "", processingParams: [], deliveryPromise: "", returnPolicy: "" },
        styleNo: "SJLR0179",
        badge: "MOST LOVED",
        mainImage: "/images/assets/643c7746-0116-406d-88de-092ba6a53bb0.webp",
        variants: {
            metalColors: [
                { name: "Yellow Gold", hex: "#E6CA97", stock: "In Stock" },
                { name: "Rose Gold", hex: "#E6B9A6", stock: "Made to Order" },
                { name: "White Gold", hex: "#E5E7EB", stock: "Made to Order" }
            ],
            metals: [
                { name: "18 KT", stock: "Made to Order" },
                { name: "14 KT", stock: "In Stock" },
                { name: "9 KT", stock: "Made to Order" }
            ],
            diamondColors: [
                { name: "FG", stock: "In Stock" }
            ],
            diamondSizes: [
                { size: "0.30", stock: "Made to Order" },
                { size: "0.50", stock: "Made to Order" },
                { size: "1.00", stock: "Made to Order" },
                { size: "2.00", stock: "In Stock" }
            ]
        }
    },
    {
        id: "infinity-swirl-ring",
        name: "Infinity Swirl Designer Diamond Ring",
        category: "Jewellery",
        subName: "Modern Design",
        price: 96421,
        formattedPrice: "₹96,421",
        description: "A modern swirl design representing eternal love.",
        folderPath: "",
        frameCount: 0,
        themeColor: "#d4af37",
        gradient: "",
        features: ["Designer", "Infinity Swirl", "Lab Grown"],
        stats: [],
        section1: { title: "", subtitle: "" },
        section2: { title: "", subtitle: "" },
        section3: { title: "", subtitle: "" },
        section4: { title: "", subtitle: "" },
        detailsSection: { title: "", description: "", imageAlt: "" },
        freshnessSection: { title: "", description: "" },
        buyNowSection: { price: "₹96,421", unit: "", processingParams: [], deliveryPromise: "", returnPolicy: "" },
        styleNo: "SJLR0180",
        badge: "BEST SELLER",
        mainImage: "/images/assets/81be160f-12d0-43d4-ab83-1d1de39311be.png"
    },
    {
        id: "sparkling-dew-halo-ring",
        name: "Sparkling Dew Of Forever Halo Lab Grown Diamond...",
        category: "Jewellery",
        subName: "Halo Setting",
        price: 63937,
        formattedPrice: "₹63,937",
        description: "Classic halo setting with a sparkling center stone.",
        folderPath: "",
        frameCount: 0,
        themeColor: "#d4af37",
        gradient: "",
        features: ["Halo Setting", "Lab Grown", "Sparkling"],
        stats: [],
        section1: { title: "", subtitle: "" },
        section2: { title: "", subtitle: "" },
        section3: { title: "", subtitle: "" },
        section4: { title: "", subtitle: "" },
        detailsSection: { title: "", description: "", imageAlt: "" },
        freshnessSection: { title: "", description: "" },
        buyNowSection: { price: "₹63,937", unit: "", processingParams: [], deliveryPromise: "", returnPolicy: "" },
        styleNo: "SJLR0181",
        badge: "MUST HAVE",
        mainImage: "/images/assets/643c7746-0116-406d-88de-092ba6a53bb0.webp"
    },
    {
        id: "juliana-maria-radiance-band",
        name: "Juliana Maria Radiance Diamond Band",
        category: "Jewellery",
        subName: "Eternity Band",
        price: 44041,
        formattedPrice: "₹44,041",
        description: "A delicate band with radiant diamonds.",
        folderPath: "",
        frameCount: 0,
        themeColor: "#d4af37",
        gradient: "",
        features: ["Diamond Band", "Lab Grown", "Radiant"],
        stats: [],
        section1: { title: "", subtitle: "" },
        section2: { title: "", subtitle: "" },
        section3: { title: "", subtitle: "" },
        section4: { title: "", subtitle: "" },
        detailsSection: { title: "", description: "", imageAlt: "" },
        freshnessSection: { title: "", description: "" },
        buyNowSection: { price: "₹44,041", unit: "", processingParams: [], deliveryPromise: "", returnPolicy: "" },
        styleNo: "SJLR0182",
        badge: "BEST SELLER",
        mainImage: "/images/assets/81be160f-12d0-43d4-ab83-1d1de39311be.png"
    },
    {
        id: "for-your-eyes-marquise-ring",
        name: "For Your Eyes Marquise Only Halo Lab Grown Diamond...",
        category: "Jewellery",
        subName: "Marquise Cut",
        price: 59373,
        formattedPrice: "₹59,373",
        description: "Stunning marquise cut diamond with a halo setting.",
        folderPath: "",
        frameCount: 0,
        themeColor: "#d4af37",
        gradient: "",
        features: ["Marquise Cut", "Halo Setting", "Lab Grown"],
        stats: [],
        section1: { title: "", subtitle: "" },
        section2: { title: "", subtitle: "" },
        section3: { title: "", subtitle: "" },
        section4: { title: "", subtitle: "" },
        detailsSection: { title: "", description: "", imageAlt: "" },
        freshnessSection: { title: "", description: "" },
        buyNowSection: { price: "₹59,373", unit: "", processingParams: [], deliveryPromise: "", returnPolicy: "" },
        styleNo: "SJLR0183",
        badge: "MOST LOVED",
        mainImage: "/images/assets/643c7746-0116-406d-88de-092ba6a53bb0.webp"
    }
];
