const Responses = {
    _200(data = {}) {

        const response = {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Methods': '*',
                'Access-Control-Allow-Origin': '*',
            },
            statusCode: 200,
            body: JSON.stringify(data),
        };
        console.log(response);
        return response;
    },

    _400(data = {}) {
        const response = {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Methods': '*',
                'Access-Control-Allow-Origin': '*',
            },
            statusCode: 400,
            body: JSON.stringify(data),
        };
        console.log(response);
        return response;
    },
};

module.exports = Responses;