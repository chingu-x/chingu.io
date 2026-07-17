export type Testimonial = {
    title: string;
    quote: string;
    author: string;
    image: string;
    role: string;
};

export const testimonials: Testimonial[] = [
    {
        title: "Escape the tutorial loop",
        quote:
            "I discovered that watching 100 solutions to a problem isn't the same as solving it once yourself.",
        author: "Mostafa Elmoalem",
        image: "mostafa-elmoalem.jpg",
        role: "Web Developer · Voyage alum",
    },
    {
        title: "Find your teammates",
        quote:
            "Strangers became teammates, and teammates built something real.",
        author: "Shivanand Gupta",
        image: "shivanand-gupta.jpg",
        role: "Web Developer · Voyage alum",
    },
    {
        title: "Build like a pro",
        quote:
            "A powerful simulation of a real-world, cross-functional environment, focused on building a market-ready SaaS product.",
        author: "Koby Sysouvanh",
        image: "koby-sysouvanh.jpg",
        role: "Web Developer · Voyage alum",
    },
    {
        title: "Get real-world cred",
        quote:
            "You can learn how to code in a vacuum, but you cannot learn how to build professionally without getting some hands-on experience.",
        author: "Emily C.",
        image: "emily-c.jpg",
        role: "Web Developer · Voyage alum",
    },
    {
        title: "Take pride in the how",
        quote:
            "Proud of what we built. Even more proud of how we built it — together.",
        author: "Sophie Nora Keil",
        image: "sophie-nora-keil.jpg",
        role: "Web Developer · Voyage alum",
    },
    {
        title: "Grow together",
        quote:
            "The best teams aren't the ones with all the answers — they're the ones willing to explore, experiment, and grow together.",
        author: "Ross Clettenberg",
        image: "ross-clettenberg.jpg",
        role: "Web Developer · Voyage alum",
    },
];
