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
      nextToken
    }
  }
`;
export const getAnswer = /* GraphQL */ `
  query GetAnswer($id: ID!) {
    getAnswer(id: $id) {
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
      nextToken
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
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
      nextToken
    }
  }
`;
