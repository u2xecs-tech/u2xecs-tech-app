export const getEvaluationForQuestionnaire = /* GraphQL */ `
    query GetEvaluation($id: ID!) {
        getEvaluation(id: $id) {
            id
            name
            start_date
            end_date
            disclaimer
            enabled_sections
            description
            status
            creator
        }
    }
`;

export const createAnswerForQuestionnaire = /* GraphQL */ `
    mutation CreateAnswer(
        $input: CreateAnswerInput!
        $condition: ModelAnswerConditionInput
    ) {
        createAnswer(input: $input, condition: $condition) {
            id
            evaluationID
            name
            email
            answers
            createdAt
            updatedAt
            owner
        }
    }
`;