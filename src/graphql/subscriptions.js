/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
      creator
      createdAt
      updatedAt
      owner
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
          owner
        }
        nextToken
      }
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
      creator
      createdAt
      updatedAt
      owner
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
          owner
        }
        nextToken
      }
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
      creator
      createdAt
      updatedAt
      owner
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
          owner
        }
        nextToken
      }
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
export const onCreateAnswer = /* GraphQL */ `
  subscription OnCreateAnswer {
    onCreateAnswer {
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
export const onUpdateAnswer = /* GraphQL */ `
  subscription OnUpdateAnswer {
    onUpdateAnswer {
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
export const onDeleteAnswer = /* GraphQL */ `
  subscription OnDeleteAnswer {
    onDeleteAnswer {
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment($owner: String) {
    onCreateComment(owner: $owner) {
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
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment($owner: String) {
    onUpdateComment(owner: $owner) {
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
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment($owner: String) {
    onDeleteComment(owner: $owner) {
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
