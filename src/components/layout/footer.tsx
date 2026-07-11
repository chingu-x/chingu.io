import {footerSections} from "#/content/footer.ts";
import {cva} from "class-variance-authority";

const footerStyles = cva(`
    bg-(--color-footer-background)
    text-background/70
    
    mt-auto
`)

const footerStylesInner = cva(`
    grid
    md:grid-cols-[1fr_1fr]
    lg:grid-cols-[2fr_1fr_1fr_1fr]
    gap-8           
`)

const footerStylesBottom = cva(`
    text-2xs font-bold uppercase 
    text-background/50 
    flex flex-col gap-4
    md:flex-row md:justify-between 
    mt-12
`)

export function Footer(){
    return (
        <footer className={footerStyles()}>
            <div className="max-w-(--max-content-width) mx-auto p-8">
                <div className={footerStylesInner()}>
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center">
                            <img src="/images/chingu-logo.svg" alt="logo" className="h-7 w-7"/>
                            <span className="text-white/80 font-bold ml-2">Chingu</span>
                        </div>
                        <div>Build real products with a cross-functional remote team.</div>
                    </div>
                    {footerSections.map((section) => {
                        return (
                            <div key={section.title}>
                                <div className="text-primary font-bold uppercase text-2xs mb-6">
                                    {`// ${section.title}`}
                                </div>
                                {section.links.map((link) => {
                                    return (
                                        <div
                                            key={link.label}
                                            className="text-sm my-2 cursor-pointer hover:text-background"
                                        >
                                            {link.label}
                                        </div>
                                    )
                                })}
                            </div>
                        )
                    })}
                </div>
                <div className={footerStylesBottom()}>
                    <span>
                        {`© chingu · free · volunteer-run · worldwide since 2016`}
                    </span>
                        <span>
                        {`// build_real_products`}
                    </span>
                </div>
            </div>
        </footer>
    )
}