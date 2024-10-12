import { Loader2 } from "lucide-react";
import { BlogModal } from "./modal";

const Loading = () => {
    return (
        <BlogModal>
            <Loader2 className="animate-spin w-6 h-6" />
        </BlogModal>
    )
}

export default Loading;