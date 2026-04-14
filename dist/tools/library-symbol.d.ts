/**
 * Symbol Library tools for KiCAD MCP server
 * Provides search/browse access to local KiCad symbol libraries
 */
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
export declare function registerSymbolLibraryTools(server: McpServer, callKicadScript: Function): void;
