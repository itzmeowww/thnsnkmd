import { Link } from "@/navigation";
import { Badge } from "./ui/badge";

const BadgeList = ({ tools }: { tools: string[] }) => {

    return (
        <div className="flex gap-2 my-2 flex-wrap"> {tools.map((tool, idx) => {
            return <Badge key={idx} variant={'outline'} className="flex gap-2">
                {tool}
            </Badge>    
            })
        }
        </div>
    );
}

export default BadgeList;