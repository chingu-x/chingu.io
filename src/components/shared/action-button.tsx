import {IconArrowRight} from "@tabler/icons-react";
import {cva} from "class-variance-authority";
import { Button } from "@/components/ui/button";

const actionButtonStyles = cva(`
  px-6 py-5 
  border-0 rounded-full 
  font-bold
  gap-2 
  cursor-pointer 
  transition-[transform,box-shadow,background,color,border-color]
  duration-150
  ease-[var(--ease)]
  transition-shadow hover:shadow-[0_0_36px_-10px_var(--color-primary)] 
  hover:gap-3 hover:pr-5
`)

export function ActionButton({
    text
}: {
  text: string
}) {
  return <Button
      className={actionButtonStyles()}
  >
      <div>{text}</div>
      <div><IconArrowRight
        stroke={3}
      /></div>
  </Button>;
}