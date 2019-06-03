'use strict';
export const messages = {
    db: {
        connectionReadyError: {
            code: 140,
            message: 'There is already an existing connection',
            status: ()=> { return 200; }
        },
        dbError: {
            code: 105,
            message: 'Error in the Database',
            status: ()=> { return 500; }
        } 
    }

};

