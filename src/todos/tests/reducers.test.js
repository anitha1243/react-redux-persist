import { expect } from "chai";
import { todos } from "../reducers";

describe('the todos reducer', () => {
    it('Adds a new todo when CREATE_TODO action is received', () => {
        const fakeTodo = { text: 'hello', isCompleted: 'false' };
        const fakeAction = {
            type: 'CREATE_TODO',
            payload: {
                todo: fakeTodo
            }
        };
        const orgState = { isLoading: false, data: [] };

        const expected = {
            isLoading: false,
            data: [fakeTodo]
        };

        const actual = todos(orgState, fakeAction);

        expect(actual).to.deep.equal(expected);
    })
})