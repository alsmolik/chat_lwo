class ChatPubSub {
    constructor() {
        this.users = [];
    }

    addUser(user) {
        this.users.push(user);
    }

    delUser(user) {
        let index = this.users.indexOf(user);
        if (index > -1) {
            this.users.splice(index, 1);
        }
    }

    sendAll(msg) {
        this.users.forEach(user => {
            user.send(msg);
        });
    }
}

module.exports = ChatPubSub;