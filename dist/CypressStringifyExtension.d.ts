/**
    Copyright 2022 Google LLC

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        https://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
 */
import { LineWriter, Schema, StringifyExtension } from '@puppeteer/replay';
export declare class CypressStringifyExtension extends StringifyExtension {
    #private;
    beforeAllSteps(out: LineWriter, flow: Schema.UserFlow): Promise<void>;
    afterAllSteps(out: LineWriter, flow: Schema.UserFlow): Promise<void>;
    stringifyStep(out: LineWriter, step: Schema.Step, flow: Schema.UserFlow): Promise<void>;
}
