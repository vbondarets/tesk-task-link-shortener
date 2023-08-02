import axios from "axios";

export default class LinkSevice {
    static async shortify(link: string) {
        const response = await axios.post(`http://localhost:5000/api/links/`, {link});
        return response.data;
    }
}