import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - ePhotography`;
    }, [title])
};

export default useTitle;