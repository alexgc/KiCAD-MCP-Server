/**
 * Datasheet tools for KiCAD MCP server
 *
 * Enriches KiCAD schematic symbols with LCSC datasheet URLs.
 * URL schema: https://www.lcsc.com/datasheet/<LCSC#>.pdf (no API key required)
 */
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
export declare function registerDatasheetTools(server: McpServer, callKicadScript: Function): void;
