import type {MenuContent as MenuContentType} from "#/types/nav.ts";

export function MenuContent({
    menuContent
}:{
    menuContent: MenuContentType
}) {
    return <div>{menuContent.title}</div>
}