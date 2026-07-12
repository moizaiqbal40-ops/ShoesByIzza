/* =========================================================
   IZZA — Shared Product Data

   Using placeholder photos for now so the site works out of
   the box. To swap in your own product photos: replace each
   URL below with a local path like "images/products/p1-1.jpg"
   and drop your matching image files into images/products/.
   Every product needs an `images` array of 3 — if you only
   have 1 photo per product, repeat the same path 3 times.
   ========================================================= */

const PK_SIZES = ["UK 3 · EU 36","UK 4 · EU 37","UK 5 · EU 38","UK 6 · EU 39","UK 7 · EU 40"];

const PRODUCTS = [
  {
    id: 1, badge: "01", name: "Rosette Stiletto", category: "Heels", heel: "High",
    heelLabel: "High heel · 4\"", price: 4999, rating: 4.8, reviews: 132, tag: "Bestseller",
    sizes: PK_SIZES,
    images: [
      "https://images.unsplash.com/photo-1596703263926-eb0762ee17e4?w=800&q=80",
      "https://images.unsplash.com/photo-1596703263926-eb0762ee17e4?w=800&q=80&sat=-20",
      "https://images.unsplash.com/photo-1518049362265-d5b2a6467637?w=800&q=80"
    ],
    shortDesc: "A fuchsia stiletto with a rounded toe and a heel built for long nights.",
    description: "The Rosette Stiletto is cut from soft matte faux-leather in a bold fuchsia shade, finished with a rounded almond toe that stays comfortable through a full evening out. The 4-inch heel is set slightly forward for better balance than a typical stiletto, and the cushioned insole is contoured to reduce pressure on the ball of your foot.",
    details: ["Heel height: 4\" (10cm), tapered stiletto","Upper: soft matte faux-leather","Cushioned contour insole","Non-slip rubber sole grip","True to size — order your usual UK size"]
  },
  {
    id: 2, badge: "02", name: "Blush Court Low", category: "Sneakers", heel: "Flat",
    heelLabel: "Flat sole", price: 5299, rating: 4.6, reviews: 88, tag: null,
    sizes: PK_SIZES,
    images: [
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=800&q=80",
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&q=80",
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=800&q=80&sat=-10"
    ],
    shortDesc: "A low-top court sneaker in white and blush pink, built for everyday miles.",
    description: "Blush Court Low takes the classic court sneaker silhouette and softens it with a blush-pink overlay and pearl-white base. A breathable canvas lining and a lightly cushioned midsole make it the pair you reach for on days you're on your feet from morning to night.",
    details: ["Sole: lightweight EVA midsole","Upper: canvas with faux-leather overlay","Breathable mesh lining","Machine-wipe clean, do not machine wash","Runs true to size"]
  },
  {
    id: 3, badge: "03", name: "Cocoa Ballet Flat", category: "Flats", heel: "Flat",
    heelLabel: "Flat sole", price: 3199, rating: 4.7, reviews: 156, tag: "Bestseller",
    sizes: PK_SIZES,
    images: [
      "https://images.unsplash.com/photo-1573100925118-870b8efc799d?w=800&q=80",
      "https://images.unsplash.com/photo-1573100925118-870b8efc799d?w=800&q=80&sat=-10",
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&q=80"
    ],
    shortDesc: "A rounded-toe ballet flat in a warm cocoa tone that pairs with everything.",
    description: "A wardrobe staple: the Cocoa Ballet Flat has a soft rounded toe, an elasticated topline for a snug fit without straps, and a suede-effect finish that dresses up or down with equal ease. Built to be the flat you reach for on repeat.",
    details: ["Sole: flexible non-slip rubber","Upper: suede-effect microfiber","Elasticated topline, no strap needed","Padded footbed","True to size"]
  },
  {
    id: 4, badge: "04", name: "Nude Block Heel", category: "Heels", heel: "Mid",
    heelLabel: "Mid heel · 2.5\"", price: 4299, rating: 4.5, reviews: 74, tag: null,
    sizes: PK_SIZES,
    images: [
      "https://images.unsplash.com/photo-1518049362265-d5b2a6467637?w=800&q=80",
      "https://images.unsplash.com/photo-1518049362265-d5b2a6467637?w=800&q=80&sat=-10",
      "https://images.unsplash.com/photo-1603487742131-4160ec999306?w=800&q=80"
    ],
    shortDesc: "A nude block-heel sandal built for stability without giving up height.",
    description: "The Nude Block Heel swaps a thin stiletto for a wider, sturdier heel base so you get the height without the wobble. Two slim front straps and a cushioned footbed make this the sandal you can actually walk in all day, not just pose in.",
    details: ["Heel height: 2.5\" (6.5cm) block heel","Upper: faux-leather straps","Cushioned footbed","Adjustable ankle buckle","True to size"]
  },
  {
    id: 5, badge: "05", name: "Gilded Strap Sandal", category: "Sandals", heel: "Flat",
    heelLabel: "Flat sole", price: 2899, rating: 4.4, reviews: 61, tag: "New",
    sizes: PK_SIZES,
    images: [
      "https://images.unsplash.com/photo-1603487742131-4160ec999306?w=800&q=80",
      "https://images.unsplash.com/photo-1603487742131-4160ec999306?w=800&q=80&sat=-10",
      "https://images.unsplash.com/photo-1562273138-f46be4ebdf33?w=800&q=80"
    ],
    shortDesc: "A gold strappy flat sandal for warm-weather days and dressier casual looks.",
    description: "Thin metallic-gold straps crisscross over a flexible flat sole in this warm-weather essential. Lightweight and breathable, the Gilded Strap Sandal is built for days that move between errands and dinner without a shoe change.",
    details: ["Sole: flexible rubber, flat","Upper: metallic faux-leather straps","Adjustable ankle buckle","Lightweight, under 200g per shoe","True to size"]
  },
  {
    id: 6, badge: "06", name: "Onyx Ankle Boot", category: "Boots", heel: "Mid",
    heelLabel: "Mid heel · 2\"", price: 5999, rating: 4.7, reviews: 103, tag: "Bestseller",
    sizes: PK_SIZES,
    images: [
      "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=800&q=80",
      "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=800&q=80&sat=-10",
      "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?w=800&q=80"
    ],
    shortDesc: "A black ankle boot with a side zip and a heel low enough to wear all day.",
    description: "The Onyx Ankle Boot is the boot you'll wear into the ground — a matte black finish, a side zip for quick on-and-off, and a 2-inch heel that adds shape without sacrificing comfort. Pairs with jeans, dresses, and everything between.",
    details: ["Heel height: 2\" (5cm)","Upper: matte faux-leather","Side zip closure","Cushioned insole","True to size"]
  },
  {
    id: 7, badge: "07", name: "Scarlet Pointed Pump", category: "Heels", heel: "High",
    heelLabel: "High heel · 3.5\"", price: 4799, rating: 4.6, reviews: 95, tag: null,
    sizes: PK_SIZES,
    images: [
      "https://images.unsplash.com/photo-1560343090-f0409e92791a?w=800&q=80",
      "https://images.unsplash.com/photo-1560343090-f0409e92791a?w=800&q=80&sat=-10",
      "https://images.unsplash.com/photo-1596703263926-eb0762ee17e4?w=800&q=80"
    ],
    shortDesc: "A sharp red pointed-toe pump built to be the statement piece of any outfit.",
    description: "A pointed toe, a clean vamp line, and a saturated red finish — the Scarlet Pointed Pump is designed to do the talking. The 3.5-inch heel sits on a slightly wider base than a stiletto for extra confidence on the dance floor.",
    details: ["Heel height: 3.5\" (9cm)","Upper: smooth matte faux-leather","Pointed toe, slip-on fit","Cushioned insole","True to size"]
  },
  {
    id: 8, badge: "08", name: "Cloud Platform Sneaker", category: "Sneakers", heel: "Low",
    heelLabel: "Low platform · 1.5\"", price: 6299, rating: 4.9, reviews: 210, tag: "Bestseller",
    sizes: PK_SIZES,
    images: [
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&q=80",
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&q=80&sat=-10",
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=800&q=80"
    ],
    shortDesc: "A chunky platform sneaker in cream that adds height without a heel.",
    description: "The Cloud Platform Sneaker gives you an extra 1.5 inches of height through a chunky rubber sole, no heel required. Finished in soft cream with tonal stitching, it's built for days you want the sneaker comfort with a little more presence.",
    details: ["Platform height: 1.5\" (4cm)","Upper: canvas and faux-leather","Cushioned high-rebound midsole","Lace-up closure","True to size"]
  },
  {
    id: 9, badge: "09", name: "Terracotta Wedge", category: "Sandals", heel: "Mid",
    heelLabel: "Mid wedge · 2.5\"", price: 3599, rating: 4.5, reviews: 67, tag: null,
    sizes: PK_SIZES,
    images: [
      "https://images.unsplash.com/photo-1562273138-f46be4ebdf33?w=800&q=80",
      "https://images.unsplash.com/photo-1562273138-f46be4ebdf33?w=800&q=80&sat=-10",
      "https://images.unsplash.com/photo-1603487742131-4160ec999306?w=800&q=80"
    ],
    shortDesc: "A tan woven wedge sandal that's stable enough for all-day wear.",
    description: "A woven wedge in warm terracotta tan, built on a wider base than a heel so you get the lift without the balancing act. Open-toe straps keep it breathable for summer, and the wedge shape means it works on grass, cobblestone, and pavement alike.",
    details: ["Wedge height: 2.5\" (6.5cm)","Upper: woven textile straps","Cushioned footbed","Adjustable ankle strap","True to size"]
  },
  {
    id: 10, badge: "10", name: "Petal Pointed Flat", category: "Flats", heel: "Flat",
    heelLabel: "Flat sole", price: 2999, rating: 4.6, reviews: 84, tag: "New",
    sizes: PK_SIZES,
    images: [
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&q=80",
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&q=80&sat=-10",
      "https://images.unsplash.com/photo-1573100925118-870b8efc799d?w=800&q=80"
    ],
    shortDesc: "A soft pink pointed-toe flat that dresses up jeans or a skirt equally well.",
    description: "The Petal Pointed Flat brings a pointed toe — usually reserved for heels — down to a completely flat, all-day sole. Soft pink faux-leather and a low-cut vamp make this the flat that still feels a little dressed up.",
    details: ["Sole: flexible non-slip rubber","Upper: soft faux-leather","Pointed toe, low-cut vamp","Padded footbed","True to size"]
  },
  {
    id: 11, badge: "11", name: "Suede Chelsea Boot", category: "Boots", heel: "Flat",
    heelLabel: "Flat sole", price: 5499, rating: 4.6, reviews: 79, tag: null,
    sizes: PK_SIZES,
    images: [
      "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?w=800&q=80",
      "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?w=800&q=80&sat=-10",
      "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=800&q=80"
    ],
    shortDesc: "A brown suede-effect Chelsea boot with elastic side panels for an easy fit.",
    description: "A classic Chelsea silhouette in warm brown suede-effect finish, with elastic side panels that make it a slip-on fit and a pull tab at the back for easy on-and-off. Flat and grippy underfoot, built for daily wear through cooler months.",
    details: ["Sole: flat rubber, non-slip","Upper: suede-effect microfiber","Elastic side-panel slip-on fit","Back pull tab","True to size"]
  },
  {
    id: 12, badge: "12", name: "Noir Kitten Heel", category: "Heels", heel: "Low",
    heelLabel: "Low heel · 1.5\"", price: 3899, rating: 4.7, reviews: 118, tag: null,
    sizes: PK_SIZES,
    images: [
      "https://images.unsplash.com/photo-1515347619252-60a4bf4fff4f?w=800&q=80",
      "https://images.unsplash.com/photo-1515347619252-60a4bf4fff4f?w=800&q=80&sat=-10",
      "https://images.unsplash.com/photo-1560343090-f0409e92791a?w=800&q=80"
    ],
    shortDesc: "A black kitten heel for anyone who wants the height without the height.",
    description: "The Noir Kitten Heel is the answer for anyone who loves the look of a heel but wants to actually walk normally in it. A slim 1.5-inch heel, a rounded toe, and a soft matte black finish make this the office-to-dinner shoe that does double duty.",
    details: ["Heel height: 1.5\" (4cm) kitten heel","Upper: matte faux-leather","Rounded toe, slip-on fit","Cushioned insole","True to size"]
  },
  {
    id: 13, badge: "13", name: "Champagne Sling-back", category: "Heels", heel: "Mid",
    heelLabel: "Mid heel · 2.5\"", price: 4499, rating: 4.5, reviews: 58, tag: "New",
    sizes: PK_SIZES,
    images: [
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&q=80&sat=20",
      "https://images.unsplash.com/photo-1518049362265-d5b2a6467637?w=800&q=80&sat=20",
      "https://images.unsplash.com/photo-1596703263926-eb0762ee17e4?w=800&q=80&sat=20"
    ],
    shortDesc: "A champagne sling-back heel with an elasticated back strap for a secure fit.",
    description: "The Champagne Sling-back pairs a soft metallic finish with a stretch back-strap, so it stays put without pinching. The rounded toe and mid-height heel make it an easy everyday dress-up shoe.",
    details: ["Heel height: 2.5\" (6.5cm)","Upper: metallic faux-leather","Elasticated sling-back strap","Cushioned insole","True to size"]
  },
  {
    id: 14, badge: "14", name: "Ivory Wedding Pump", category: "Heels", heel: "High",
    heelLabel: "High heel · 3.5\"", price: 5199, rating: 4.8, reviews: 142, tag: "Bestseller",
    sizes: PK_SIZES,
    images: [
      "https://images.unsplash.com/photo-1560343090-f0409e92791a?w=800&q=80&sat=-30",
      "https://images.unsplash.com/photo-1518049362265-d5b2a6467637?w=800&q=80&sat=-30",
      "https://images.unsplash.com/photo-1596703263926-eb0762ee17e4?w=800&q=80&sat=-30"
    ],
    shortDesc: "An ivory satin-effect pump built for wedding guests and big-day brides alike.",
    description: "Finished in a soft ivory satin-effect fabric with a subtle sheen, the Ivory Wedding Pump is cut for special occasions — pointed toe, a padded insole for long receptions, and a heel height that photographs beautifully without punishing your feet by the last dance.",
    details: ["Heel height: 3.5\" (9cm)","Upper: satin-effect fabric","Padded insole for all-day events","Pointed toe, slip-on fit","True to size"]
  },
  {
    id: 15, badge: "15", name: "Cherry Mary Jane Heel", category: "Heels", heel: "Mid",
    heelLabel: "Mid heel · 2\"", price: 4399, rating: 4.6, reviews: 71, tag: null,
    sizes: PK_SIZES,
    images: [
      "https://images.unsplash.com/photo-1596703263926-eb0762ee17e4?w=800&q=80&sat=40",
      "https://images.unsplash.com/photo-1560343090-f0409e92791a?w=800&q=80&sat=40",
      "https://images.unsplash.com/photo-1518049362265-d5b2a6467637?w=800&q=80&sat=40"
    ],
    shortDesc: "A cherry-red Mary Jane heel with a buckled ankle strap for a retro edge.",
    description: "The Cherry Mary Jane Heel brings back the classic buckled strap silhouette in a bold cherry-red finish. A rounded toe and mid heel keep it wearable for full days out, while the vintage-inspired strap adds a bit of personality most block heels don't have.",
    details: ["Heel height: 2\" (5cm) block heel","Upper: glossy faux-leather","Adjustable buckle ankle strap","Cushioned footbed","True to size"]
  },
  {
    id: 16, badge: "16", name: "Sage Suede Loafer", category: "Flats", heel: "Flat",
    heelLabel: "Flat sole", price: 3399, rating: 4.5, reviews: 63, tag: null,
    sizes: PK_SIZES,
    images: [
      "https://images.unsplash.com/photo-1573100925118-870b8efc799d?w=800&q=80&sat=-30",
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&q=80&sat=-30",
      "https://images.unsplash.com/photo-1573100925118-870b8efc799d?w=800&q=80&sat=30"
    ],
    shortDesc: "A sage-green suede-effect loafer for a relaxed, put-together everyday look.",
    description: "The Sage Suede Loafer takes the traditional penny loafer shape and softens it in a muted sage suede-effect finish. Slip-on and flexible, it's built for days you want to look pulled-together without thinking about your feet at all.",
    details: ["Sole: flexible rubber","Upper: suede-effect microfiber","Slip-on penny loafer style","Padded footbed","True to size"]
  },
  {
    id: 17, badge: "17", name: "Ivory Bow Flat", category: "Flats", heel: "Flat",
    heelLabel: "Flat sole", price: 2799, rating: 4.4, reviews: 55, tag: "New",
    sizes: PK_SIZES,
    images: [
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&q=80&sat=-40",
      "https://images.unsplash.com/photo-1573100925118-870b8efc799d?w=800&q=80&sat=-40",
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&q=80&brightness=10"
    ],
    shortDesc: "An ivory ballet flat finished with a soft grosgrain bow at the toe.",
    description: "A dainty grosgrain bow sits at the toe of this ivory ballet flat, giving it a slightly dressier edge than a plain round-toe flat. Soft, flexible, and light enough to carry in a bag for the walk home.",
    details: ["Sole: flexible non-slip rubber","Upper: soft faux-leather with grosgrain bow","Elasticated topline","Padded footbed","True to size"]
  },
  {
    id: 18, badge: "18", name: "Camel Pointed Flat", category: "Flats", heel: "Flat",
    heelLabel: "Flat sole", price: 3099, rating: 4.5, reviews: 49, tag: null,
    sizes: PK_SIZES,
    images: [
      "https://images.unsplash.com/photo-1573100925118-870b8efc799d?w=800&q=80&sat=10",
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&q=80&sat=10",
      "https://images.unsplash.com/photo-1573100925118-870b8efc799d?w=800&q=80&brightness=-10"
    ],
    shortDesc: "A camel pointed-toe flat that layers effortlessly under trousers or skirts.",
    description: "The Camel Pointed Flat is the neutral your wardrobe is missing — a sharp pointed toe in a warm camel tone that works under wide-leg trousers, midi skirts, or straight off the shelf with jeans.",
    details: ["Sole: flexible non-slip rubber","Upper: soft faux-leather","Pointed toe, low-cut vamp","Padded footbed","True to size"]
  },
  {
    id: 19, badge: "19", name: "Voltage Knit Runner", category: "Sneakers", heel: "Low",
    heelLabel: "Low platform · 1\"", price: 6199, rating: 4.7, reviews: 121, tag: "Bestseller",
    sizes: PK_SIZES,
    images: [
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=800&q=80&sat=30",
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&q=80&sat=30",
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=800&q=80&hue=200"
    ],
    shortDesc: "A knit-upper running sneaker in cobalt for all-day wear and actual workouts.",
    description: "The Voltage Knit Runner uses a stretch-knit upper that moves with your foot, paired with a responsive cushioned midsole. Built to double as your gym shoe and your everyday sneaker without either job feeling like a compromise.",
    details: ["Sole: high-rebound cushioned midsole","Upper: stretch-knit mesh","Reflective heel detailing","Lace-up closure","True to size"]
  },
  {
    id: 20, badge: "20", name: "Drift Cream Low", category: "Sneakers", heel: "Flat",
    heelLabel: "Flat sole", price: 5599, rating: 4.6, reviews: 92, tag: null,
    sizes: PK_SIZES,
    images: [
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&q=80&sat=-20",
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=800&q=80&sat=-20",
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&q=80&brightness=10"
    ],
    shortDesc: "A cream and cobalt low-top sneaker for an everyday casual rotation.",
    description: "Drift Cream Low keeps things simple — a soft cream base with a pop of cobalt at the heel tab, a low-top cut, and a comfortable rubber sole built for full days of walking around town.",
    details: ["Sole: lightweight rubber","Upper: canvas and faux-leather","Padded ankle collar","Lace-up closure","True to size"]
  },
  {
    id: 21, badge: "21", name: "Ashfield Mid Trainer", category: "Sneakers", heel: "Mid",
    heelLabel: "Mid platform · 2\"", price: 5999, rating: 4.5, reviews: 68, tag: "New",
    sizes: PK_SIZES,
    images: [
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=800&q=80&hue=90",
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&q=80&hue=90",
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=800&q=80&sat=-30"
    ],
    shortDesc: "A grey mid-top trainer with extra cushioning for longer days on your feet.",
    description: "Ashfield Mid Trainer sits between a sneaker and a boot — a mid-top silhouette in soft grey with extra ankle support and a thicker midsole, built for the days your usual sneaker just isn't enough shoe.",
    details: ["Sole: extra-cushioned EVA midsole","Upper: mixed canvas and mesh","Mid-top ankle support","Lace-up closure","True to size"]
  },
  {
    id: 22, badge: "22", name: "Coral Platform Slide", category: "Sandals", heel: "Low",
    heelLabel: "Low platform · 1.5\"", price: 3299, rating: 4.6, reviews: 76, tag: null,
    sizes: PK_SIZES,
    images: [
      "https://images.unsplash.com/photo-1603487742131-4160ec999306?w=800&q=80&hue=340",
      "https://images.unsplash.com/photo-1562273138-f46be4ebdf33?w=800&q=80&hue=340",
      "https://images.unsplash.com/photo-1603487742131-4160ec999306?w=800&q=80&sat=40"
    ],
    shortDesc: "A coral platform slide sandal for pool days and easy summer outfits.",
    description: "The Coral Platform Slide is a slip-on sandal with a chunky platform sole in a bright coral tone — easy on, easy off, and sturdy enough for pavement, poolside, or a full day of errands.",
    details: ["Platform height: 1.5\" (4cm)","Upper: soft faux-leather strap","Slip-on, no buckle needed","Water-resistant sole","True to size"]
  },
  {
    id: 23, badge: "23", name: "Ivory Espadrille Wedge", category: "Sandals", heel: "High",
    heelLabel: "High wedge · 4\"", price: 3799, rating: 4.7, reviews: 89, tag: "Bestseller",
    sizes: PK_SIZES,
    images: [
      "https://images.unsplash.com/photo-1562273138-f46be4ebdf33?w=800&q=80&brightness=15",
      "https://images.unsplash.com/photo-1603487742131-4160ec999306?w=800&q=80&brightness=15",
      "https://images.unsplash.com/photo-1562273138-f46be4ebdf33?w=800&q=80&sat=-30"
    ],
    shortDesc: "An ivory espadrille wedge with ankle ties for warm-weather height.",
    description: "The Ivory Espadrille Wedge wraps a jute-effect wedge sole in ivory fabric straps that tie at the ankle. Tall enough to make a statement, stable enough to actually walk a summer wedding in.",
    details: ["Wedge height: 4\" (10cm)","Upper: fabric straps with ankle tie","Jute-effect wrapped wedge sole","Padded footbed","True to size"]
  },
  {
    id: 24, badge: "24", name: "Berry Toe-loop Sandal", category: "Sandals", heel: "Flat",
    heelLabel: "Flat sole", price: 2599, rating: 4.3, reviews: 41, tag: null,
    sizes: PK_SIZES,
    images: [
      "https://images.unsplash.com/photo-1603487742131-4160ec999306?w=800&q=80&hue=280",
      "https://images.unsplash.com/photo-1562273138-f46be4ebdf33?w=800&q=80&hue=280",
      "https://images.unsplash.com/photo-1603487742131-4160ec999306?w=800&q=80&brightness=-10"
    ],
    shortDesc: "A berry-toned toe-loop sandal that's light enough to forget you're wearing.",
    description: "A minimal toe-loop sandal in a deep berry shade, built on a flexible flat sole. Lightweight, breathable, and easy to slip on for anything from a grocery run to a beach walk.",
    details: ["Sole: flexible rubber, flat","Upper: soft faux-leather toe-loop strap","Adjustable ankle strap","Lightweight, under 180g per shoe","True to size"]
  },
  {
    id: 25, badge: "25", name: "Charcoal Combat Boot", category: "Boots", heel: "Low",
    heelLabel: "Low heel · 1.5\"", price: 6499, rating: 4.8, reviews: 134, tag: "Bestseller",
    sizes: PK_SIZES,
    images: [
      "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=800&q=80&sat=-30",
      "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?w=800&q=80&sat=-30",
      "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=800&q=80&brightness=-15"
    ],
    shortDesc: "A charcoal combat boot with lace-up front and a lightly lugged sole.",
    description: "The Charcoal Combat Boot brings the classic lace-up combat silhouette in a softened charcoal finish. A lightly lugged sole adds grip for wet weather, while the low heel keeps it wearable well past the first hour.",
    details: ["Heel height: 1.5\" (4cm)","Upper: matte faux-leather","Lace-up front, 6 eyelets","Lightly lugged rubber sole","True to size"]
  },
  {
    id: 26, badge: "26", name: "Rust Suede Knee Boot", category: "Boots", heel: "Mid",
    heelLabel: "Mid heel · 2.5\"", price: 6899, rating: 4.6, reviews: 57, tag: "New",
    sizes: PK_SIZES,
    images: [
      "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?w=800&q=80&hue=30",
      "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=800&q=80&hue=30",
      "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?w=800&q=80&sat=30"
    ],
    shortDesc: "A rust suede-effect knee boot for cooler days and dressier fall outfits.",
    description: "The Rust Suede Knee Boot pulls a rich autumn tone over a knee-high silhouette, with a mid-height block heel and a hidden side zip for an easy on-and-off. Built to be the boot you reach for from the first cold snap through winter.",
    details: ["Heel height: 2.5\" (6.5cm) block heel","Upper: suede-effect microfiber","Full-length side zip","Cushioned insole","True to size"]
  },
  {
    id: 27, badge: "27", name: "Woven Raffia Ballet Flat", category: "Flats", heel: "Flat",
    heelLabel: "Flat sole", price: 3699, rating: 4.7, reviews: 96, tag: "New",
    sizes: PK_SIZES,
    images: [
      "https://images.unsplash.com/photo-1573100925118-870b8efc799d?w=800&q=80&hue=40",
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&q=80&hue=40",
      "https://images.unsplash.com/photo-1573100925118-870b8efc799d?w=800&q=80&sat=50"
    ],
    shortDesc: "A hand-woven raffia-effect ballet flat with a rounded toe, resort-luxe finish.",
    description: "The Woven Raffia Ballet Flat brings a hand-woven straw-effect texture to the classic ballet silhouette — the kind of quiet-luxury detail usually reserved for designer resort collections. Pairs beautifully with linen trousers or a slip dress.",
    details: ["Sole: flexible non-slip rubber","Upper: woven raffia-effect textile","Leather-effect trim binding","Padded footbed","True to size"]
  },
  {
    id: 28, badge: "28", name: "Quilted Chain Loafer", category: "Flats", heel: "Flat",
    heelLabel: "Flat sole", price: 4199, rating: 4.8, reviews: 147, tag: "Bestseller",
    sizes: PK_SIZES,
    images: [
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&q=80&sat=-20&hue=20",
      "https://images.unsplash.com/photo-1573100925118-870b8efc799d?w=800&q=80&sat=-20&hue=20",
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&q=80&brightness=15"
    ],
    shortDesc: "A quilted leather-effect loafer finished with a polished chain-link trim.",
    description: "Inspired by the quilted-and-chain detailing you'd find on a runway loafer, this pair keeps the diamond-stitch quilting and gold-tone chain trim while staying fully flat and wearable for everyday errands, not just editorial shoots.",
    details: ["Sole: flexible rubber, flat","Upper: quilted faux-leather","Gold-tone chain-link trim","Slip-on loafer fit","True to size"]
  },
  {
    id: 29, badge: "29", name: "Crochet Espadrille Slide", category: "Sandals", heel: "Flat",
    heelLabel: "Flat sole", price: 2999, rating: 4.5, reviews: 62, tag: "New",
    sizes: PK_SIZES,
    images: [
      "https://images.unsplash.com/photo-1603487742131-4160ec999306?w=800&q=80&hue=60",
      "https://images.unsplash.com/photo-1562273138-f46be4ebdf33?w=800&q=80&hue=60",
      "https://images.unsplash.com/photo-1603487742131-4160ec999306?w=800&q=80&sat=60"
    ],
    shortDesc: "A hand-crochet upper slide on a flexible jute-effect espadrille sole.",
    description: "The Crochet Espadrille Slide has an open, hand-crochet knit upper over a jute-effect flat sole — breezy, breathable, and built for beach clubs, brunches, and everything between. A textural statement piece that still slips on in two seconds.",
    details: ["Sole: jute-effect flat espadrille sole","Upper: hand-crochet knit","Open-weave, breathable fit","Slip-on, no strap","True to size"]
  },
  {
    id: 30, badge: "30", name: "Pearl-buckle Kitten Heel", category: "Heels", heel: "Low",
    heelLabel: "Low heel · 1.5\"", price: 4599, rating: 4.7, reviews: 88, tag: "Bestseller",
    sizes: PK_SIZES,
    images: [
      "https://images.unsplash.com/photo-1515347619252-60a4bf4fff4f?w=800&q=80&sat=30",
      "https://images.unsplash.com/photo-1560343090-f0409e92791a?w=800&q=80&sat=30",
      "https://images.unsplash.com/photo-1515347619252-60a4bf4fff4f?w=800&q=80&brightness=15"
    ],
    shortDesc: "A satin kitten heel finished with a hand-set pearl buckle at the vamp.",
    description: "A soft ivory satin-effect kitten heel with a hand-set pearl buckle across the vamp — the kind of small, jewelry-like detail that elevates a basic heel into something you'd photograph. Comfortable enough for a full evening, dressy enough for the occasion.",
    details: ["Heel height: 1.5\" (4cm) kitten heel","Upper: satin-effect fabric","Hand-set pearl buckle trim","Cushioned insole","True to size"]
  },
  {
    id: 31, badge: "31", name: "Monogram-embossed Mule", category: "Flats", heel: "Flat",
    heelLabel: "Flat sole", price: 3999, rating: 4.6, reviews: 73, tag: "New",
    sizes: PK_SIZES,
    images: [
      "https://images.unsplash.com/photo-1573100925118-870b8efc799d?w=800&q=80&hue=280",
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&q=80&hue=280",
      "https://images.unsplash.com/photo-1573100925118-870b8efc799d?w=800&q=80&brightness=-10"
    ],
    shortDesc: "A backless mule with an all-over embossed monogram-style print.",
    description: "The Monogram-embossed Mule takes the all-over embossed-print treatment you see on luxury travel accessories and puts it on a backless, slide-on mule. Easy to kick off, effortless to style, and instantly recognizable from across the room.",
    details: ["Sole: flexible non-slip rubber","Upper: embossed faux-leather","Backless mule, slip-on fit","Padded footbed","True to size"]
  },
  {
    id: 32, badge: "32", name: "Woven Cane Platform Sandal", category: "Sandals", heel: "Mid",
    heelLabel: "Mid platform · 2\"", price: 4299, rating: 4.6, reviews: 54, tag: null,
    sizes: PK_SIZES,
    images: [
      "https://images.unsplash.com/photo-1562273138-f46be4ebdf33?w=800&q=80&hue=20",
      "https://images.unsplash.com/photo-1603487742131-4160ec999306?w=800&q=80&hue=20",
      "https://images.unsplash.com/photo-1562273138-f46be4ebdf33?w=800&q=80&brightness=10"
    ],
    shortDesc: "A woven cane-effect platform sole with soft leather-effect toe straps.",
    description: "A basket-weave cane-effect platform sits under soft, wide toe straps in this warm-weather sandal — natural texture underfoot with real stability, built for long days that move from market streets to dinner reservations.",
    details: ["Platform height: 2\" (5cm)","Upper: soft faux-leather straps","Woven cane-effect platform sole","Adjustable ankle strap","True to size"]
  },
  {
    id: 33, badge: "33", name: "Structured Bow Ballet Pump", category: "Heels", heel: "Low",
    heelLabel: "Low heel · 1\"", price: 4099, rating: 4.7, reviews: 101, tag: "Bestseller",
    sizes: PK_SIZES,
    images: [
      "https://images.unsplash.com/photo-1560343090-f0409e92791a?w=800&q=80&sat=-10&hue=340",
      "https://images.unsplash.com/photo-1515347619252-60a4bf4fff4f?w=800&q=80&hue=340",
      "https://images.unsplash.com/photo-1560343090-f0409e92791a?w=800&q=80&brightness=15"
    ],
    shortDesc: "A ballet pump with a structured grosgrain bow and the lightest hint of heel.",
    description: "The Structured Bow Ballet Pump takes the classic ballet flat and lifts it just slightly, with a barely-there heel and a crisp, sculptural grosgrain bow at the toe. Recital-inspired, but built for the office, not the stage.",
    details: ["Heel height: 1\" (2.5cm) mini heel","Upper: satin-effect fabric with structured bow","Elasticated topline","Padded footbed","True to size"]
  },
  {
    id: 34, badge: "34", name: "Metallic Woven Slingback", category: "Heels", heel: "Mid",
    heelLabel: "Mid heel · 2\"", price: 4699, rating: 4.5, reviews: 47, tag: "New",
    sizes: PK_SIZES,
    images: [
      "https://images.unsplash.com/photo-1518049362265-d5b2a6467637?w=800&q=80&hue=45",
      "https://images.unsplash.com/photo-1596703263926-eb0762ee17e4?w=800&q=80&hue=45",
      "https://images.unsplash.com/photo-1518049362265-d5b2a6467637?w=800&q=80&sat=60"
    ],
    shortDesc: "A woven metallic upper slingback heel with a soft elasticated back strap.",
    description: "A woven metallic-gold upper catches the light on this slingback heel, while the elasticated back strap keeps it secure without a buckle to fuss with. Dressy enough for a wedding season full of events, comfortable enough to actually dance in.",
    details: ["Heel height: 2\" (5cm)","Upper: woven metallic faux-leather","Elasticated sling-back strap","Cushioned insole","True to size"]
  }
];

