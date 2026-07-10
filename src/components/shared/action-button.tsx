import { Button } from "@/components/ui/button";
import {IconArrowRight} from "@tabler/icons-react";


export function ActionButton({
    text
}: {
  text: string
}) {
  return <Button
      className="px-6 py-5 rounded-full gap-2 cursor-pointer"
  >
      <div>{text}</div>
      <div><IconArrowRight
        stroke={3}
      /></div>
  </Button>;
}