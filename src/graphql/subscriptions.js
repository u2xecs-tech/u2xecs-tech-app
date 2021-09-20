/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateAnswer = /* GraphQL */ `
  subscription OnCreateAnswer {
    onCreateAnswer {
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
export const onUpdateAnswer = /* GraphQL */ `
  subscription OnUpdateAnswer {
    onUpdateAnswer {
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
export const onDeleteAnswer = /* GraphQL */ `
  subscription OnDeleteAnswer {
    onDeleteAnswer {
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
export const onCreateEvaluation = /* GraphQL */ `
  subscription OnCreateEvaluation($owner: String) {
    onCreateEvaluation(owner: $owner) {
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
export const onUpdateEvaluation = /* GraphQL */ `
  subscription OnUpdateEvaluation($owner: String) {
    onUpdateEvaluation(owner: $owner) {
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
export const onDeleteEvaluation = /* GraphQL */ `
  subscription OnDeleteEvaluation($owner: String) {
    onDeleteEvaluation(owner: $owner) {
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment($owner: String) {
    onCreateComment(owner: $owner) {
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
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment($owner: String) {
    onUpdateComment(owner: $owner) {
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
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment($owner: String) {
    onDeleteComment(owner: $owner) {
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
