import { AxiosError } from "axios";

/** Thrown when a request fails without a response */
export class RequestError extends Error {
    constructor(error: any) {
        if (error instanceof AxiosError && !error.response) {
            const errorCode = error.code;
            let message: string;

            if (errorCode === "ECONNREFUSED")
                message = "Can't reach League of Legends client (ECONNREFUSED).";
            else if (errorCode)
                message = `Request failed with error code ${errorCode}.`;
            else
                message = "An unknown error occurred during the request.";

            super(message, { cause: error });
        } else {
            super("An unknown error occurred during the request.", { cause: error });
        }
    }
}

/** Thrown when the LCU responds with a non-success status code */
export class LCUError extends Error {
    public readonly statusCode: number;
    public readonly errorCode: string | null;
    public readonly implementationDetails: any;

    constructor(error: AxiosError) {
        if (error instanceof AxiosError && error.response) {
            const { errorCode = null, message = null, implementationDetails = null } = (error.response.data ?? {}) as { errorCode?: string, message?: string, implementationDetails?: any };
            if (errorCode && message)
                super(`[${error.response.status}] ${errorCode}: ${message}`, { cause: error });
            else
                super(`The League client responded with non-success status code ${error.response.status} but did not provide additional data about the error.`, { cause: error });

            this.statusCode = error.response.status;
            this.errorCode = errorCode;
            this.implementationDetails = implementationDetails;
        } else {
            // This should never happen, but just in case

            super("An unknown error occurred during the request.", { cause: error });
            this.statusCode = 0;
            this.errorCode = null;
            this.implementationDetails = null;
        }
    }
}

/** Thrown when an attempt is made to send a request while the League of Legends client is not running or connected. */
export class NotConnectedError extends Error {
    constructor() {
        super("Hasagi is not connected to the League of Legends client.");
    }
}