import { QuestionBase } from './question-base.model';

export class TexboxQuestion extends QuestionBase<string> {
    controlType = 'textbox';
    type: string;

    constructor(options: any = {}) {
        super(options);
        this.type = options['type'] || '';
    }
}