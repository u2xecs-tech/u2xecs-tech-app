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
      status
      creator
      createdAt
      updatedAt
      owner
#      answers {
#        items {
#          id
#          evaluationID
#          name
#          email
#          answers
#          createdAt
#          updatedAt
#          owner
#        }
#        nextToken
#      }
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
      createdAt
      updatedAt
      owner
#      answers {
#        items {
#          id
#          evaluationID
#          name
#          email
#          answers
#          createdAt
#          updatedAt
#          owner
#        }
#        nextToken
#      }
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
      createdAt
      updatedAt
      owner
#      answers {
#        items {
#          id
#          evaluationID
#          name
#          email
#          answers
#          createdAt
#          updatedAt
#          owner
#        }
#        nextToken
#      }
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
      createdAt
      updatedAt
#      evaluation {
#        id
#        name
#        start_date
#        end_date
#        disclaimer
#        enabled_sections
#        description
#        status
#        creator
#        createdAt
#        updatedAt
#        owner
#        answers {
#          nextToken
#        }
#        comments {
#          nextToken
#        }
#      }
      owner
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
      createdAt
      updatedAt
#      evaluation {
#        id
#        name
#        start_date
#        end_date
#        disclaimer
#        enabled_sections
#        description
#        status
#        creator
#        createdAt
#        updatedAt
#        owner
#        answers {
#          nextToken
#        }
#        comments {
#          nextToken
#        }
#      }
      owner
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
      createdAt
      updatedAt
#      evaluation {
#        id
#        name
#        start_date
#        end_date
#        disclaimer
#        enabled_sections
#        description
#        status
#        creator
#        createdAt
#        updatedAt
#        owner
#        answers {
#          nextToken
#        }
#        comments {
#          nextToken
#        }
#      }
      owner
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
        createdAt
        updatedAt
        owner
#        answers {
#          nextToken
#        }
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
        createdAt
        updatedAt
        owner
#        answers {
#          nextToken
#        }
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
        createdAt
        updatedAt
        owner
#        answers {
#          nextToken
#        }
        comments {
          nextToken
        }
      }
      owner
    }
  }
`;