/* Helper: find a product by id (used on product.html) */
function getProductById(id){
  return PRODUCTS.find(p => p.id === Number(id));
}

/* Helper: related products — same category, excluding current */
function getRelatedProducts(product, limit = 4){
  return PRODUCTS.filter(p => p.category === product.category && p.id !== product.id).slice(0, limit);
}
/* =========================================================
   IZZA — Shared cart logic + interactions (all pages)
   Cart persists across pages via localStorage so it behaves
   like a real store. Falls back to an in-memory cart if
   localStorage is unavailable in the current environment.
   ========================================================= */

const CART_KEY = "izza_cart_v1";
const WISHLIST_KEY = "izza_wishlist_v1";
let memoryCart = [];
let memoryWishlist = [];
let storageAvailable = true;

function loadCart(){
  try{
    const raw = localStorage.getItem(CART_KEY);
    return raw ? JSON.parse(raw) : [];
  }catch(e){
    storageAvailable = false;
    return memoryCart;
  }
}

function saveCart(cart){
  try{
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
  }catch(e){
    storageAvailable = false;
    memoryCart = cart;
  }
}

function getCart(){
  return storageAvailable ? loadCart() : memoryCart;
}

function loadWishlist(){
  try{
    const raw = localStorage.getItem(WISHLIST_KEY);
    return raw ? JSON.parse(raw) : [];
  }catch(e){
    return memoryWishlist;
  }
}

