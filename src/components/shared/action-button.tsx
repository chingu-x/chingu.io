import { Button } from "@/components/ui/button";
import {IconArrowRight} from "@tabler/icons-react";


export function ActionButton({
    text
}: {
  text: string
}) {
  return <Button
      className="p-6 text-md rounded-full gap-2"
  >
      <div>{text}</div>
      <div><IconArrowRight
        stroke={3}
      /></div>
  </Button>;
}