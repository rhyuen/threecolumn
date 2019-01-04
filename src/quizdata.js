const data = {
    choices: {
        "choice-1": {
            id: "choice-1",
            choice: "Platypus"
        },
        "choice-2": {
            id: "choice-2",
            choice: "Beaver."
        },
        "choice-3": {
            id: "choice-3",
            choice: "Batman."
        },
    },
    columns: {
        "choices": {
            id: "choices",
            title: "choices",
            taskIds: ["choice-1", "choice-2", "choice-3"]
        },
        "answer": {
            id: "answer",
            title: "answer",
            taskIds: []
        }
    },
    columnOrder: ["choices", "answer"]
};

module.exports = data;