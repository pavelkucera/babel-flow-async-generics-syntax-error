// @flow

const test = async <T>(fn: () => T): Promise<T> => {
    return fn();
};
