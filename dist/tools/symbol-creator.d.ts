/**
 * Symbol creator tools for KiCAD MCP server
 *
 * create_symbol              – add a new symbol to a .kicad_sym library
 * delete_symbol              – remove a symbol from a library
 * list_symbols_in_library    – list all symbols in a .kicad_sym file
 * register_symbol_library    – add library to sym-lib-table
 */
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
export declare function registerSymbolCreatorTools(server: McpServer, callKicadScript: Function): void;
