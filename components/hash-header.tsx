import { Hash } from "lucide-react";

const HashHeader = ({text}:{text:string}) => {
    return (
        
        <h1 className="text-2xl md:text-3xl font-bold  flex items-center gap-2 leading-tight tracking-tighter ">
            <Hash /> {text}
        </h1>
    );
}

export default HashHeader;