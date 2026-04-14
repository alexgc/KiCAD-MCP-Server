/**
 * Footprint prompts for KiCAD MCP server
 *
 * Guides Claude in creating and editing KiCAD footprints (.kicad_mod)
 * using the create_footprint, edit_footprint_pad, and list_footprint_libraries tools.
 */
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
export declare function registerFootprintPrompts(server: McpServer): void;
