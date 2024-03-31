export const fetchEmployees = async (api: string) => {
    try {
        const response = await fetch(api);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
};
