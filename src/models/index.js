// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Evaluation, Comment, Answer } = initSchema(schema);

export {
  Evaluation,
  Comment,
  Answer
};