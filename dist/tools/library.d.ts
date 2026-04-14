/**
 * Library tools for KiCAD MCP server
 * Provides access to KiCAD footprint libraries and symbols
 */
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
export declare function registerLibraryTools(server: McpServer, callKicadScript: Function): void;