function saveWishlist(list){
  try{
    localStorage.setItem(WISHLIST_KEY, JSON.stringify(list));
  }catch(e){
    memoryWishlist = list;
  }
}

function isWishlisted(productId){
  return loadWishlist().includes(Number(productId));
}

function toggleWishlist(productId, btnEl){
  productId = Number(productId);
  let list = loadWishlist();
  const already = list.includes(productId);
  if(already){
    list = list.filter(id => id !== productId);
  } else {
    list.push(productId);
  }
  saveWishlist(list);
  if(btnEl){
    btnEl.classList.toggle("active", !already);
    const icon = btnEl.querySelector("i");
    if(icon) icon.className = !already ? "bi bi-heart-fill" : "bi bi-heart";
  }
  showToast(already ? "Removed from wishlist" : "Saved to wishlist");
}

function formatPrice(n){
  return "Rs " + Number(n).toLocaleString("en-IN");
}

function addToCart(product, size, qty = 1){
  const cart = getCart();
  const existing = cart.find(item => item.id === product.id && item.size === size);
  if(existing){
    existing.qty += qty;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      size: size,
      qty: qty
    });
  }
  saveCart(cart);
  renderCartUI();
  showToast(`${product.name} (${size}) added to bag`);
}

function updateQty(index, delta){
  const cart = getCart();
  if(!cart[index]) return;
  cart[index].qty += delta;
  if(cart[index].qty <= 0) cart.splice(index, 1);
  saveCart(cart);
  renderCartUI();
}

