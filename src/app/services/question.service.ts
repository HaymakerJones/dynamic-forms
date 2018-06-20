import { Injectable } from '@angular/core';
import { DropdownQuestion } from '../models/question-dropdown.model';
import { QuestionBase } from '../models/question-base.model';
import { TexboxQuestion } from '../models/question-textbox.model';

@Injectable()
export class QuestionService {
    getQuestions() {
        let questions: QuestionBase<any>[] = [
            new DropdownQuestion({
                key: 'brave',
                label: 'Bravery Rating',
                options: [
                    { key: 'solid', value: 'Solid' },
                    { key: 'great', value: 'Great' },
                    { key: 'good', value: 'Good' },
                    { key: 'unproven', value: 'Unproven' }
                ],
                order: 3
            }),

            new TexboxQuestion({
                key: 'firstName',
                label: 'First name',
                value: 'Bombasto',
                required: true,
                order: 1
            }),

            new TexboxQuestion({
                key: 'emailAddress',
                label: 'Email',
                type: 'email',
                order: 2
            })
        ];

        return questions.sort((a, b) => a.order - b.order);
    }
}