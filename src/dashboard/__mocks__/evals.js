import {v4 as uuid} from 'uuid';
import {answers} from "./answers";

export function getEvalByID(id) {
    return evals.filter((e) => {return id === e.id})[0]
}

export function addEval(name, description, disclaimer, enabled_sections) {
    const e = {
            id: uuid(),
            name: name,
            start_date: "02 Mar 2021",
            end_date: "06 Mar 2021",
            disclaimer: disclaimer,
            enabled_sections: enabled_sections,
            description: description,
            link: "www.apple.com",
            status: 0,
            answers: [],
        }
    evals.push(e)
    return e
}

export function removeEval(id) {
    evals = evals.filter((e) => e.id !== id)
}

export var evals = [
    {
        id: '0',
        name: "UFPR Dinf",
        start_date: "02 Mar 2021",
        end_date: "06 Mar 2021",
        disclaimer: "",
        enabled_sections: [0, 1, 2, 3, 4, 5, 6, 7, 8],
        description: "Avaliação feita com os professores do departamento de informática da Universidade Federal do Paraná.",
        link: "www.apple.com",
        status: 0,
        answers: answers,
    },
    {
        id: '1',
        name: "UFPR Dinf 2",
        start_date: "02 Mar 2021",
        end_date: "06 Mar 2021",
        disclaimer: "",
        enabled_sections: [0, 1],
        description: "Avaliação feita com os professores do departamento de informática da Universidade Federal do Paraná. Avaliação feita com os professores do departamento de informática da ",
        link: "www.apple.com",
        status: 1,
        answers: [],
    },
    {
        id: uuid(),
        name: "James Inc.",
        start_date: "02 Mar 2021",
        end_date: "06 Mar 2021",
        disclaimer: "",
        enabled_sections: [0, 1],
        description: "Avaliação feita com os professores do departamento de informática da Universidade Federal do Paraná.",
        link: "www.apple.com",
        status: 2,
        answers: [],
    },
    {
        id: uuid(),
        name: "iFood",
        start_date: "02 Mar 2021",
        end_date: "06 Mar 2021",
        disclaimer: "",
        enabled_sections: [0, 1],
        description: "Avaliação feita com os professores do departamento de informática da Universidade Federal do Paraná.",
        link: "www.apple.com",
        status: 0,
        answers: [],
    },
    {
        id: uuid(),
        name: "Redes 2",
        start_date: "02 Mar 2021",
        end_date: "06 Mar 2021",
        disclaimer: "",
        enabled_sections: [0, 1],
        description: "Avaliação feita com os professores do departamento de informática da Universidade Federal do Paraná.",
        link: "www.apple.com",
        status: 0,
        answers: [],
    },
];
