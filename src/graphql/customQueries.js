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
        }
    }
`;