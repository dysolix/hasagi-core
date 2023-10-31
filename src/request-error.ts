import { AxiosError } from "axios";

export default class RequestError extends Error {
    public lcuError?: { httpStatus: number; errorCode: string; message: string; implementationDetails: any }

    constructor(error: any) {
        if (error instanceof AxiosError) {
            const response = error.response;
            const errorCode = error.code;
            let message: string;
            let lcuError;
            if (errorCode === "ECONNREFUSED")
                message = "Can't reach League client (ECONNREFUSED).";
            else if (!response)
                message = `An error occurred during the request${(errorCode ? ` (${errorCode}).` : ".")}`
            else {
                message = `The League client responded with non-success status code ${response.status}.`
                if("implementationDetails" in response.data)
                    lcuError = response.data as any;
            }

            super(message, { cause: error });
            this.lcuError = lcuError;
        } else {
            super(error?.message ?? "An unknown error occurred during the request.", { cause: error });
        }
    }
}