function removeFromCart(index){
  const cart = getCart();
  cart.splice(index, 1);
  saveCart(cart);
  renderCartUI();
}

function clearCart(){
  saveCart([]);
  renderCartUI();
}

function cartSubtotal(cart){
  return cart.reduce((sum, item) => sum + item.qty * item.price, 0);
}

function renderCartUI(){
  const cart = getCart();
  const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
  const subtotal = cartSubtotal(cart);

  document.querySelectorAll(".js-cart-count").forEach(el => { el.textContent = totalQty; });
  document.querySelectorAll(".js-cart-subtotal").forEach(el => { el.textContent = formatPrice(subtotal); });

  const listEl = document.getElementById("cartItemsList");
  if(listEl){
    if(cart.length === 0){
      listEl.innerHTML = `<p class="text-ink-soft text-center py-5 mb-0">Your bag is empty. Add a pair to get started.</p>`;
    } else {
      listEl.innerHTML = cart.map((item, i) => `
        <div class="cart-row mb-3">
          <img src="${item.image}" alt="${item.name}" style="width:56px;height:56px;object-fit:cover;border-radius:10px;flex:0 0 auto;">
          <div class="flex-grow-1" style="min-width:0;">
            <h6 class="mb-0">${item.name}</h6>
            <span class="small text-ink-soft">${item.size} · ${formatPrice(item.price)}</span>
          </div>
          <div class="d-flex align-items-center gap-2 flex-shrink-0">
            <button class="qty-btn" onclick="updateQty(${i}, -1)" aria-label="Decrease quantity">−</button>
            <span class="fw-bold small" style="min-width:16px;text-align:center;">${item.qty}</span>
            <button class="qty-btn" onclick="updateQty(${i}, 1)" aria-label="Increase quantity">+</button>
          </div>
        </div>
      `).join("");
    }
  }
}

