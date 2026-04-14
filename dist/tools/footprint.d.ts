/**
 * Footprint tools for KiCAD MCP server
 *
 * create_footprint      – generate a complete .kicad_mod file in a .pretty library
 * edit_footprint_pad    – update size / position / drill / shape of one pad
 * list_footprint_libraries – list available .pretty libraries
 */
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
export declare function registerFootprintTools(server: McpServer, callKicadScript: Function): void;
