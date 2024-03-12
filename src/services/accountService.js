import * as httpRequest from '~/utils/httpRequest';

export const getSuggested = async (page, PerPage) => {
    try {
        const res = await httpRequest.get('users/suggested', {
            params: {
                page: page,
                per_page: PerPage,
            },
        });
        return res.data;
    } catch (error) {
        console.error('getSuggested', error);
    }
};
