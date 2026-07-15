export const homeTypography = {
    h1: `text-4xl font-bold`,
    h2: `text-2xl font-bold`,
    p: `text-neutral-focus text-sm`,
    pSectionLede: `text-neutral-focus text-sm mx-auto max-w-[600px]`,
    gradient: `
        bg-[linear-gradient(135deg,var(--primary)_0%,var(--primary-focus)_55%,var(--accent-focus)_100%)]
        bg-clip-text
        text-transparent
    `
}

export const heroSectionStyles = `
  flex flex-col gap-10
  text-center
  py-10
  px-6
`

export const homeStats = {
    grid: `
        my-4
        bg-line
        self-stretch grid grid-cols-2
        gap-px
        border border-line
        rounded-md
        overflow-hidden
    `,
    cell: `
        bg-background
        p-4
        text-center
    `,
    num: `
        font-bold text-2xl
        [&>span]:text-primary
    `,
    text: `
        text-2xs
        text-neutral
    `
}

// overwrites parent container padding
export const homeTestimonialStyles = `
    flex flex-col 
    gap-4 
    mt-8 mb-4 
    w-screen ml-[calc(50%-50vw)] mr-[calc(50%-50vw)]
    pl-content-margin
    bg-background-100 
    
`