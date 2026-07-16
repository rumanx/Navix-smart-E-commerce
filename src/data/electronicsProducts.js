/**
 * Local catalog: electronics-only products with categories and brands for filters.
 * Images use stable Unsplash URLs (tech / gear photos).
 */

const UNSPLASH = {
  laptop: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&q=80",
  phone: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&q=80",
  tablet: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=600&q=80",
  headphones: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80",
  speaker: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e2?w=600&q=80",
  tv: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=600&q=80",
  monitor: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=600&q=80",
  camera: "https://images.unsplash.com/photo-1516035069371-29a1b244ccff?w=600&q=80",
  drone: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=600&q=80",
  console: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=600&q=80",
  keyboard: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&q=80",
  mouse: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=600&q=80",
  router: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&q=80",
  storage: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=600&q=80",
  gpu: "https://images.unsplash.com/photo-1591488320449-011701bb6704?w=600&q=80",
  smartwatch: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=600&q=80",
  smarthome: "https://images.unsplash.com/photo-1558002038-1055907df827?w=600&q=80",
  projector: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=600&q=80",
  mic: "https://images.unsplash.com/photo-1590602847861-b357c55f71f5?w=600&q=80",
  charger: "https://images.unsplash.com/photo-1583863788444-66ae8b7b30b7?w=600&q=80",
}

const CATEGORIES = [
  "Laptops & Computers",
  "Smartphones",
  "Tablets & eReaders",
  "Audio & Headphones",
  "Speakers & Soundbars",
  "TVs & Home Theater",
  "Monitors & Displays",
  "Cameras & Lenses",
  "Drones & Gimbals",
  "Gaming & Consoles",
  "PC Components",
  "Networking & Wi‑Fi",
  "Storage & NAS",
  "Wearables & Fitness",
  "Smart Home & IoT",
  "Accessories & Peripherals",
  "Power & Charging",
  "Office Electronics",
]

const BRANDS = [
  "Apple",
  "Samsung",
  "Sony",
  "LG",
  "Dell",
  "HP",
  "Lenovo",
  "ASUS",
  "Acer",
  "Microsoft",
  "Google",
  "Xiaomi",
  "OnePlus",
  "Nothing",
  "Motorola",
  "Bose",
  "JBL",
  "Sennheiser",
  "Audio-Technica",
  "Shure",
  "Canon",
  "Nikon",
  "Fujifilm",
  "Panasonic",
  "GoPro",
  "DJI",
  "Insta360",
  "Nintendo",
  "Sony PlayStation",
  "Microsoft Xbox",
  "Valve",
  "AMD",
  "Intel",
  "NVIDIA",
  "MSI",
  "Gigabyte",
  "Corsair",
  "NZXT",
  "EVGA",
  "Thermaltake",
  "Logitech",
  "Razer",
  "SteelSeries",
  "HyperX",
  "Anker",
  "Belkin",
  "TP-Link",
  "Netgear",
  "Ubiquiti",
  "Synology",
  "QNAP",
  "Western Digital",
  "Seagate",
  "Crucial",
  "Kingston",
  "SanDisk",
  "TCL",
  "Hisense",
  "Vizio",
  "Sharp",
  "Philips",
  "AOC",
  "BenQ",
  "Eizo",
  "Garmin",
  "Fitbit",
  "Polar",
  "Amazon",
  "Ring",
  "Nest",
  "Ecovacs",
  "iRobot",
]

const CATEGORY_IMAGES = {
  "Laptops & Computers": UNSPLASH.laptop,
  Smartphones: UNSPLASH.phone,
  "Tablets & eReaders": UNSPLASH.tablet,
  "Audio & Headphones": UNSPLASH.headphones,
  "Speakers & Soundbars": UNSPLASH.speaker,
  "TVs & Home Theater": UNSPLASH.tv,
  "Monitors & Displays": UNSPLASH.monitor,
  "Cameras & Lenses": UNSPLASH.camera,
  "Drones & Gimbals": UNSPLASH.drone,
  "Gaming & Consoles": UNSPLASH.console,
  "PC Components": UNSPLASH.gpu,
  "Networking & Wi‑Fi": UNSPLASH.router,
  "Storage & NAS": UNSPLASH.storage,
  "Wearables & Fitness": UNSPLASH.smartwatch,
  "Smart Home & IoT": UNSPLASH.smarthome,
  "Accessories & Peripherals": UNSPLASH.keyboard,
  "Power & Charging": UNSPLASH.charger,
  "Office Electronics": UNSPLASH.monitor,
}

const PRODUCT_NAMES = [
  { suffix: "Pro", adj: "flagship" },
  { suffix: "Air", adj: "lightweight" },
  { suffix: "Max", adj: "high-performance" },
  { suffix: "Ultra", adj: "premium" },
  { suffix: "Neo", adj: "balanced" },
  { suffix: "Elite", adj: "enthusiast" },
  { suffix: "Studio", adj: "creator-focused" },
  { suffix: "Gaming Edition", adj: "low-latency" },
  { suffix: "2026", adj: "latest-gen" },
  { suffix: "SE", adj: "compact" },
]

function hashPick(seed, mod) {
  let h = 0
  const s = String(seed)
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0
  return h % mod
}

function priceFor(category, brandIndex, id) {
  const base =
    {
      "Laptops & Computers": 899,
      Smartphones: 549,
      "Tablets & eReaders": 429,
      "TVs & Home Theater": 799,
      "Monitors & Displays": 349,
      "PC Components": 499,
      "Drones & Gimbals": 699,
      "Cameras & Lenses": 849,
      "Gaming & Consoles": 449,
      "Networking & Wi‑Fi": 189,
      "Storage & NAS": 279,
    }[category] ?? 129
  const jitter = hashPick(`${id}-${brandIndex}`, 180) - 90
  return Math.max(29, Math.round(base + jitter + (id % 7) * 17))
}

function discountFor(id) {
  return 5 + (hashPick(id, 21) % 25)
}

function buildDescription(brand, category, namePack) {
  return `${brand} ${namePack.adj} ${category.toLowerCase()} — ${namePack.suffix} series. Ships with manufacturer warranty, optimized thermals, and Navix-verified compatibility for modern setups.`
}

let nextId = 1

function pushProduct(list, brand, category) {
  const namePack = PRODUCT_NAMES[hashPick(`${brand}-${category}-${nextId}`, PRODUCT_NAMES.length)]
  const id = nextId++
  const title = `${brand} ${namePack.suffix} — ${category}`
  list.push({
    id,
    title,
    price: priceFor(category, BRANDS.indexOf(brand), id),
    description: buildDescription(brand, category, namePack),
    category,
    brand,
    image: CATEGORY_IMAGES[category] ?? UNSPLASH.keyboard,
    discount: discountFor(id),
    model: `${brand.slice(0, 3).toUpperCase()}-${category.slice(0, 2).toUpperCase()}-${1000 + id}`,
    rating: { rate: 3.8 + (hashPick(id, 20) / 10), count: 40 + hashPick(id, 2000) },
  })
}

export const ELECTRONICS_PRODUCTS = (() => {
  const list = []
  for (const category of CATEGORIES) {
    for (const brand of BRANDS) {
      pushProduct(list, brand, category)
    }
  }
  return list
})()
