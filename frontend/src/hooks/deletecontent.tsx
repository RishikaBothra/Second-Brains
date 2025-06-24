import axios from "axios";
import { BACKEND_URL } from "../config";

export function deleteContent(id: string) {
    axios.delete(BACKEND_URL + "/api/v1/deletecontent", {
        headers: {
            "Authorization": localStorage.getItem("token")
        },
        data: { contentId: id } 
    })
    .then((response) => {
        console.log("Content deleted successfully:", response.data);
        window.location.reload();
    })
    .catch((error) => {
        console.error("Error deleting content:", error);
    });
}
