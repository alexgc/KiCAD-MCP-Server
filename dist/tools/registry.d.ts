/**
 * Tool Registry for KiCAD MCP Server
 *
 * Centralizes all tool definitions and provides lookup/search functionality
 */
import { z } from "zod";
export interface ToolDefinition {
    name: string;
    description: string;
    inputSchema: z.ZodObject<any> | z.ZodType<any>;
}
export interface ToolCategory {
    name: string;
    description: string;
    tools: string[];
}
/**
 * Tool category definitions
 * Each category groups related tools for better organization
 */
export declare const toolCategories: ToolCategory[];
/**
 * Direct tools that are always visible (not routed)
 * These are the most frequently used tools
 */
export declare const directToolNames: string[];
export declare function initializeRegistry(): void;
/**
 * Get a category by name
 */
export declare function getCategory(name: string): ToolCategory | undefined;
/**
 * Get the category name for a tool
 */
export declare function getToolCategory(toolName: string): string | undefined;
/**
 * Get all categories
 */
export declare function getAllCategories(): ToolCategory[];
/**
 * Get all routed tool names (excludes direct tools)
 */
export declare function getRoutedToolNames(): string[];
/**
 * Check if a tool is a direct tool
 */
export declare function isDirectTool(toolName: string): boolean;
/**
 * Check if a tool is a routed tool
 */
export declare function isRoutedTool(toolName: string): boolean;
/**
 * Search for tools by keyword
 * Searches tool names, descriptions, and category names
 */
export interface SearchResult {
    category: string;
    tool: string;
    description: string;
}
export declare function searchTools(query: string): SearchResult[];
/**
 * Get statistics about the tool registry
 */
export declare function getRegistryStats(): {
    total_categories: number;
    total_routed_tools: number;
    total_direct_tools: number;
    total_tools: number;
    categories: {
        name: string;
        tool_count: number;
    }[];
};
