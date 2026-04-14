/**
 * JLCPCB API tools for KiCAD MCP server
 * Provides access to JLCPCB's complete parts catalog via their API
 */
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
export declare function registerJLCPCBApiTools(server: McpServer, callKicadScript: Function): void;
