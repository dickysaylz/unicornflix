// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { VodAsset, VideoObject } = initSchema(schema);

export {
  VodAsset,
  VideoObject
};