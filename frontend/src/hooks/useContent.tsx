import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";

interface ContentItem {
    _id: string;
    title: string;
    link: string;
    type: "youtube" | "twitter" | "article" | "pdf" | "image";
    description: string;
}

export function useContent() {
    const [contents, setContents] = useState<ContentItem[]>([]);

    useEffect(() => {
        axios.get(BACKEND_URL + "/api/v1/getcontent", {
            headers: {
                "Authorization": localStorage.getItem("token")
            }
        })
        .then((response) => {
            console.log("Content fetched successfully:", response.data);
            setContents(response.data);
        })
        .catch((error) => {
            console.error("Error fetching content:", error);
        });
    }, []);

    return { contents };
}
