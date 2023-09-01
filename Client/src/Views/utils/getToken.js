import jwt_decode from "jwt-decode";
import Cookies from "js-cookie";

const idFromToken = () => {
    const token = Cookies.get("auth");
    if (token) {
        const decoded = jwt_decode(token);
        return decoded.id;
    } else {
        return null;
    }
};

export default idFromToken;