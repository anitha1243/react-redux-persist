import { expect } from "chai";
import { getCompletedTodos } from "../selectors";

describe('the get completed todos selector', () => {
    it('returns only completed todos', () => {
        const fakeTodos = [{
            text: 'Say Hello',
            isCompleted: true
        },
    {
        text: 'Say Goodbye',
        isCompleted: false
    },
{
    text: 'climb mount everest',
    isCompleted: false
}]

const expected = [{
    text: 'Say Hello',
    isCompleted: true
}];

const actual = getCompletedTodos.resultFunc(fakeTodos);

expect(actual).to.deep.equal(expected);


    })
})