
module.exports = () => {
    const findAll = (_req, res) => {
        const users = [{ name: 'John Doe', mail: 'mail@mail.com' }];
        res.status(200).json(users);
    };

    const create = (req, res) => {
        res.status(201).json(req.body);
    };

    return { findAll, create };
}



