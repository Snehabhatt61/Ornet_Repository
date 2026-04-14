<!DOCTYPE html>
<html lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary": "#FF7F00",
                        "primary-burnt": "#E65C00",
                        "primary-container": "#FFDBB3",
                        "on-primary": "#FFFFFF",
                        "on-primary-container": "#4D2600",
                        "secondary": "#008080",
                        "secondary-electric": "#009999",
                        "secondary-container": "#BFE0E0",
                        "on-secondary": "#FFFFFF",
                        "on-secondary-container": "#002020",
                        "tertiary": "#FFBF00",
                        "tertiary-terracotta": "#FF8C42",
                        "tertiary-container": "#FFF3CC",
                        "on-tertiary": "#4E443B",
                        "on-tertiary-container": "#332600",
                        "background": "#FFFFFF",
                        "on-background": "#4E443B",
                        "surface": "#FFFFFF",
                        "on-surface": "#4E443B",
                        "surface-container-lowest": "#FFFFFF",
                        "surface-container-low": "#FFF9F5",
                        "surface-container": "#FBF1E9",
                        "surface-container-high": "#F5E9E0",
                        "surface-container-highest": "#EFE0D5",
                        "on-surface-variant": "#4E443B",
                        "outline": "#857366",
                        "outline-variant": "#D8C2B4",
                        "primary-fixed": "#FFDBB3",
                        "secondary-fixed": "#BFE0E0",
                        "tertiary-fixed": "#FFF3CC",
                    },
                    fontFamily: {
                        "headline": ["Plus Jakarta Sans"],
                        "body": ["Plus Jakarta Sans"],
                        "label": ["Plus Jakarta Sans"]
                    },
                    borderRadius: {"DEFAULT": "1rem", "lg": "2rem", "xl": "3rem", "full": "9999px"},
                },
            },
        }
    </script>
<style type="text/tailwindcss">
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .dashed-border {
            background-image: linear-gradient(to right, #FF7F00 50%, rgba(255, 255, 255, 0) 0%);
            background-position: bottom;
            background-size: 20px 2px;
            background-repeat: repeat-x;
        }
        .clip-shadow {
            box-shadow: 0 4px 15px rgba(255, 127, 0, 0.1);
        }
        .dotted-line {
            background-image: radial-gradient(circle, currentColor 1px, transparent 1px);
            background-size: 8px 100%;
            background-repeat: repeat-x;
            background-position: center;
        }
    </style>
</head>
<body class="bg-surface-container-lowest font-body text-on-surface">
<header class="sticky top-0 w-full z-50 bg-white/70 backdrop-blur-xl border-b-2 md:border-b-4 border-dashed shadow-[0_20px_20px_-15px_rgba(255,127,0,0.08)] px-4 md:px-6 py-2.5 md:py-4 flex justify-between items-center border-primary">
<div class="flex items-center gap-2 md:gap-4">
<button class="text-primary hover:scale-105 transition-transform duration-300">
<span class="material-symbols-outlined text-xl md:text-3xl">menu</span>
</button>
<div class="flex items-center gap-1 md:gap-2">
<img alt="Artisan Pulse" class="h-5 md:h-10 w-auto" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9r_htsVvkewv_V4ixuguRvlu0OiyElrOfdqLPfX-vYeDs1xMU8_Lih_Ogr753VIASJQvDBhQYtaq2YvlpnS8n0AQ_Hm8RKHAvaIU7e34z_vuT8rT15QNRaXNwWq_CjqqwtKfH98ye5ZPYkNgKS-zUaWvOH7u4chdp97NtqrV3HYXmzK1zMC6men3LYew4jXsZlW3mjqA0--hin5kcx1pX1hjh99KsvagwihUFPysXjl2gTpSdITPB-lan3vmx2RHCXIf87D45ZSY"/>
<span class="text-base md:text-2xl font-bold text-primary italic tracking-tight font-headline whitespace-nowrap">Ornet Gift Shop</span>
</div>
</div>
<nav class="hidden lg:flex items-center space-x-8">
<a class="text-primary font-semibold hover:scale-105 transition-transform duration-300" href="#">Home</a>
<a class="text-on-surface-variant hover:text-primary transition-colors" href="#">Shop By Category</a>
<a class="text-on-surface-variant hover:text-primary transition-colors" href="#">New Arrivals</a>
<a class="text-on-surface-variant hover:text-primary transition-colors" href="#">About Us</a>
</nav>
<div class="flex items-center space-x-2.5 md:space-x-6">
<button class="text-primary hover:scale-105 transition-transform duration-300">
<span class="material-symbols-outlined text-lg md:text-2xl">person</span>
</button>
<button class="text-primary hover:scale-105 transition-transform duration-300">
<span class="material-symbols-outlined text-lg md:text-2xl">favorite</span>
</button>
<button class="relative text-primary hover:scale-105 transition-transform duration-300">
<span class="material-symbols-outlined text-lg md:text-2xl">shopping_cart</span>
<span class="absolute -top-1 -right-1 bg-primary text-white text-[7px] md:text-[10px] font-bold px-1 py-0.2 md:px-1.5 md:py-0.5 rounded-full">3</span>
</button>
</div>
</header>
<section class="relative min-h-[350px] md:min-h-[500px] flex flex-col items-center justify-center px-4 md:px-6 py-10 md:py-20 text-center bg-gradient-to-b from-primary-container/40 to-white">
<div class="absolute inset-0 z-0 overflow-hidden">
<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] md:w-[120%] h-[120%] bg-gradient-to-br from-primary-container/20 via-transparent to-secondary-container/20 rounded-full blur-3xl"></div>
</div>
<div class="relative z-10 max-w-4xl w-full">
<h1 class="text-2xl md:text-7xl font-extrabold text-on-surface mb-3 md:mb-6 tracking-tight leading-tight">
                Craft Your <span class="text-primary italic">Imagination</span>
