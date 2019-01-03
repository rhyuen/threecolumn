const data = {
    tasks: {
        "task-1": {
            id: "task-1",
            content: "Take out the garbage."
        },
        "task-2": {
            id: "task-2",
            content: "Watch my favourite show."
        },
        "task-3": {
            id: "task-3",
            content: "Charge my devices."
        },
        "task-4": {
            id: "task-4",
            content: "Consume all the meals."
        },
        "task-5": {
            id: "task-5",
            content: "Run outside."
        },
        "task-6": {
            id: "task-6",
            content: "Get ready for bed."
        },
        "task-7": {
            id: "task-7",
            content: "Become a billionaire."
        },
        "task-8": {
            id: "task-8",
            content: "Buy a country."
        },
        "task-9": {
            id: "task-9",
            content: "Write a best selling novel."
        }
    },
    columns: {
        "column-1": {
            id: "column-1",
            title: "To do",
            taskIds: ["task-1", "task-2", "task-3", "task-4", "task-5", "task-6"]
        },
        "column-2": {
            id: "column-2",
            title: "In progress",
            taskIds: ["task-7", "task-8"]
        },
        "column-3": {
            id: "column-3",
            title: "Done",
            taskIds: ["task-9"]
        }
    },
    columnOrder: ["column-1", "column-2", "column-3"]
};

module.exports = data;