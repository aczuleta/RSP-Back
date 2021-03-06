
export default {
    Query: {
        users: (parent, args, {models}) => {
          return Object.values(models.users);
        },
        user: (parent, { id }, { models }) => {
          return models.users[id];
        },
        me: (parent, args, { me, models }) => {
          return me;
        }
      },
    User: {
        username: user => `${user.firstname} ${user.lastname}`,
        messages: (user, args, {models}) => {
            return Object.values(models.messages).filter(
            message => message.userId === user.id,
            );
        },
    }
};