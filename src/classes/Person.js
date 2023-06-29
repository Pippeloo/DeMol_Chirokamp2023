// Create a class that stores a person's name

class Person {

    failedName = '';

    constructor(failedName) {
        this.failedName = failedName;
    }

    getFailedName() {
        return this.failedName;
    }

    setFailedName(failedName) {
        this.failedName = lowercase(failedName);
    }

    checkFailedName(failedName) {
        if (lowercase(failedName) == failedName) {
            return true;
        }
        return false;
    }
}