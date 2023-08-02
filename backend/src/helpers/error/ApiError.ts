class ApiError extends Error {
    public status: number;

    constructor(status: number, message: string) {
        super();
        this.status = status;
        this.message = message;
    }

    static badRequest(message?: string) {
        return new ApiError(400, `Bad Request: ${message}`);
    }

    static notAuth(message = "Not authorized") {
        return new ApiError(401, message);
    }

    static forbidden(message = "No access") {
        return new ApiError(403, message);
    }

    static notFound(message = "Not Found") {
        return new ApiError(404, message);
    }

    static conflict(message?: string) {
        return new ApiError(409, `Data conflict: ${message}`);
    }

    static internal(message?: string) {
        return new ApiError(500, `Internal Server Error: ${message}`);
    }
}

export default ApiError;