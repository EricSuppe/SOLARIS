
import { useEffect, useState } from "react";

const useReadingProgress = () => {
    const [completion, setCompletion] = useState(0);

    useEffect(() => {
        const updateScrollCompletion = () => {
            const currentProgress = document.getElementsByTagName("main")[0].scrollTop;
            const scrollHeight = document.getElementsByTagName("main")[0].scrollHeight - window.innerHeight
            if(scrollHeight) {
                setCompletion(
                    Number((currentProgress / scrollHeight).toFixed(2) * 100)
                )
            }
        }

        if(document.getElementsByTagName("main")[0] !== null) {
            document.getElementsByTagName("main")[0].addEventListener("scroll", updateScrollCompletion);
        } else {
            return null
        }

        return () => {
            document.getElementsByTagName("main")[0].removeEventListener("scroll", updateScrollCompletion);
        }

    }, []);

    return completion;
}

export default useReadingProgress;
