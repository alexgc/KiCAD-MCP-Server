/**
 * Router Tools for KiCAD MCP Server
 *
 * Provides discovery and execution of routed tools
 */
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
type CommandFunction = (command: string, params: Record<string, unknown>) => Promise<any>;
/**
 * Register a tool handler for execution via execute_tool
 * This should be called by each tool registration function
 */
export declare function registerToolHandler(toolName: string, handler: (params: any) => Promise<any>): void;
/**
 * Register all router tools with the MCP server
 */
export declare function registerRouterTools(server: McpServer, callKicadScript: CommandFunction): void;
export {};
