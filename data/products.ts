export interface Product {
   id: string;
   name: string;
   category: string;
   subName: string;
   price: string;
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
}

export const products: Product[] = [
   {
       id: "radiance-cream",
       name: "Cosmetic",
       category: "Cosmetic",
       subName: "Eternal Glow.",
       price: "₹1,800",
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
       price: "₹12,500",
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
