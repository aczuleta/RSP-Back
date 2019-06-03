import uuidv4 from 'uuid/v4';

export default {
    Query: {
        messages: (parent, args, {models}) => {
          return Object.values(models.messages);
        },
        message: (parent, { id }, {models} ) => {
          return models.messages[id];
        },
      },
    Mutation: {
        createMessage: (parent, { text, userId }, { me, models}) => {
            const ide = uuidv4();
            const message = {
                id: ide,
                text,
                userId,
            };

            models.messages[ide] = message;
            models.users[userId].messageIds.push(ide);

            return message;
        },
        deleteMessage: (parent, {id}, {me, models}) => {
            let target = models.messages[id];
            let rta;
            if(target) {
                rta = true;
                delete models.messages[i];
            } else {
                rta = false;
            } 
            models.users.forEach(user => {
                let indice = user.messageIds.indexOf(id);
                if(indice  > -1) user.messageIds.splice(indice, 1);
            });
            return rta;
        },
    },
    Message: {
        user: (message, args, {models}) => {
        return models.users[message.userId];
        },
    },
};