</h1>
<p class="text-xs md:text-lg text-on-surface-variant mb-6 md:mb-12 max-w-2xl mx-auto px-4">
                Discover curated art supplies and handcrafted essentials for the modern artisan. Handpicked quality, delivered with love.
            </p>
<div class="relative max-w-2xl mx-auto group px-2">
<div class="relative flex flex-col md:block">
<input class="w-full pl-14 pr-4 md:pl-14 md:pr-6 py-3 md:py-6 bg-surface border-none rounded-full shadow-[0_10px_30px_rgba(255,127,0,0.1)] focus:ring-4 focus:ring-primary-container transition-all text-sm md:text-lg placeholder:text-on-surface-variant/50" placeholder="Search for Mdf bases..." type="text"/>
<div class="absolute left-6 top-1/2 -translate-y-1/2 text-primary hidden md:block">
<span class="material-symbols-outlined text-3xl">search</span>
</div>
<div class="absolute left-6 top-[22px] md:top-1/2 -translate-y-1/2 text-primary md:hidden">
<span class="material-symbols-outlined text-xl">search</span>
</div>
<button class="mt-3 md:mt-0 md:absolute md:right-3 md:top-1/2 md:-translate-y-1/2 bg-primary-burnt text-white px-5 md:px-8 py-2.5 md:py-3.5 rounded-full font-bold hover:scale-105 transition-transform shadow-lg text-xs md:text-base">
                        Find Magic
                    </button>
</div>
</div>
</div>
</section>
<section class="px-4 md:px-10 py-10 md:py-20 bg-surface-container-low">
<div class="flex flex-col md:flex-row justify-between items-center md:items-end mb-8 md:mb-16 gap-3 text-center md:text-left">
<div>
<h2 class="text-xl md:text-4xl font-bold text-on-surface mb-1 md:mb-2 font-headline">Shop by Category</h2>
<div class="h-1 w-12 md:h-1.5 md:w-24 bg-primary-container rounded-full mx-auto md:mx-0"></div>
</div>
<a class="text-primary text-xs md:text-base font-bold flex items-center gap-1.5 hover:gap-4 transition-all" href="#">
                Explore All Collections <span class="material-symbols-outlined text-base md:text-2xl">arrow_forward</span>