function showToast(msg){
  let toastEl = document.getElementById("izzaToast");
  if(!toastEl){
    toastEl = document.createElement("div");
    toastEl.id = "izzaToast";
    toastEl.className = "toast-izza position-fixed bottom-0 start-50 translate-middle-x mb-4 px-4 py-2 fw-bold";
    toastEl.style.zIndex = 1080;
    toastEl.style.opacity = "0";
    toastEl.style.transition = "opacity .25s ease, transform .25s ease";
    toastEl.style.transform = "translate(-50%, 12px)";
    document.body.appendChild(toastEl);
  }
  toastEl.textContent = msg;
  requestAnimationFrame(() => {
    toastEl.style.opacity = "1";
    toastEl.style.transform = "translate(-50%, 0)";
  });
  clearTimeout(window._izzaToastTimer);
  window._izzaToastTimer = setTimeout(() => {
    toastEl.style.opacity = "0";
    toastEl.style.transform = "translate(-50%, 12px)";
  }, 2200);
}

function renderStars(rating){
  const full = Math.floor(rating);
  const hasHalf = rating - full >= 0.5;
  let html = "";
  for(let i = 0; i < 5; i++){
    if(i < full) html += `<i class="bi bi-star-fill"></i>`;
    else if(i === full && hasHalf) html += `<i class="bi bi-star-half"></i>`;
    else html += `<i class="bi bi-star"></i>`;
  }
  return html;
}

