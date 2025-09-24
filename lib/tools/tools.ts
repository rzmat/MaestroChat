import { ToolsState } from "@/stores/useToolsStore";

export const getTools = async (toolsState: ToolsState) => {
  // Simplified - no tools for basic chat
  // toolsState parameter is required by the interface but not used in simplified version
  console.log("Tools state:", toolsState);
  return [];
};