</a>
</div>
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-10">
<div class="group cursor-pointer">
<div class="relative bg-white rounded-md p-2 pt-6 md:pt-10 clip-shadow transition-all duration-300 group-hover:-translate-y-2 border-2 border-transparent group-hover:border-tertiary-terracotta">
<div class="absolute -top-2 left-1/2 -translate-x-1/2 w-14 md:w-20 h-5 md:h-8 bg-tertiary-terracotta rounded flex items-center justify-center z-20">
<div class="w-7 md:w-12 h-1 bg-white/40 rounded-full"></div>
</div>
<div class="aspect-square rounded-sm overflow-hidden mb-2 md:mb-3">
<img class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCV8ZkuRfcD70Fynr9Mxhsdzg-cXOsauA_5TykZtxCg51BtKiHCx_C3t4ktmLw-ZYzKI4j9nINLJ0wOjmONWP35lsPKErrj5s2TzVGP5BmMLQasBEohnotvcmVM2SH-OgIDnn5GPyH58PxGRxKcZoZwgodltivp6YQTvHaq83r-WPeeKdzrgyOs2v3nRJMkdgmZyfjEYX66N3J8wWnyAiMo9VktXFRttPxPsnRp-a4olx22GwxkMiYaXLYnq5_-_MuPTEBCH1yiCvM"/>
</div>
<p class="text-center font-bold text-on-surface-variant group-hover:text-primary transition-colors text-sm md:text-lg mb-1 md:mb-2">Mdf bases</p>
</div>
</div>
<div class="group cursor-pointer">
<div class="relative bg-white rounded-md p-2 pt-6 md:pt-10 clip-shadow transition-all duration-300 group-hover:-translate-y-2 border-2 border-transparent group-hover:border-secondary-electric">
<div class="absolute -top-2 left-1/2 -translate-x-1/2 w-14 md:w-20 h-5 md:h-8 bg-secondary-electric rounded flex items-center justify-center z-20">
<div class="w-7 md:w-12 h-1 bg-white/40 rounded-full"></div>
</div>
<div class="aspect-square rounded-sm overflow-hidden mb-2 md:mb-3">
<img class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6iSi2jLI9378c6G8YPGSkoEe01sJqPo8aCU76ljdfTnsy3TZfcPN4f6u364asYBaPRTsWvZ4mbWxMzNOGhQeG9-vb3Y3hwXqK0JDjc08EIFNQ09XzZi2gJGU5iDe6lVP_XZOF6Ag4G3Y-boL-T-jxd6hhSuwGCf5ATRtKuOGfNRIrN1qgs-A0yM0XcUJC-u7mijTq_3Sek0mHfgdzmAAxHlhRHE8r0wuZn_PJpAdBrzjHkQ7ajqn9aIkL8d8rpn0Sm2L5m8acPCA"/>
</div>
<p class="text-center font-bold text-on-surface-variant group-hover:text-primary transition-colors text-sm md:text-lg mb-1 md:mb-2">Crafting essential</p>
</div>
</div>
<div class="group cursor-pointer">
<div class="relative bg-white rounded-md p-2 pt-6 md:pt-10 clip-shadow transition-all duration-300 group-hover:-translate-y-2 border-2 border-transparent group-hover:border-primary-burnt">
<div class="absolute -top-2 left-1/2 -translate-x-1/2 w-14 md:w-20 h-5 md:h-8 bg-primary-burnt rounded flex items-center justify-center z-20">
<div class="w-7 md:w-12 h-1 bg-white/40 rounded-full"></div>
</div>
<div class="aspect-square rounded-sm overflow-hidden mb-2 md:mb-3">
<img class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCazRazS-ezdZkAFhWJA8ZNwQcyAKJ4hedED5-Ou06axf-TPgGy2KsyjwgESNVW535MZUdIKkzfRMzCBjQBzwARY-2SKNsPKpVCcqHBLKOH4TV_F2NRAbD2i-eMqOP1iswgUscXjNYLIshrJ28DsnmPYd-Yy67NoqKwBqP_fDNhCovXFn3zP9aKi3Oebg8dmSHQ_nSgts6ejur_kCWvvYH7SVjWOKolsPGFZEqs0G4fBuwP6EGjmX_wAmU1RYlrg6CL-aAdSEl77zE"/>
</div>
<p class="text-center font-bold text-on-surface-variant group-hover:text-primary transition-colors text-sm md:text-lg mb-1 md:mb-2">Resin material</p>
</div>
</div>
<div class="group cursor-pointer">
<div class="relative bg-white rounded-md p-2 pt-6 md:pt-10 clip-shadow transition-all duration-300 group-hover:-translate-y-2 border-2 border-transparent group-hover:border-tertiary-terracotta">
<div class="absolute -top-2 left-1/2 -translate-x-1/2 w-14 md:w-20 h-5 md:h-8 bg-tertiary-terracotta rounded flex items-center justify-center z-20">
<div class="w-7 md:w-12 h-1 bg-white/40 rounded-full"></div>
</div>
<div class="aspect-square rounded-sm overflow-hidden mb-2 md:mb-3">
<img class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZ7ZS3EcZNGPcmOFBVu8EI-EEk5HQwVXsnhQayj_ea0RZrZcqw7F4wNitiV42kDZjtNWkR7VjCJvg1tTENq6FZ8J5HNytGKt4JeeNhZtMTCscEN-FK94d-F2jB2NkE541Z4NqY0rZcbrM--bcl7gkPBLsoqZpmFA9apbVotQdPTJ3vhD5MCsQr99Md0KP5AbEPoky0hqMcQR-w6TL7C6FR9AQkF2Oq88KNmba4MqdSHJRFSr6iA3go3Ly2V6g5DOaJ3mXkboMolh8"/>
</div>
<p class="text-center font-bold text-on-surface-variant group-hover:text-primary transition-colors text-sm md:text-lg mb-1 md:mb-2">Miniatures</p>
</div>
</div>
</div>
</section>
<section class="px-4 md:px-10 py-10 md:py-24 bg-surface-container-lowest">
<div class="text-center mb-8 md:mb-16">
<h2 class="text-xl md:text-4xl font-bold text-on-surface mb-1 md:mb-4 font-headline">Community Bestsellers</h2>
<p class="text-xs md:text-base text-on-surface-variant max-w-xl mx-auto px-4">The most loved materials used by thousands of artisans across India.</p>
</div>
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
<div class="group">
<div class="relative aspect-[4/5] rounded-xl overflow-hidden mb-3 md:mb-4 bg-surface-container shadow-sm group-hover:shadow-xl transition-all duration-500">
<img class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnbOwgCFBWBSN24jkG3yS18FoNKlZuveqpQPnuJfoVeFfqfO6malZC7Echlcs1IAojkiKXzKf8KeU5C-2k3f6tm_0NMXpI-WN3tAVPXXgP7KAKlUvlPrqzZbApbgcO0ThsmD7SHPxLLnXKFVOuZfdLWvjJDpS2IDQp8YO31VxwTu0TD0Cs9QKTZcY8pv_-FA6Fxqd2FHo11ms9XX0TMaEs3Wd5sqsyE6ggMKvX-Ul9V7evMlPDewpxcbCov6K6DjiionMankEwGu0"/>
<button class="absolute top-3 right-3 md:top-4 md:right-4 bg-white/80 backdrop-blur-md p-1.5 md:p-2 rounded-full text-primary hover:bg-primary hover:text-white transition-colors shadow-sm">
<span class="material-symbols-outlined text-base md:text-2xl">favorite</span>
</button>
<div class="absolute bottom-3 left-3 right-3 translate-y-0 md:translate-y-12 opacity-100 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 transition-all duration-300">
<button class="w-full bg-primary text-white py-1.5 md:py-3 rounded-full font-bold shadow-lg text-xs md:text-base">Quick Add</button>
</div>
</div>
<h3 class="font-bold text-on-surface text-sm md:text-lg px-1">Mandala Art Base (Set of 3)</h3>
<div class="flex items-center gap-1.5 mb-0.5 md:mb-1 px-1">
<div class="flex text-primary-burnt">
<span class="material-symbols-outlined text-[10px] md:text-sm font-black" style='font-variation-settings: "FILL" 1;'>star</span>
<span class="material-symbols-outlined text-[10px] md:text-sm font-black" style='font-variation-settings: "FILL" 1;'>star</span>
<span class="material-symbols-outlined text-[10px] md:text-sm font-black" style='font-variation-settings: "FILL" 1;'>star</span>
<span class="material-symbols-outlined text-[10px] md:text-sm font-black" style='font-variation-settings: "FILL" 1;'>star</span>
<span class="material-symbols-outlined text-[10px] md:text-sm font-black" style='font-variation-settings: "FILL" 1;'>star</span>
</div>
<span class="text-[9px] md:text-xs text-on-surface-variant font-bold">(128)</span>
</div>
<p class="text-primary font-black text-sm md:text-lg px-1">₹899.00</p>
</div>
<div class="group">
<div class="relative aspect-[4/5] rounded-xl overflow-hidden mb-3 md:mb-4 bg-surface-container shadow-sm group-hover:shadow-xl transition-all duration-500">
<img class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDztfg20-GCp1A5s4M3UJYJxByO5PSc1bGNLv_XGCLSa62Jd8DPEf9fT18htyQV8BwFJU9sqvNbHp62_PHgyrd6yPl1aPQn4gSx6IUXKMcDN8CfVH44faH5ZIudy5k4W7l5F3qzaEUHnpsaTDDAg_JEOT0fYFefO9ZYiqkN2zAZYuqc27BGWOKCghSI31Yx6Iae8rPTZuZtadaMMDeRX3uZ5A1UvJUkSEZ2SPKz356QXvbBHmKICZisY0HqaTCvXPbXHW247FurHrw"/>
<button class="absolute top-3 right-3 md:top-4 md:right-4 bg-white/80 backdrop-blur-md p-1.5 md:p-2 rounded-full text-primary shadow-sm">
<span class="material-symbols-outlined text-base md:text-2xl">favorite</span>
</button>
<div class="absolute bottom-3 left-3 right-3 translate-y-0 md:translate-y-12 opacity-100 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 transition-all duration-300">
<button class="w-full bg-primary text-white py-1.5 md:py-3 rounded-full font-bold shadow-lg text-xs md:text-base">Quick Add</button>
</div>
</div>
<h3 class="font-bold text-on-surface text-sm md:text-lg px-1">Pearl Effect Resin Pigments</h3>
<div class="flex items-center gap-1.5 mb-0.5 md:mb-1 px-1">
<div class="flex text-primary-burnt">
<span class="material-symbols-outlined text-[10px] md:text-sm font-black" style='font-variation-settings: "FILL" 1;'>star</span>
<span class="material-symbols-outlined text-[10px] md:text-sm font-black" style='font-variation-settings: "FILL" 1;'>star</span>
<span class="material-symbols-outlined text-[10px] md:text-sm font-black" style='font-variation-settings: "FILL" 1;'>star</span>
<span class="material-symbols-outlined text-[10px] md:text-sm font-black" style='font-variation-settings: "FILL" 1;'>star</span>
<span class="material-symbols-outlined text-[10px] md:text-sm font-black">star</span>
</div>
<span class="text-[9px] md:text-xs text-on-surface-variant font-bold">(95)</span>
</div>
<p class="text-primary font-black text-sm md:text-lg px-1">₹450.00</p>
</div>
<div class="group">
<div class="relative aspect-[4/5] rounded-xl overflow-hidden mb-3 md:mb-4 bg-surface-container shadow-sm group-hover:shadow-xl transition-all duration-500">
<img class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuClWy4NV2u2vQBwSLKLqHYHc9K5b1S8DhdigM5-typE7mLplxz-h9o8RBX0IV0sTn0PI0KvzjAJGCsVX-0jsdJjOwrabnOX6VkXbLHSfansb5hmK_Pwv7jO5QAo8YerOq9MbTRH5ufpRoUfhO6oZpTI-ljPRY8lT1Cn-qRGkmbVPcWY6uWR7mXZumMgXCMJzVrJeowYD3OT-8IdeKDKy9leCxdpRAuBDC8E0VOzd-HS5Y33Oht9RUQs7O00sI3FAxajB5dPq9IJe5k"/>
<button class="absolute top-3 right-3 md:top-4 md:right-4 bg-white/80 backdrop-blur-md p-1.5 md:p-2 rounded-full text-primary shadow-sm">
<span class="material-symbols-outlined text-base md:text-2xl">favorite</span>
</button>
<div class="absolute bottom-3 left-3 right-3 translate-y-0 md:translate-y-12 opacity-100 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 transition-all duration-300">
<button class="w-full bg-primary text-white py-1.5 md:py-3 rounded-full font-bold shadow-lg text-xs md:text-base">Quick Add</button>
</div>
</div>
<h3 class="font-bold text-on-surface text-sm md:text-lg px-1">Vintage Scrapbook Stickers</h3>
<div class="flex items-center gap-1.5 mb-0.5 md:mb-1 px-1">
<div class="flex text-primary-burnt">
<span class="material-symbols-outlined text-[10px] md:text-sm font-black" style='font-variation-settings: "FILL" 1;'>star</span>
<span class="material-symbols-outlined text-[10px] md:text-sm font-black" style='font-variation-settings: "FILL" 1;'>star</span>
<span class="material-symbols-outlined text-[10px] md:text-sm font-black" style='font-variation-settings: "FILL" 1;'>star</span>
<span class="material-symbols-outlined text-[10px] md:text-sm font-black" style='font-variation-settings: "FILL" 1;'>star</span>
<span class="material-symbols-outlined text-[10px] md:text-sm font-black" style='font-variation-settings: "FILL" 1;'>star</span>
</div>
<span class="text-[9px] md:text-xs text-on-surface-variant font-bold">(210)</span>
</div>
<p class="text-primary font-black text-sm md:text-lg px-1">₹320.00</p>
</div>
<div class="group">
<div class="relative aspect-[4/5] rounded-xl overflow-hidden mb-3 md:mb-4 bg-surface-container shadow-sm group-hover:shadow-xl transition-all duration-500">
<img class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBO0W6Vjy5dZVm9HrZYc4j74Zt5e5nVxCu5HIK0GFImql2DKXcqt0AihHGmPMCzQocK3OTrX0hM5xDjduy6iCuq9LqKByHwFa78HKeIvIgqBWzOPZ_l9YzbJNiJHNPrIkmGJzbpRYlNVrJFuW-ZLLkTlSZRJEpIfsyYtZzUayap-rMvO6_wc0I-5PbeEXk3dler-Sxx1DKNiijh79bm8pxYHqPqlt3PyAuuQaIcYisYZQzWtcOK9nMtVG7jY4l_YnHdB2VTfgooFZw"/>
<button class="absolute top-3 right-3 md:top-4 md:right-4 bg-white/80 backdrop-blur-md p-1.5 md:p-2 rounded-full text-primary shadow-sm">
<span class="material-symbols-outlined text-base md:text-2xl">favorite</span>
</button>
<div class="absolute bottom-3 left-3 right-3 translate-y-0 md:translate-y-12 opacity-100 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 transition-all duration-300">
<button class="w-full bg-primary text-white py-1.5 md:py-3 rounded-full font-bold shadow-lg text-xs md:text-base">Quick Add</button>
</div>
</div>
<h3 class="font-bold text-on-surface text-sm md:text-lg px-1">Fine Liner Brushes</h3>
<div class="flex items-center gap-1.5 mb-0.5 md:mb-1 px-1">
<div class="flex text-primary-burnt">
<span class="material-symbols-outlined text-[10px] md:text-sm font-black" style='font-variation-settings: "FILL" 1;'>star</span>
<span class="material-symbols-outlined text-[10px] md:text-sm font-black" style='font-variation-settings: "FILL" 1;'>star</span>
<span class="material-symbols-outlined text-[10px] md:text-sm font-black" style='font-variation-settings: "FILL" 1;'>star</span>
<span class="material-symbols-outlined text-[10px] md:text-sm font-black" style='font-variation-settings: "FILL" 1;'>star</span>
<span class="material-symbols-outlined text-[10px] md:text-sm font-black">star</span>
</div>
<span class="text-[9px] md:text-xs text-on-surface-variant font-bold">(56)</span>
</div>
<p class="text-primary font-black text-sm md:text-lg px-1">₹599.00</p>
</div>
</div>
</section>
<section class="w-full bg-primary-container/20 py-10 md:py-20 px-6 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-center">
<div class="flex flex-col items-center gap-3 md:gap-6 group">
<div class="w-14 h-14 md:w-24 md:h-24 bg-secondary/5 rounded-2xl flex items-center justify-center text-on-surface-variant shadow-sm group-hover:shadow-md transition-shadow">
<span class="material-symbols-outlined text-2xl md:text-5xl">flag</span>
</div>
<div>
<h4 class="text-base md:text-xl font-extrabold text-on-surface tracking-tight">100% Made in India</h4>
<p class="text-[10px] md:text-sm text-on-surface-variant mt-1">Sourced from local artisans</p>
</div>
</div>
<div class="flex flex-col items-center gap-3 md:gap-6 group">
<div class="w-14 h-14 md:w-24 md:h-24 bg-secondary/5 rounded-2xl flex items-center justify-center text-on-surface-variant shadow-sm group-hover:shadow-md transition-shadow">
<span class="material-symbols-outlined text-2xl md:text-5xl">auto_fix_high</span>
</div>
<div>
<h4 class="text-base md:text-xl font-extrabold text-on-surface tracking-tight">Customized Gifts</h4>
<p class="text-[10px] md:text-sm text-on-surface-variant mt-1">Make it truly yours</p>
</div>
</div>
<div class="flex flex-col items-center gap-3 md:gap-6 group">
<div class="w-14 h-14 md:w-24 md:h-24 bg-secondary/5 rounded-2xl flex items-center justify-center text-on-surface-variant shadow-sm group-hover:shadow-md transition-shadow">
<span class="material-symbols-outlined text-2xl md:text-5xl">verified</span>
</div>
<div>
<h4 class="text-base md:text-xl font-extrabold text-on-surface tracking-tight">Best Value</h4>
<p class="text-[10px] md:text-sm text-on-surface-variant mt-1">Premium quality, fair prices</p>
</div>
</div>
</section>
<footer class="bg-gradient-to-b from-primary-container/60 to-secondary-container/60 pt-10 md:pt-24 pb-6 md:pb-12 px-6 md:px-10 relative overflow-hidden">
<div class="absolute top-0 left-0 right-0 h-1 text-outline/30 dotted-line"></div>
<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-20 relative z-10">
<div class="col-span-1">
<div class="flex items-center gap-2 mb-3 md:mb-6">
<img alt="Artisan Pulse" class="h-5 md:h-8 w-auto mix-blend-multiply opacity-80" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrL-bFYWRgdfIKN1M7nW_jmwZ-HG4p8eQ0qMrAlzeYVO2EdXqcOH9pJpBE1KOciIWUh5iJ7-hKU9nbPtOpHN1y-1MeIM8ODkTsxcwMEQf78kxs35Loh0nxiJUKETEPYZmEtGUZg8usB5S0i5x_2YCRDzVE2D1syBVAXRbNWbdpF6MqA6DW0ZZegiTPj2trlc55aOjY8QP4T6F3PVnW1kTuzmp1goqjPNU7H0onMDylP9WiI5-tKzV2jQQxpnARB8f8exm-8fEbI9M"/>
<span class="text-base md:text-xl font-bold text-on-surface-variant italic font-headline">Ornet Gift Shop</span>
</div>
<p class="text-on-surface-variant font-medium text-[10px] md:text-sm mb-4 md:mb-8 leading-relaxed">
                    Your one-stop atelier for all things creative. We believe everyone has an artist within. Let us help you find yours.
                </p>
