export type TestErrorCode = "UNEXPECTED"

export class TestError extends Error {
    code: TestErrorCode

    constructor(message: string, code: TestErrorCode) {
        super(message)
        this.code = code
        this.name = "ClientError"
    }

    static Unexpected(message = "알 수 없는 오류가 발생했습니다") {
        return new TestError(message, "UNEXPECTED")
    }

    static isTestError(error: unknown): error is TestError {
        return error instanceof TestError
    }
}
