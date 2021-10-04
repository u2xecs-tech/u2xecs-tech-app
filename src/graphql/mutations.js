/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createAnswer = /* GraphQL */ `
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
      date
      createdAt
      updatedAt
      evaluation {
        id
        name
        start_date
        end_date
        disclaimer
        enabled_sections
        description
        status
        creator
        answers {
          nextToken
        }
        createdAt
        updatedAt
        owner
        comments {
          nextToken
        }
      }
    }
  }
`;
export const updateAnswer = /* GraphQL */ `
  mutation UpdateAnswer(
    $input: UpdateAnswerInput!
    $condition: ModelAnswerConditionInput
  ) {
    updateAnswer(input: $input, condition: $condition) {
      id
      evaluationID
      name
      email
      answers
      date
      createdAt
      updatedAt
      evaluation {
        id
        name
        start_date
        end_date
        disclaimer
        enabled_sections
        description
        status
        creator
        answers {
          nextToken
        }
        createdAt
        updatedAt
        owner
        comments {
          nextToken
        }
      }
    }
  }
`;
export const deleteAnswer = /* GraphQL */ `
  mutation DeleteAnswer(
    $input: DeleteAnswerInput!
    $condition: ModelAnswerConditionInput
  ) {
    deleteAnswer(input: $input, condition: $condition) {
      id
      evaluationID
      name
      email
      answers
      date
      createdAt
      updatedAt
      evaluation {
        id
        name
        start_date
        end_date
        disclaimer
        enabled_sections
        description
        status
        creator
        answers {
          nextToken
        }
        createdAt
        updatedAt
        owner
        comments {
          nextToken
        }
      }
    }
  }
`;
export const createEvaluation = /* GraphQL */ `
  mutation CreateEvaluation(
    $input: CreateEvaluationInput!
    $condition: ModelEvaluationConditionInput
  ) {
    createEvaluation(input: $input, condition: $condition) {
      id
      name
      start_date
      end_date
      disclaimer
      enabled_sections
      description
      status
      creator
      answers {
        items {
          id
          evaluationID
          name
          email
          answers
          date
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
      comments {
        items {
          id
          evaluationID
          content
          date
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
    }
  }
`;
export const updateEvaluation = /* GraphQL */ `
  mutation UpdateEvaluation(
    $input: UpdateEvaluationInput!
    $condition: ModelEvaluationConditionInput
  ) {
    updateEvaluation(input: $input, condition: $condition) {
      id
      name
      start_date
      end_date
      disclaimer
      enabled_sections
      description
      status
      creator
      answers {
        items {
          id
          evaluationID
          name
          email
          answers
          date
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
      comments {
        items {
          id
          evaluationID
          content
          date
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
    }
  }
`;
export const deleteEvaluation = /* GraphQL */ `
  mutation DeleteEvaluation(
    $input: DeleteEvaluationInput!
    $condition: ModelEvaluationConditionInput
  ) {
    deleteEvaluation(input: $input, condition: $condition) {
      id
      name
      start_date
      end_date
      disclaimer
      enabled_sections
      description
      status
      creator
      answers {
        items {
          id
          evaluationID
          name
          email
          answers
          date
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
      comments {
        items {
          id
          evaluationID
          content
          date
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
    }
  }
`;
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
      id
      evaluationID
      content
      date
      createdAt
      updatedAt
      evaluation {
        id
        name
        start_date
        end_date
        disclaimer
        enabled_sections
        description
        status
        creator
        answers {
          nextToken
        }
        createdAt
        updatedAt
        owner
        comments {
          nextToken
        }
      }
      owner
    }
  }
`;
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
      id
      evaluationID
      content
      date
      createdAt
      updatedAt
      evaluation {
        id
        name
        start_date
        end_date
        disclaimer
        enabled_sections
        description
        status
        creator
        answers {
          nextToken
        }
        createdAt
        updatedAt
        owner
        comments {
          nextToken
        }
      }
      owner
    }
  }
`;
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
      id
      evaluationID
      content
      date
      createdAt
      updatedAt
      evaluation {
        id
        name
        start_date
        end_date
        disclaimer
        enabled_sections
        description
        status
        creator
        answers {
          nextToken
        }
        createdAt
        updatedAt
        owner
        comments {
          nextToken
        }
      }
      owner
    }
  }
`;
