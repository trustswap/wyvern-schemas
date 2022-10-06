import { AnnotatedFunctionABI, Schema } from '../../../types';
export interface GoerliCustomType {
    name: string;
    description: string;
    thumbnail: string;
    url: string;
    transfer: AnnotatedFunctionABI;
}
export declare const goerliCustomSchema: Schema<GoerliCustomType>;