/* Renders a large "look freely" editorial tile — big image, no card box, hover icons */
function editorialTileHTML(p){
  const wishActive = isWishlisted(p.id) ? "active" : "";
  const heartIcon = isWishlisted(p.id) ? "bi-heart-fill" : "bi-heart";
  return `
  <div class="col-md-6" data-reveal>
    <div class="editorial-tile">
      <a href="product.html?id=${p.id}">
        <img src="${p.images[0]}" alt="${p.name}" loading="lazy">
      </a>
      <div class="editorial-actions">
        <button type="button" class="editorial-icon-btn ${wishActive}" onclick="toggleWishlist(${p.id}, this)" aria-label="Save ${p.name} to wishlist">
          <i class="bi ${heartIcon}"></i>
        </button>
        <a href="product.html?id=${p.id}" class="editorial-icon-btn" aria-label="View ${p.name} in full">
          <i class="bi bi-arrow-right"></i>
        </a>
      </div>
      <div class="editorial-caption">
        <span class="eyebrow mb-2">${p.tag || p.category}</span>
        <h3>${p.name}</h3>
        <span class="price-tag">${formatPrice(p.price)}</span>
      </div>
    </div>
  </div>`;
}

/* Renders a product card — used on home + shop pages */
function productCardHTML(p, opts = {}){
  const wide = opts.wide ? " product-card-wide" : "";
  const wishActive = isWishlisted(p.id) ? "active" : "";
  const heartIcon = isWishlisted(p.id) ? "bi-heart-fill" : "bi-heart";
  return `
  <div class="col-6 col-lg-3" data-reveal>
    <div class="product-card${wide}">
      <a href="product.html?id=${p.id}" class="text-decoration-none text-reset">
        <div class="card-media">
          <span class="badge-num">${p.badge}</span>
          ${p.tag ? `<span class="ribbon-tag ribbon-${p.tag.toLowerCase()}">${p.tag}</span>` : ""}
          <img src="${p.images[0]}" alt="${p.name}" loading="lazy">
        </div>
      </a>
      <div class="card-actions">
        <button type="button" class="wishlist-btn ${wishActive}" onclick="toggleWishlist(${p.id}, this)" aria-label="Save ${p.name} to wishlist">
          <i class="bi ${heartIcon}"></i>
        </button>
        <button type="button" class="quickview-btn" onclick="openQuickView(${p.id})" aria-label="Quick view ${p.name}">
          <i class="bi bi-eye"></i>
        </button>
      </div>
      <div class="card-body">
        <div class="d-flex justify-content-between align-items-center">
          <span class="card-meta">${p.category}</span>
          <span class="heel-pill">${p.heel === "Flat" ? "Flat" : p.heel + " heel"}</span>
        </div>
        <a href="product.html?id=${p.id}" class="text-decoration-none text-reset">
          <h5 class="mb-1">${p.name}</h5>
        </a>
        <div class="rating-line mb-2">${renderStars(p.rating)} <span class="rating-count">(${p.reviews})</span></div>
        <div class="d-flex align-items-center justify-content-between mt-auto">
          <span class="price-tag">${formatPrice(p.price)}</span>
          <a href="product.html?id=${p.id}" class="add-btn text-decoration-none" aria-label="View ${p.name}">→</a>
        </div>
      </div>
    </div>
  </div>`;
}

