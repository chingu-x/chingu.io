// shared typography styles

export const sharedTypography = {
    h1: `
        text-[clamp(2.5rem,6.5vw,5.25rem)] 
        font-bold text-balance leading-none m-w-[960px] 
        mx-6         
    `,
    lede: `
        max-w-[680px] mx-auto 
        text-neutral-focus 
        text-[clamp(1.05rem,1.4vw,1.22rem)] 
        leading-[1.6] 
        text-foreground
    `,
    h2: `
        text-4xl
        font-bold
        text-balance
        md:text-center
        md:max-w-[960px]
    `,
    h3: `
        text-xl
        font-bold
    `,
    p: `
        text-base
        text-neutral-focus
    `
}