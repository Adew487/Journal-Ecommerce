const products = [
    {
        id: 0,
        brand: "Ericksson",
        name: "Headphones",
        price: 29.99,
        instock: 5,
        imgSrc: "./img/All-Products/headphone2.jpg",
        numberOfunits: 1,
    },
    {
        id: 1,
        brand: "Apple",
        name: "Apple Cinema 30",
        price: 80.00,
        instock: 100,
        imgSrc: "./img/All-Products/applecinema1.jpg",
    },
    {
        id: 2,
        brand: "Canon",
        name: "Canon EOS 5D",
        price: 100.00,
        instock: 100,
        imgSrc: "./img/All-Products/canoneos1.jpg",
    },
    {
        id: 3,
        brand: "Sarah Bell",
        name: "Classic Armchair",
        price: 680.00,
        instock: 100,
        imgSrc: "./img/All-Products/claasicarmchair1.png",
    },
    {
        id: 4,
        brand: "Olivia Smith",
        name: "Comfortable ArmChair",
        price: 720.00,
        instock: 100,
        imgSrc: "./img/All-Products/comfortablearm1.png",
    },
    {
        id: 5,
        brand: "Sarah Bloom",
        name: "Gray Armchair",
        price: "680.00",
        instock: 100,
        imgSrc: "./img/All-Products/grayarm1.png",
    },

    {
        id: 6,
        brand: "Hewlett-Packard",
        name: "HP LP3065",
        price: 100.00,
        instock: 100,
        imgSrc: "./img/All-Products/hplp1.jpg",
    },
    {
        id: 7,
        brand: "HTC",
        name: "HTC Touch HD",
        price: "3,680.00",
        instock: 100,
        imgSrc: "./img/All-Products/htc1.jpg",
    },
    {
        id: 8,
        brand: "Apple",
        name: "iMac",
        price: "2,680.00",
        instock: 100,
        imgSrc: "./img/All-Products/ipac1.jpg",
    },
    {
        id: 9,
        brand: "Apple",
        name: "iphone",
        price: 101.00,
        instock: 100,
        imgSrc: "./img/All-Products/iphone1.jpg",
    },
    {
        id: 10,
        brand: "Apple",
        name: "iPod Classic",
        price: "4,459.00",
        instock: 100,
        imgSrc: "./img/All-Products/ipodclassic1.jpg",
    },
    {
        id: 11,
        brand: "Apple",
        name: "iPod Nano",
        price: 209.00,
        instock: 100,
        imgSrc: "./img/All-Products/ipodnano1.jpg",
    },
    {
        id: 12,
        brand: "Apple",
        name: "iPod Shuffle",
        price: 101.00,
        instock: 100,
        imgSrc: "./img/All-Products/ipod_shuffle_1.jpg",
    },
    {
        id: 13,
        brand: "Apple",
        name: "iPod Touch",
        price: 150.00,
        instock: 100,
        imgSrc: "./img/All-Products/ipod_touch_1.jpg",
    },
    {
        id: 14,
        brand: "Apple",
        name: "MacBook",
        price: 500.00,
        instock: 100,
        imgSrc: "./img/All-Products/macbook1.jpg",
    },
    {
        id: 15,
        brand: "Apple",
        name: "MacBook Air",
        price: 1000.00,
        instock: 100,
        imgSrc: "./img/All-Products/macbookair1.jpg",
    },
    {
        id: 16,
        brand: "Apple",
        name: "MacBook Pro",
        price: 2000.00,
        instock: 100,
        imgSrc: "./img/All-Products/macbookpro11.jpg",
    },
    {
        id: 17,
        brand: "Nikon",
        name: "Nikon D300",
        price: 80.00,
        instock: 100,
        imgSrc: "./img/All-Products/nikond3001.jpg",
    },
    {
        id: 18,
        brand: "Samsung",
        name: "Samsung SyncMaster 941BW",
        price: 200.00,
        instock: 100,
        imgSrc: "./img/All-Products/samsung_syncmaster_1.jpg",
    },
    {
        id: 19,
        brand: "Sarah Bell",
        name: "Anti-Dandruff Shampoo",
        price: 680.00,
        instock: 100,
        imgSrc: "./img/All-Products/anti1.jpg",
    },
    {
        id: 20,
        brand: "Apple",
        name: "Apple Watch",
        price: "1,1920.00",
        instock: 100,
        imgSrc: "./img/All-Products/applewatch1.png",
    },
    {
        id: 21,
        brand: "Fort Cane",
        name: "Applique T-shirt",
        price: 209.00,
        instock: 100,
        imgSrc: "./img/All-Products/apiquet-shirt1.jpg",
    },
    {
        id: 22,
        brand: "Melissa Johnson",
        name: "Bio Butter",
        price: 706.00,
        instock: 100,
        imgSrc: "./img/All-Products/biobutter1.jpg",
    },
    {
        id: 23,
        brand: "NY Fashion",
        name: "Black High Heels",
        price: 540.00,
        instock: 100,
        imgSrc: "./img/All-Products/black-high1.jpg",
    },
    {
        id: 24,
        brand: "Chic D'or",
        name: "Black Lace Dress",
        price: 589.00,
        instock: 100,
        imgSrc: "./img/All-Products/blacklace1.jpg",
    },
    {
        id: 25,
        brand: "SuperBrand",
        name: "Black Leather Tote Bag",
        price: 410.00,
        instock: 100,
        imgSrc: "./img/All-Products/blackleather1.jpg",
    },
    {
        id: 26,
        brand: "NY Fashion",
        name: "Black Vintage T-shirt",
        price: 456.00,
        instock: 100,
        imgSrc: "./img/All-Products/blackvintage1.jpg",
    },
    {
        id: 27,
        brand: "Fort Cane",
        name: "Blue Y56",
        price: 309.00,
        instock: 100,
        imgSrc: "./img/All-Products/blue-y51.png",
    },
    {
        id: 28,
        brand: "Apple",
        name: "Bluetooth Smart Watch",
        price: "2,189.00",
        instock: 100,
        imgSrc: "./img/All-Products/bluetoothsmart1.png",
    },
    {
        id: 29,
        brand: "Olivia Smith",
        name: "Body Milk",
        price: 570.00,
        instock: 100,
        imgSrc: "./img/All-Products/bodymilk1.jpg",
    },
    {
        id: 30,
        brand: "Sarah Bell",
        name: "Body Scrub",
        price: 165.00,
        instock: 100,
        imgSrc: "./img/All-Products/bodyscrub1.jpg",
    },
    {
        id: 31,
        brand: "Hewlett-Packard",
        name: "Brown High Heels",
        price: 559.00,
        instock: 100,
        imgSrc: "./img/All-Products/fashion-footwear-high-heels-1.jpg",
    },
    {
        id: 32,
        brand: "Fort Cane",
        name: "Brown Leather Casual Shoes",
        price: 306.00,
        instock: 100,
        imgSrc: "./img/All-Products/hiking-shoes-1.jpg",
    },
    {
        id: 33,
        brand: "Fort Cane",
        name: "Business Bag",
        price: 250.00,
        instock: 100,
        imgSrc: "./img/All-Products/businessbag1.jpg",
    },
    {
        id: 34,
        brand: "Ericksson",
        name: "Canvas Tote Bag",
        price: 436.00,
        instock: 100,
        imgSrc: "./img/All-Products/canvas-tot1.jpg",
    },

];


