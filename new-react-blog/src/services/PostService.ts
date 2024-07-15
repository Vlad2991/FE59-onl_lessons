import { IPost } from "../tools/types"


export interface IRes {
    count: number
    results: IPost[]
}


export const getAllPosts = (limit: number, offset: number) => {
    return fetch(
        'https://studapi.teachmeskills.by/blog/posts/'
        + `?limit=${limit}&offset=${offset}`
    )
        .then(response => response.json())
        .then(res => res.results)
}
export const GetSearchPosts = (search: number | string) => {
    return fetch(
        'https://studapi.teachmeskills.by/blog/posts/'
        + `?search=${search}&limit=10`
    )
        .then(response => response.json())
        .then(res => res.results)
}

export const getPostById = (id: number = 1) => {
    return fetch(
        'https://studapi.teachmeskills.by/blog/posts/'
        + `${id}`
    )
        .then(response => response.json())
        .then(res => res)
}

export const getPostsCount = async () => {
    const response = await fetch(`https://studapi.teachmeskills.by/blog/posts/`);
    const res = await response.json();
    return res.count;
};

export const getSearchPosts = async (value: string, offset: number = 0) => {
    const response = await fetch(
        `https://studapi.teachmeskills.by/blog/posts/?limit=10&offset=${offset}&search=${value}`
    );
    const res = await response.json();
    return res.results;
};

export const getSearchPostsCount = async (value: string): Promise<number> => {
    const response = await fetch(
        `https://studapi.teachmeskills.by/blog/posts/?limit=0&offset=0&search=${value}`
    );
    const res = await response.json();
    return res.count;
};

export const createNewMyPost = async (token: string, formData: FormData) => {
    const url = 'https://studapi.teachmeskills.by/blog/posts/'
    const params = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: formData
    }
    const request = new Request(url, params)
    const response = await fetch(request)
    const result = await response.json()
    return {
        ok: response.ok,
        status: response.status,
        data: result
    }
}

export const getMyPosts = async (
    accessToken: string,
    limit: number,
    offset: number
) => {
    const url = `https://studapi.teachmeskills.by/blog/posts/my_posts/?limit=${limit}&offset=${offset}`;
    const params = {
        method: "GET",
        headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${accessToken}`,
        },
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

export const deleteMyPost = async (accessToken: string, id: number) => {
    const url = `https://studapi.teachmeskills.by/blog/posts/${id}/`;
    const params = {
        method: "DELETE",
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    };
    const request = new Request(url, params);
    const response = await fetch(request);
    return {
        ok: response.ok,
        status: response.status,
    };
};