import React, { ReactNode } from 'react';
import { PreviewRuntime } from '@teambit/preview';
import { ReactAspect } from '@teambit/react';
import type { ReactPreview } from '@teambit/react';
import { SymphonyReactConfig, MyOrgEnvAspect } from './my-org-env.aspect';

export class SymphonyReactPreview {
  constructor(private config) {}

  static runtime: any = PreviewRuntime;

  static dependencies: any = [ReactAspect];

  static async provider([react]: [ReactPreview], config: SymphonyReactConfig) {
    const symphonyReactPreview = new SymphonyReactPreview(config);
    // register a new provider to wrap all compositions in the symphony-react environment.
    react.registerProvider([
      ({ children }: { children?: ReactNode }) => {
        // creating a new instance of the Bit graphQL provider with my URL.
        return (
          <div className="themeRoot">
            {children}
          </div>
        );
      }
    ]);

    return symphonyReactPreview;
  }
}

MyOrgEnvAspect.addRuntime(SymphonyReactPreview);