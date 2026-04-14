/**
 * Freerouting autoroute tools for KiCAD MCP server
 *
 * Provides autorouting via Freerouting (Specctra DSN/SES workflow).
 */
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
export declare function registerFreeroutingTools(server: McpServer, callKicadScript: Function): void;
