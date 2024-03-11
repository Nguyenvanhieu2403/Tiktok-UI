import * as request from '~/utils/request';

export const search = async (query, type = 'less') => {
    try {
        const res = await request.get('users/search', {
            params: {
                q: query,
                type,
            },
        });
        return res.data;
    } catch (error) {
        console.error('search', error);
    }
};
