// List of tools available to the assistant
// Simplified for basic chat - no custom tools

export interface Tool {
  name: string;
  description: string;
  parameters: Record<string, any>;
}

export const toolsList: Tool[] = [
  // No tools for basic chat
];