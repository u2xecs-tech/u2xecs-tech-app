/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const syncAnswers = /* GraphQL */ `
  query SyncAnswers(
    $filter: ModelAnswerFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncAnswers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        evaluationID
        name
        email
        answers
        date
        _version
        _deleted
        _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
      }
      nextToken
      startedAt
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
      _version
      _deleted
      _lastChangedAt
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
        answers {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
        comments {
          nextToken
          startedAt
        }
      }
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
        _version
        _deleted
        _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
      }
      nextToken
      startedAt
    }
  }
`;
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
      answers {
        items {
          id
          evaluationID
          name
          email
          answers
          date
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
      comments {
        items {
          id
          evaluationID
          content
          date
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        nextToken
        startedAt
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
        answers {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
        comments {
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const syncEvaluations = /* GraphQL */ `
  query SyncEvaluations(
    $filter: ModelEvaluationFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncEvaluations(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        start_date
        end_date
        disclaimer
        enabled_sections
        description
        status
        answers {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
        comments {
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
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
      _version
      _deleted
      _lastChangedAt
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
        answers {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
        comments {
          nextToken
          startedAt
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
        _version
        _deleted
        _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncComments = /* GraphQL */ `
  query SyncComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncComments(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        evaluationID
        content
        date
        _version
        _deleted
        _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        owner
      }
      nextToken
      startedAt
    }
  }
`;
