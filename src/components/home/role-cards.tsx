import {ArrowRight} from "lucide-react";
import {type RoleCard as RoleCardType, roleCards} from "#/content/home/role-cards.ts";
import {cn} from "#/lib/utils.ts";
import {Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const cardStyles = `
    group
    border hover:border-primary/40
    rounded-2xl
    px-2 py-6
    transition-[all,box-shadow,border-color]
    duration-200
    ease-[var(--ease)]
    hover:shadow-md
    hover:-translate-y-1
`

const cardLinkStyles = `
    flex items-center 
    cursor-pointer 
    font-bold 
    text-sm
    gap-1 group-hover:gap-2
    hover:text-primary
`

export const HomeRoleCards = () => {
    return (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {roleCards.map((roleCard) => (
                <RoleCard key={roleCard.title} cardContent={roleCard} />
            ))}
        </div>
    )
}

const RoleCard = ({
    cardContent
}:{
    cardContent: RoleCardType
}) => {
    const Icon = cardContent.icon.name

    return <Card className={cardStyles}>
        <CardHeader>
            <Icon className={cn('h-8 w-8 p-2 mb-2 rounded', cardContent.icon.className)}/>
            <CardTitle className="text-xl font-bold">
                {cardContent.title}
            </CardTitle>
            <CardDescription className="text-base font-medium text-neutral-focus">
                {cardContent.description}
            </CardDescription>
        </CardHeader>
        <CardContent className="mt-8">
            <div className={cardLinkStyles}>
                <span>{cardContent.linkText}</span>
                <ArrowRight size={16} strokeWidth={3}/>
            </div>
        </CardContent>
    </Card>
}