/* =========================================================
   Scroll reveal — progressive enhancement, never hides content
   if JS fails to run. See the [data-reveal] rules in style.css.

   IMPORTANT: this includes a hard safety-net timeout. Some
   preview/sandboxed environments don't fire IntersectionObserver
   callbacks reliably, so we never depend on it alone — every
   [data-reveal] element is force-revealed shortly after it
   appears, animation or not.
   ========================================================= */
function revealAllNow(){
  document.querySelectorAll("[data-reveal]:not(.revealed)").forEach(el => el.classList.add("revealed"));
}

function initReveal(){
  document.documentElement.classList.add("reveal-on");

  if("IntersectionObserver" in window){
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          entry.target.classList.add("revealed");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -40px 0px" });
    window._izzaRevealObserver = observer;
    document.querySelectorAll("[data-reveal]").forEach(el => observer.observe(el));
  }

  /* Safety net: guarantee visibility no matter what, shortly after load */
  setTimeout(revealAllNow, 900);
}

/* Call this after injecting new [data-reveal] elements dynamically (e.g. product grids) */
function refreshReveal(){
  if(window._izzaRevealObserver){
    document.querySelectorAll("[data-reveal]:not(.revealed)").forEach(el => window._izzaRevealObserver.observe(el));
  }
  /* Safety net: this content is already on-screen (filter results, related items) — reveal it fast */
  setTimeout(revealAllNow, 150);
}

