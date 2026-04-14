/**
 * Resource helper utilities for MCP resources
 */
/**
 * Create a JSON response for MCP resources
 *
 * @param data Data to serialize as JSON
 * @param uri Optional URI for the resource
 * @returns MCP resource response object
 */
export declare function createJsonResponse(data: any, uri?: string): {
    contents: {
        uri: string;
        mimeType: string;
        text: string;
    }[];
};
/**
 * Create a binary response for MCP resources
 *
 * @param data Binary data (Buffer or base64 string)
 * @param mimeType MIME type of the binary data
 * @param uri Optional URI for the resource
 * @returns MCP resource response object
 */
export declare function createBinaryResponse(data: Buffer | string, mimeType: string, uri?: string): {
    contents: {
        uri: string;
        mimeType: string;
        blob: string;
    }[];
};
/**
 * Create an error response for MCP resources
 *
 * @param error Error message
 * @param details Optional error details
 * @param uri Optional URI for the resource
 * @returns MCP resource error response
 */
export declare function createErrorResponse(error: string, details?: string, uri?: string): {
    contents: {
        uri: string;
        mimeType: string;
        text: string;
    }[];
};
