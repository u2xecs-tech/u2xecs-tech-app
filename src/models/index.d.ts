import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type EvaluationMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CommentMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type AnswerMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Evaluation {
  readonly id: string;
  readonly name: string;
  readonly start_date: string;
  readonly end_date?: string;
  readonly disclaimer?: string;
  readonly enabled_sections: string;
  readonly description?: string;
  readonly status: number;
  readonly comments?: (Comment | null)[];
  readonly answers?: (Answer | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Evaluation, EvaluationMetaData>);
  static copyOf(source: Evaluation, mutator: (draft: MutableModel<Evaluation, EvaluationMetaData>) => MutableModel<Evaluation, EvaluationMetaData> | void): Evaluation;
}

export declare class Comment {
  readonly id: string;
  readonly evaluation?: Evaluation;
  readonly content: string;
  readonly date?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Comment, CommentMetaData>);
  static copyOf(source: Comment, mutator: (draft: MutableModel<Comment, CommentMetaData>) => MutableModel<Comment, CommentMetaData> | void): Comment;
}

export declare class Answer {
  readonly id: string;
  readonly evaluation?: Evaluation;
  readonly name?: string;
  readonly email?: string;
  readonly answers: string;
  readonly date?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Answer, AnswerMetaData>);
  static copyOf(source: Answer, mutator: (draft: MutableModel<Answer, AnswerMetaData>) => MutableModel<Answer, AnswerMetaData> | void): Answer;
}