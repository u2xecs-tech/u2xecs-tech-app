/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getEvaluation = /* GraphQL */ `
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
#          date
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
export const listEvaluations = /* GraphQL */ `
  query ListEvaluations(
    $filter: ModelEvaluationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEvaluations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getAnswer = /* GraphQL */ `
  query GetAnswer($id: ID!) {
    getAnswer(id: $id) {
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
        createdAt
        updatedAt
        owner
        answers {
          nextToken
        }
        comments {
          nextToken
        }
      }
      owner
    }
  }
`;
export const listAnswers = /* GraphQL */ `
  query ListAnswers(
    $filter: ModelAnswerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAnswers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          createdAt
          updatedAt
          owner
        }
        owner
      }
      nextToken
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
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
        answers {
          nextToken
        }
        comments {
          nextToken
        }
      }
      owner
    }
  }
`;
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
        }
        owner
      }
      nextToken
    }
  }
`;
