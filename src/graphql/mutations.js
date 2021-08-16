/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
      link
      status
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
      link
      status
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
      link
      status
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
    }
  }
`;
export const createAnswer = /* GraphQL */ `
  mutation CreateAnswer(
    $input: CreateAnswerInput!
    $condition: ModelAnswerConditionInput
  ) {
    createAnswer(input: $input, condition: $condition) {
      id
      evaluationID
      evaluation {
        id
        name
        start_date
        end_date
        disclaimer
        enabled_sections
        description
        link
        status
        comments {
          nextToken
        }
        answers {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      name
      email
      answers
      date
      createdAt
      updatedAt
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
      evaluation {
        id
        name
        start_date
        end_date
        disclaimer
        enabled_sections
        description
        link
        status
        comments {
          nextToken
        }
        answers {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      name
      email
      answers
      date
      createdAt
      updatedAt
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
      evaluation {
        id
        name
        start_date
        end_date
        disclaimer
        enabled_sections
        description
        link
        status
        comments {
          nextToken
        }
        answers {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      name
      email
      answers
      date
      createdAt
      updatedAt
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
      evaluation {
        id
        name
        start_date
        end_date
        disclaimer
        enabled_sections
        description
        link
        status
        comments {
          nextToken
        }
        answers {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      content
      date
      createdAt
      updatedAt
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
      evaluation {
        id
        name
        start_date
        end_date
        disclaimer
        enabled_sections
        description
        link
        status
        comments {
          nextToken
        }
        answers {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      content
      date
      createdAt
      updatedAt
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
      evaluation {
        id
        name
        start_date
        end_date
        disclaimer
        enabled_sections
        description
        link
        status
        comments {
          nextToken
        }
        answers {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      content
      date
      createdAt
      updatedAt
      owner
    }
  }
`;