const productscompare = [
    {
        id: 0,
        name: "Headphones",
        ImgSrc: "./img/All-Products/headphone2.jpg",
        Price: 200.00,
        model: "Model 519",
        brand: "Ericksson",
        Availability: "In Stock",
        rating: 4,
        summary: "Product description, along with any other tab can be displayed as tabs, accordion or all-visible blocks in grid format or one under the other.  You can mix and match tabs and blocks in any order ..",
        weight: "2.13kg",
        dimensions: "2.13cm * 0.01 * 1.32",
        clockspeed: "processor"
    },
];


const productlist = [
    {
        id: 0,
        brand: "Ericksson",
        name: "Headphones",
        price: 29.99,
        description: "Product description, along with any other tab can be displayed as tabs, accordion or all-visible blocks in grid format or one under the other.  You can mix and match tabs and blocks in any order and any position. Each tab can also be set up as a link and point to other pages or open popup modul..",
        instock: 5,
        imgSrc: "./img/All-Products/headphone2.jpg",
        numberOfunits: 1,
    },
    {
        id: 1,
        brand: "Apple",
        name: "Apple Cinema 30",
        price: 80.00,
        description: "The 30-inch Apple Cinema HD Display delivers an amazing 2560 x 1600 pixel resolution. Designed specifically for the creative professional, this display provides more space for easier access to all the tools and palettes needed to edit, format and composite your work. Combine this display with a Mac ..",
        instock: 100,
        imgSrc: "./img/All-Products/applecinema1.jpg",
    },
    {
        id: 2,
        brand: "Canon",
        name: "Canon EOS 5D",
        price: 100.00,
        description: "Product description, along with any other tab can be displayed as tabs, accordion or all-visible blocks in grid format or one under the other.  You can mix and match tabs and blocks in any order and any position. Each tab can also be set up as a link and point to other pages or open popup modul..",
        instock: 100,
        imgSrc: "./img/All-Products/canoneos1.jpg",
    },
    {
        id: 3,
        brand: "Sarah Bell",
        name: "Classic Armchair",
        price: 680.00,
        description: "Product description, along with any other tab can be displayed as tabs, accordion or all-visible blocks in grid format or one under the other.  You can mix and match tabs and blocks in any order and any position. Each tab can also be set up as a link and point to other pages or open popup modul..",
        instock: 100,
        imgSrc: "./img/All-Products/claasicarmchair1.png",
    },
    {
        id: 4,
        brand: "Olivia Smith",
        name: "Comfortable ArmChair",
        price: 720.00,
        description: "Product description, along with any other tab can be displayed as tabs, accordion or all-visible blocks in grid format or one under the other.  You can mix and match tabs and blocks in any order and any position. Each tab can also be set up as a link and point to other pages or open popup modul..",
        instock: 100,
        imgSrc: "./img/All-Products/comfortablearm1.png",
    },
    {
        id: 5,
        brand: "Sarah Bloom",
        name: "Gray Armchair",
        price: "680.00",
        description: "Product description, along with any other tab can be displayed as tabs, accordion or all-visible blocks in grid format or one under the other.  You can mix and match tabs and blocks in any order and any position. Each tab can also be set up as a link and point to other pages or open popup modul..",
        instock: 100,
        imgSrc: "./img/All-Products/grayarm1.png",
    },

    {
        id: 6,
        brand: "Hewlett-Packard",
        name: "HP LP3065",
        price: 100.00,
        description: "Product description, along with any other tab can be displayed as tabs, accordion or all-visible blocks in grid format or one under the other.  You can mix and match tabs and blocks in any order and any position. Each tab can also be set up as a link and point to other pages or open popup modul..",
        instock: 100,
        imgSrc: "./img/All-Products/hplp1.jpg",
    },
    {
        id: 7,
        brand: "HTC",
        name: "HTC Touch HD",
        price: "3,680.00",
        description: "Product description, along with any other tab can be displayed as tabs, accordion or all-visible blocks in grid format or one under the other.  You can mix and match tabs and blocks in any order and any position. Each tab can also be set up as a link and point to other pages or open popup modul..",
        instock: 100,
        imgSrc: "./img/All-Products/htc1.jpg",
    },
    {
        id: 8,
        brand: "Apple",
        name: "iMac",
        price: "2,680.00",
        description: "Product description, along with any other tab can be displayed as tabs, accordion or all-visible blocks in grid format or one under the other.  You can mix and match tabs and blocks in any order and any position. Each tab can also be set up as a link and point to other pages or open popup modul..",
        instock: 100,
        imgSrc: "./img/All-Products/ipac1.jpg",
    },
    {
        id: 9,
        brand: "Apple",
        name: "iphone",
        price: 101.00,
        description: "Product description, along with any other tab can be displayed as tabs, accordion or all-visible blocks in grid format or one under the other.  You can mix and match tabs and blocks in any order and any position. Each tab can also be set up as a link and point to other pages or open popup modul..",
        instock: 100,
        imgSrc: "./img/All-Products/iphone1.jpg",
    },
    {
        id: 10,
        brand: "Apple",
        name: "iPod Classic",
        price: "4,459.00",
        instock: 100,
        description: "Product description, along with any other tab can be displayed as tabs, accordion or all-visible blocks in grid format or one under the other.  You can mix and match tabs and blocks in any order and any position. Each tab can also be set up as a link and point to other pages or open popup modul..",
        imgSrc: "./img/All-Products/ipodclassic1.jpg",
    },
    {
        id: 11,
        brand: "Apple",
        name: "iPod Nano",
        price: 209.00,
        description: "Product description, along with any other tab can be displayed as tabs, accordion or all-visible blocks in grid format or one under the other.  You can mix and match tabs and blocks in any order and any position. Each tab can also be set up as a link and point to other pages or open popup modul..",
        instock: 100,
        imgSrc: "./img/All-Products/ipodnano1.jpg",
    },
    {
        id: 12,
        brand: "Apple",
        name: "iPod Shuffle",
        price: 101.00,
        description: "Product description, along with any other tab can be displayed as tabs, accordion or all-visible blocks in grid format or one under the other.  You can mix and match tabs and blocks in any order and any position. Each tab can also be set up as a link and point to other pages or open popup modul..",
        instock: 100,
        imgSrc: "./img/All-Products/ipod_shuffle_1.jpg",
    },
    {
        id: 13,
        brand: "Apple",
        name: "iPod Touch",
        price: 150.00,
        description: "Product description, along with any other tab can be displayed as tabs, accordion or all-visible blocks in grid format or one under the other.  You can mix and match tabs and blocks in any order and any position. Each tab can also be set up as a link and point to other pages or open popup modul..",
        instock: 100,
        imgSrc: "./img/All-Products/ipod_touch_1.jpg",
    },
    {
        id: 14,
        brand: "Apple",
        name: "MacBook",
        price: 500.00,
        description: "Product description, along with any other tab can be displayed as tabs, accordion or all-visible blocks in grid format or one under the other.  You can mix and match tabs and blocks in any order and any position. Each tab can also be set up as a link and point to other pages or open popup modul..",
        instock: 100,
        imgSrc: "./img/All-Products/macbook1.jpg",
    },
    {
        id: 15,
        brand: "Apple",
        name: "MacBook Air",
        price: 1000.00,
        description: "Product description, along with any other tab can be displayed as tabs, accordion or all-visible blocks in grid format or one under the other.  You can mix and match tabs and blocks in any order and any position. Each tab can also be set up as a link and point to other pages or open popup modul..",
        instock: 100,
        imgSrc: "./img/All-Products/macbookair1.jpg",
    },
    {
        id: 16,
        brand: "Apple",
        name: "MacBook Pro",
        price: 2000.00,
        description: "Product description, along with any other tab can be displayed as tabs, accordion or all-visible blocks in grid format or one under the other.  You can mix and match tabs and blocks in any order and any position. Each tab can also be set up as a link and point to other pages or open popup modul..",
        instock: 100,
        imgSrc: "./img/All-Products/macbookpro11.jpg",
    },
    {
        id: 17,
        brand: "Nikon",
        name: "Nikon D300",
        price: 80.00,
        description: "Product description, along with any other tab can be displayed as tabs, accordion or all-visible blocks in grid format or one under the other.  You can mix and match tabs and blocks in any order and any position. Each tab can also be set up as a link and point to other pages or open popup modul..",
        instock: 100,
        imgSrc: "./img/All-Products/nikond3001.jpg",
    },
    {
        id: 18,
        brand: "Samsung",
        name: "Samsung SyncMaster 941BW",
        price: 200.00,
        instock: 100,
        description: "Product description, along with any other tab can be displayed as tabs, accordion or all-visible blocks in grid format or one under the other.  You can mix and match tabs and blocks in any order and any position. Each tab can also be set up as a link and point to other pages or open popup modul..",
        imgSrc: "./img/All-Products/samsung_syncmaster_1.jpg",
    },
    {
        id: 19,
        brand: "Sarah Bell",
        name: "Anti-Dandruff Shampoo",
        price: 680.00,
        description: "Product description, along with any other tab can be displayed as tabs, accordion or all-visible blocks in grid format or one under the other.  You can mix and match tabs and blocks in any order and any position. Each tab can also be set up as a link and point to other pages or open popup modul..",
        instock: 100,
        imgSrc: "./img/All-Products/anti1.jpg",
    },
    {
        id: 20,
        brand: "Apple",
        name: "Apple Watch",
        price: "1,1920.00",
        description: "Product description, along with any other tab can be displayed as tabs, accordion or all-visible blocks in grid format or one under the other.  You can mix and match tabs and blocks in any order and any position. Each tab can also be set up as a link and point to other pages or open popup modul..",
        instock: 100,
        imgSrc: "./img/All-Products/applewatch1.png",
    },
    {
        id: 21,
        brand: "Fort Cane",
        name: "Applique T-shirt",
        price: 209.00,
        description: "Product description, along with any other tab can be displayed as tabs, accordion or all-visible blocks in grid format or one under the other.  You can mix and match tabs and blocks in any order and any position. Each tab can also be set up as a link and point to other pages or open popup modul..",
        instock: 100,
        imgSrc: "./img/All-Products/apiquet-shirt1.jpg",
    },
    {
        id: 22,
        brand: "Melissa Johnson",
        name: "Bio Butter",
        price: 706.00,
        description: "Product description, along with any other tab can be displayed as tabs, accordion or all-visible blocks in grid format or one under the other.  You can mix and match tabs and blocks in any order and any position. Each tab can also be set up as a link and point to other pages or open popup modul..",
        instock: 100,
        imgSrc: "./img/All-Products/biobutter1.jpg",
    },
    {
        id: 23,
        brand: "NY Fashion",
        name: "Black High Heels",
        price: 540.00,
        description: "Product description, along with any other tab can be displayed as tabs, accordion or all-visible blocks in grid format or one under the other.  You can mix and match tabs and blocks in any order and any position. Each tab can also be set up as a link and point to other pages or open popup modul..",
        instock: 100,
        imgSrc: "./img/All-Products/black-high1.jpg",
    },
    {
        id: 24,
        brand: "Chic D'or",
        name: "Black Lace Dress",
        price: 589.00,
        description: "Product description, along with any other tab can be displayed as tabs, accordion or all-visible blocks in grid format or one under the other.  You can mix and match tabs and blocks in any order and any position. Each tab can also be set up as a link and point to other pages or open popup modul..",
        instock: 100,
        imgSrc: "./img/All-Products/blacklace1.jpg",
    },
    {
        id: 25,
        brand: "SuperBrand",
        name: "Black Leather Tote Bag",
        price: 410.00,
        description: "Product description, along with any other tab can be displayed as tabs, accordion or all-visible blocks in grid format or one under the other.  You can mix and match tabs and blocks in any order and any position. Each tab can also be set up as a link and point to other pages or open popup modul..",
        instock: 100,
        imgSrc: "./img/All-Products/blackleather1.jpg",
    },
    {
        id: 26,
        brand: "NY Fashion",
        name: "Black Vintage T-shirt",
        price: 456.00,
        description: "Product description, along with any other tab can be displayed as tabs, accordion or all-visible blocks in grid format or one under the other.  You can mix and match tabs and blocks in any order and any position. Each tab can also be set up as a link and point to other pages or open popup modul..",
        instock: 100,
        imgSrc: "./img/All-Products/blackvintage1.jpg",
    },
    {
        id: 27,
        brand: "Fort Cane",
        name: "Blue Y56",
        price: 309.00,
        description: "Product description, along with any other tab can be displayed as tabs, accordion or all-visible blocks in grid format or one under the other.  You can mix and match tabs and blocks in any order and any position. Each tab can also be set up as a link and point to other pages or open popup modul..",
        instock: 100,
        imgSrc: "./img/All-Products/blue-y51.png",
    },
    {
        id: 28,
        brand: "Apple",
        name: "Bluetooth Smart Watch",
        price: "2,189.00",
        description: "Product description, along with any other tab can be displayed as tabs, accordion or all-visible blocks in grid format or one under the other.  You can mix and match tabs and blocks in any order and any position. Each tab can also be set up as a link and point to other pages or open popup modul..",
        instock: 100,
        imgSrc: "./img/All-Products/bluetoothsmart1.png",
    },
    {
        id: 29,
        brand: "Olivia Smith",
        name: "Body Milk",
        price: 570.00,
        description: "Product description, along with any other tab can be displayed as tabs, accordion or all-visible blocks in grid format or one under the other.  You can mix and match tabs and blocks in any order and any position. Each tab can also be set up as a link and point to other pages or open popup modul..",
        instock: 100,
        imgSrc: "./img/All-Products/bodymilk1.jpg",
    },
    {
        id: 30,
        brand: "Sarah Bell",
        name: "Body Scrub",
        price: 165.00,
        description: "Product description, along with any other tab can be displayed as tabs, accordion or all-visible blocks in grid format or one under the other.  You can mix and match tabs and blocks in any order and any position. Each tab can also be set up as a link and point to other pages or open popup modul..",
        instock: 100,
        imgSrc: "./img/All-Products/bodyscrub1.jpg",
    },
    {
        id: 31,
        brand: "Hewlett-Packard",
        name: "Brown High Heels",
        price: 559.00,
        description: "Product description, along with any other tab can be displayed as tabs, accordion or all-visible blocks in grid format or one under the other.  You can mix and match tabs and blocks in any order and any position. Each tab can also be set up as a link and point to other pages or open popup modul..",
        instock: 100,
        imgSrc: "./img/All-Products/fashion-footwear-high-heels-1.jpg",
    },
    {
        id: 32,
        brand: "Fort Cane",
        name: "Brown Leather Casual Shoes",
        price: 306.00,
        description: "Product description, along with any other tab can be displayed as tabs, accordion or all-visible blocks in grid format or one under the other.  You can mix and match tabs and blocks in any order and any position. Each tab can also be set up as a link and point to other pages or open popup modul..",
        instock: 100,
        imgSrc: "./img/All-Products/hiking-shoes-1.jpg",
    },
    {
        id: 33,
        brand: "Fort Cane",
        name: "Business Bag",
        price: 250.00,
        description: "Product description, along with any other tab can be displayed as tabs, accordion or all-visible blocks in grid format or one under the other.  You can mix and match tabs and blocks in any order and any position. Each tab can also be set up as a link and point to other pages or open popup modul..",
        instock: 100,
        imgSrc: "./img/All-Products/businessbag1.jpg",
    },
    {
        id: 34,
        brand: "Ericksson",
        name: "Canvas Tote Bag",
        price: 436.00,
        description: "Product description, along with any other tab can be displayed as tabs, accordion or all-visible blocks in grid format or one under the other.  You can mix and match tabs and blocks in any order and any position. Each tab can also be set up as a link and point to other pages or open popup modul..",
        instock: 100,
        imgSrc: "./img/All-Products/canvas-tot1.jpg",
    },
];

