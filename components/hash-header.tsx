import { Hash } from "lucide-react";

const HashHeader = ({text}:{text:string}) => {
    return (
        <h1 className="text-2xl md:text-3xl flex items-center gap-2">
            <Hash /> {text}
        </h1>
    );
}

export default HashHeader;