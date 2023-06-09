const prisma = require("./prisma");


const getAllTasks = (moreThan) => {
    return prisma.products.findMany({
        where: {
            price: {
                gt: moreThan
            }
        }
    });
}

const getTaskById = (id) => {
    return prisma.tasks.findFirst({
        where: {
            id: id
        }
    })
}

const saveTask = (task) => {
    return prisma.tasks.create({
        data: task
    })
}

const updateTask = (id, task) => {
    return prisma.tasks.update({
        where: {
            id: id
        },
        data: task
    })
}

const deleteTask = (id) => {
    return prisma.tasks.delete({
        where: {
            id: id
        }
    })
}

module.exports = {
    saveTask,
    getAllTasks,
    getTaskById,
    updateTask,
    deleteTask
}