/**
 * KiCAD MCP Server implementation
 */
/**
 * KiCAD MCP Server class
 */
export declare class KiCADMcpServer {
    private server;
    private pythonProcess;
    private kicadScriptPath;
    private stdioTransport;
    private requestQueue;
    private processingRequest;
    private responseBuffer;
    private currentRequestHandler;
    /**
     * Constructor for the KiCAD MCP Server
     * @param kicadScriptPath Path to the Python KiCAD interface script
     * @param logLevel Log level for the server
     */
    constructor(kicadScriptPath: string, logLevel?: "error" | "warn" | "info" | "debug");
    /**
     * Register all tools, resources, and prompts
     */
    private registerAll;
    /**
     * Validate prerequisites before starting the server
     */
    private validatePrerequisites;
    /**
     * Start the MCP server and the Python KiCAD interface
     */
    start(): Promise<void>;
    /**
     * Stop the MCP server and clean up resources
     */
    stop(): Promise<void>;
    /**
     * Call the KiCAD scripting interface to execute commands
     *
     * @param command The command to execute
     * @param params The parameters for the command
     * @returns The result of the command execution
     */
    private callKicadScript;
    /**
     * Handle incoming data from Python process stdout
     * This is a persistent handler that processes all responses
     */
    private handlePythonResponse;
    /**
     * Try to parse a complete JSON response from the buffer.
     *
     * Responses from the Python side are single-line JSON terminated by '\n'
     * (written via _write_response).  The buffer may also contain non-JSON
     * preamble lines (e.g. C-level warnings from pcbnew that leaked to the
     * response fd before the redirect took effect).
     *
     * Strategy:
     *  1. Fast path: JSON.parse(buffer) — works for clean, complete responses
     *     (JSON.parse tolerates trailing whitespace/newlines).
     *  2. If that fails and the buffer has no '\n' yet, the response line is
     *     still arriving in chunks — keep collecting.
     *  3. If the buffer has '\n', split into lines and search from the END for
     *     a parseable JSON line.  This avoids prematurely resolving with a
     *     truncated JSON object when a large response is still chunking in.
     */
    private tryParseResponse;
    /**
     * Process the next request in the queue
     */
    private processNextRequest;
}
