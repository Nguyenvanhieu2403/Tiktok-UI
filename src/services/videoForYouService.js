import * as httpRequest from '~/utils/httpRequest';

export const get = async (type = 'for-you', page) => {
    try {
        const res = await httpRequest.get('videos', {
            params: {
                type: type,
                page,
            },
        });
        return res.data;
    } catch (error) {
        console.error('get video for you', error);
    }
};
