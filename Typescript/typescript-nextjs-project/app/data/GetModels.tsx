export default function getAllModelas() : { id: number; name: string; category: string; description: string; imageUrl: string }[] {
 
    return [
        {
            id: 1,
            name: "Rocket Ship",
            category: "Vehicles",
            description: "A sleek rocket ship ready for interstellar travel.",
            imageUrl: "/models/rocket-ship.png"
        },
        {
            id: 2,
            name: "Chess Set",
            category: "Toys",
            description: "A complete chess set with intricate details.",
            imageUrl: "/models/chess-set.png"
        },
        {
            id: 3,
            name: "Dinosaur Figurine",
            category: "Toys",
            description: "A roaring T-Rex figurine for your desk.",
            imageUrl: "/models/dinosaur-figurine.png"
        },
        {
            id: 4,
            name: "Phone Stand",
            category: "Accessories",
            description: "A minimalist phone stand to keep your device upright.",
            imageUrl: "/models/phone-stand.png"
        },
        {
            id: 5,
            name: "Headphones Holder",
            category: "Accessories",
            description: "A stylish holder to keep your headphones organized    .",
            imageUrl: "/models/headphones-holder.png"
        },
        {
            id: 6,
            name: "Miniature Car",
            category: "Vehicles",
            description: "A detailed miniature car model for collectors.",
            imageUrl: "/models/miniature-car.png"
        },
        {
            id: 7,
            name: "Plant Pot",
            category: "Home Decor",
            description: "A decorative plant pot with a geometric design.",
            imageUrl: "/models/plant-pot.png"
        },
        {
            id: 8,
            name: "Keychain",
            category: "Accessories",
            description: "A custom keychain to add personality to your keys.",
            imageUrl: "/models/keychain.png"
        },
        {
            id: 9,
            name: "Desk Organizer",
            category: "Office Supplies",
            description: "A functional desk organizer to keep your workspace tidy.",
            imageUrl: "/models/desk-organizer.png"
        },
        {
            id: 10,
            name: "Toy Robot",
            category: "Toys",
            description: "A fun toy robot that can be assembled and displayed.",
            imageUrl: "/models/toy-robot.png"
        }
    ];
}
        