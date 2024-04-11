export { GetData };

import  axios from "axios";

interface User {
	id: number;
    firstname: string;
    lastname: string;
    email: string;
    birthDate: string;
}

const GetData = async () => {
	try {
		const response = await axios.get("https://jsonplaceholder.org/users")
		const users_ids = response.data.map((user: { id: number; }) => user.id);
		return users_ids;
		
	} catch (e) {
		//
	}
};