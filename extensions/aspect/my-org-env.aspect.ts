import { Aspect } from '@teambit/bit';

export type SymphonyReactConfig = { theme: string };

export const MyOrgEnvAspect = Aspect.create({
  id: 'my-scope/my-org-env',
});
  