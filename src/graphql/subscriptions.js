/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateEvaluation = /* GraphQL */ `
  subscription OnCreateEvaluation {
    onCreateEvaluation {
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
export const onUpdateEvaluation = /* GraphQL */ `
  subscription OnUpdateEvaluation {
    onUpdateEvaluation {
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
export const onDeleteEvaluation = /* GraphQL */ `
  subscription OnDeleteEvaluation {
    onDeleteEvaluation {
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
export const onCreateAnswer = /* GraphQL */ `
  subscription OnCreateAnswer {
    onCreateAnswer {
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
export const onUpdateAnswer = /* GraphQL */ `
  subscription OnUpdateAnswer {
    onUpdateAnswer {
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
export const onDeleteAnswer = /* GraphQL */ `
  subscription OnDeleteAnswer {
    onDeleteAnswer {
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment($owner: String!) {
    onCreateComment(owner: $owner) {
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
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment($owner: String!) {
    onUpdateComment(owner: $owner) {
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
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment($owner: String!) {
    onDeleteComment(owner: $owner) {
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
