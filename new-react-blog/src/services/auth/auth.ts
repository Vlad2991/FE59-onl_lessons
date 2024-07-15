const getTokensUser = async (
    email: string,
    password: string
): Promise<{ ok: boolean; status: number; data: any }> => {
    const url = "https://studapi.teachmeskills.by/auth/jwt/create/";
    const params = {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify({
            password,
            email,
        }),
    };


    const request = new Request(url, params);
    const response = await fetch(request);
    const result = await response.json();
    return {
        ok: response.ok,
        status: response.status,
        data: result,
    };
};

export default getTokensUser 
