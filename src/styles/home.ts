const base = {
    h2: `text-3xl font-bold lg:text-4xl max-w-[760px]`,
    pSectionLede: `text-neutral-focus text-base font-medium max-w-[600px]`
}

export const homeTypography = {
    h1: `text-4xl font-bold lg:text-[2.7rem] xl:text-5xl`,
    h2: `${base.h2} md:text-center mx-auto`,
    h3: `text-2xl font-bold`,
    p: `text-neutral-focus font-medium max-w-[600px] mx-auto`,
    pSectionLede: `mx-auto md:text-center`,
    gradient: `
        bg-[linear-gradient(135deg,var(--primary)_0%,var(--primary-focus)_55%,var(--accent-focus)_100%)]
        bg-clip-text
        text-transparent
    `,
    leftAlign: {
        h2: `${base.h2} text-left`,
        pSectionLede: `${base.pSectionLede} text-left`,
    }
};


