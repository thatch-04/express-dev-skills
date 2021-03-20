const skills = ['javascript', 'css', 'html', 'node.js'];

const getAll = () => {
    return skills;
}

const getOne = (index) => {
    return skills[index];
}

module.exports ={
    getAll,
    getOne,
};