<div class="flex gap-3">
<a class="w-7 h-7 md:w-10 md:h-10 rounded-full bg-primary-container flex items-center justify-center text-on-surface-variant hover:scale-110 transition-transform shadow-sm" href="#">
<span class="material-symbols-outlined text-base md:text-xl">public</span>
</a>
<a class="w-7 h-7 md:w-10 md:h-10 rounded-full bg-primary-container flex items-center justify-center text-on-surface-variant hover:scale-110 transition-transform shadow-sm" href="#">
<span class="material-symbols-outlined text-base md:text-xl">alternate_email</span>
</a>
</div>
</div>
<div>
<h5 class="font-bold text-on-surface-variant mb-3 md:mb-6 uppercase tracking-widest text-[9px] md:text-xs">Shop By</h5>
<ul class="space-y-2 md:space-y-4">
<li><a class="text-on-surface-variant hover:text-primary transition-colors text-[10px] md:text-sm font-medium" href="#">MDF Bases</a></li>
<li><a class="text-on-surface-variant hover:text-primary transition-colors text-[10px] md:text-sm font-medium" href="#">Resin Arts</a></li>
<li><a class="text-on-surface-variant hover:text-primary transition-colors text-[10px] md:text-sm font-medium" href="#">Jewellery Findings</a></li>
<li><a class="text-on-surface-variant hover:text-primary transition-colors text-[10px] md:text-sm font-medium" href="#">Bulk Destash</a></li>
</ul>
</div>
<div>
<h5 class="font-bold text-on-surface-variant mb-3 md:mb-6 uppercase tracking-widest text-[9px] md:text-xs">The Studio</h5>
<ul class="space-y-2 md:space-y-4">
<li><a class="text-on-surface-variant hover:text-primary transition-colors text-[10px] md:text-sm font-medium underline decoration-on-surface-variant/20 decoration-2 underline-offset-4" href="#">Sustainability</a></li>
<li><a class="text-on-surface-variant hover:text-primary transition-colors text-[10px] md:text-sm font-medium" href="#">Shipping Policy</a></li>
<li><a class="text-on-surface-variant hover:text-primary transition-colors text-[10px] md:text-sm font-medium" href="#">Privacy Policy</a></li>
<li><a class="text-on-surface-variant hover:text-primary transition-colors text-[10px] md:text-sm font-medium" href="#">Contact Us</a></li>
</ul>
</div>
<div>
<h5 class="font-bold text-on-surface-variant mb-3 md:mb-6 uppercase tracking-widest text-[9px] md:text-xs">Newsletter</h5>
<p class="text-on-surface-variant text-[10px] md:text-sm mb-3 md:mb-6 font-medium">Join our creative family for tutorials and exclusive discounts.</p>
<div class="flex flex-col gap-2.5">
<input class="bg-white/40 border-none rounded-xl px-4 py-2 md:py-3 text-[10px] md:text-sm focus:ring-2 focus:ring-primary-container text-on-surface-variant placeholder:text-on-surface-variant/50" placeholder="Your email address" type="email"/>
<button class="bg-primary-container text-on-surface-variant py-2 md:py-3 rounded-xl font-bold hover:brightness-105 transition-all shadow-sm text-[10px] md:text-sm">Subscribe</button>
</div>
</div>
</div>
<div class="border-t border-on-surface-variant/10 pt-4 md:pt-8 text-center relative z-10">
<p class="text-[9px] md:text-sm font-semibold text-on-surface-variant/70">© 2024 Artisan Pulse. Handcrafted with Heart.</p>
</div>
<div class="absolute -bottom-10 -right-10 w-48 h-48 md:w-64 md:h-64 bg-primary-container/20 rounded-full blur-3xl"></div>
</footer>

</body></html>