function handleNavSearch(e){
  e.preventDefault();
  const val = document.getElementById("navSearchInput").value.trim();
  window.location.href = "shop.html" + (val ? ("?search=" + encodeURIComponent(val)) : "");
}

/* Quick View modal — preview a product without leaving the page */
function openQuickView(productId){
  const p = getProductById(productId);
  if(!p) return;
  const modalEl = document.getElementById("quickViewModal");
  if(!modalEl) return;

  const wishActive = isWishlisted(p.id) ? "active" : "";
  const heartIcon = isWishlisted(p.id) ? "bi-heart-fill" : "bi-heart";

  document.getElementById("qvBody").innerHTML = `
    <div class="row g-4">
      <div class="col-md-6">
        <div class="gallery-main" style="aspect-ratio:1/1;">
          <img src="${p.images[0]}" alt="${p.name}">
        </div>
      </div>
      <div class="col-md-6">
        <span class="eyebrow">${p.category} · N°${p.badge}</span>
        <h3 class="mb-2" style="font-style:italic;">${p.name}</h3>
        <div class="rating-line mb-2">${renderStars(p.rating)} <span class="rating-count">${p.rating.toFixed(1)} · ${p.reviews} reviews</span></div>
        <p class="text-ink-soft mb-3">${p.shortDesc}</p>
        <div class="d-flex align-items-center gap-3 mb-3">
          <span class="price-tag fs-4">${formatPrice(p.price)}</span>
          <span class="card-meta">${p.heelLabel}</span>
        </div>
        <div class="mb-3">
          <span class="filter-label d-block mb-2">Size (UK · EU)</span>
          <div class="d-flex flex-wrap gap-2" id="qvSizeSelector">
            ${p.sizes.map((s, i) => `<button class="size-chip ${i === Math.floor(p.sizes.length/2) ? "active" : ""}" data-size="${s}" onclick="qvSelectSize(this, '${s}')">${s}</button>`).join("")}
          </div>
        </div>
        <div class="d-flex flex-wrap gap-2">
          <button class="btn btn-izza btn-izza-dark flex-grow-1" onclick="qvAddToCart(${p.id})"><i class="bi bi-handbag"></i> Add to Bag</button>
          <button type="button" class="wishlist-btn ${wishActive}" style="position:static; width:46px; height:46px; border:1.5px solid var(--line);" onclick="toggleWishlist(${p.id}, this)" aria-label="Save ${p.name} to wishlist">
            <i class="bi ${heartIcon}"></i>
          </button>
        </div>
        <a href="product.html?id=${p.id}" class="d-inline-block mt-3 small fw-bold text-pink">View full details →</a>
      </div>
    </div>
  `;
  window._qvSelectedSize = p.sizes[Math.floor(p.sizes.length/2)];
  window._qvProductId = p.id;

  const modal = bootstrap.Modal.getOrCreateInstance(modalEl);
  modal.show();
}

function qvSelectSize(btnEl, size){
  window._qvSelectedSize = size;
  document.querySelectorAll("#qvSizeSelector .size-chip").forEach(c => c.classList.remove("active"));
  btnEl.classList.add("active");
}

function qvAddToCart(productId){
  const p = getProductById(productId);
  if(!p) return;
  addToCart(p, window._qvSelectedSize || p.sizes[0], 1);
  const modalEl = document.getElementById("quickViewModal");
  const modal = bootstrap.Modal.getOrCreateInstance(modalEl);
  modal.hide();
}

document.addEventListener("DOMContentLoaded", () => {
  renderCartUI();
  initReveal();

  /* Highlight current page in navbar */
  const path = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".navbar-izza .nav-link").forEach(link => {
    const href = link.getAttribute("href");
    if(href && href.split("#")[0] === path){
      link.classList.add("active");
    }
  });
});

