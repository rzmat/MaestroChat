# Template Customization Guide

This guide will help you customize this AI chat template for your specific use case.

## 🎯 Common Use Cases

### Customer Support Chat
```typescript
// config/constants.ts
export const DEVELOPER_PROMPT = `
You are a helpful customer support agent. Help customers with:
- Product questions and recommendations
- Order status and shipping inquiries
- Technical troubleshooting
- Returns and refunds
- Account management

Always be polite, professional, and helpful. If you don't know something, offer to connect them with a human agent.
`;

export const INITIAL_MESSAGE = `
Hello! I'm here to help with any questions you might have. How can I assist you today?
`;
```

### E-commerce Assistant
```typescript
export const DEVELOPER_PROMPT = `
You are an e-commerce shopping assistant. Help customers with:
- Product recommendations based on their needs
- Size guides and product specifications
- Pricing and promotions
- Shipping and delivery information
- Order tracking

Be enthusiastic about products and help customers make informed decisions.
`;

export const INITIAL_MESSAGE = `
Welcome! I'm here to help you find the perfect products. What are you looking for today?
`;
```

### Educational Tutor
```typescript
export const DEVELOPER_PROMPT = `
You are a patient and encouraging educational tutor. Help students with:
- Explaining complex concepts in simple terms
- Providing step-by-step solutions
- Encouraging learning and curiosity
- Offering practice problems and examples
- Adapting explanations to different learning styles

Always encourage questions and provide positive reinforcement.
`;

export const INITIAL_MESSAGE = `
Hi! I'm here to help you learn. What subject or topic would you like to explore today?
`;
```

## 🎨 Visual Customization

### Update Branding
```typescript
// app/layout.tsx
export const metadata: Metadata = {
  title: "Your App Name",
  description: "Your app description",
  icons: {
    icon: "/your-favicon.svg", // Replace with your favicon
  },
};
```

### Change Colors and Theme
```typescript
// app/layout.tsx - Update the className
<div className="flex h-screen bg-blue-50 w-full flex-col text-gray-900">
  // Change bg-blue-50 to your preferred background
  // Change text-gray-900 to your preferred text color
</div>
```

### Customize Chat Interface
```typescript
// components/chat.tsx - Update message styling
<div className="ml-4 rounded-[16px] px-4 py-2 md:ml-24 bg-blue-100 text-blue-900">
  // Change bg-blue-100 and text-blue-900 to your brand colors
</div>
```

## 🔧 Adding Custom Functions

### Enable Functions System
```typescript
// config/functions.ts
export const functionsMap: Record<string, (params: any) => Promise<any>> = {
  get_product_info: async ({ productId }) => {
    // Fetch product information from your API
    const response = await fetch(`/api/products/${productId}`);
    return response.json();
  },
  
  check_order_status: async ({ orderId }) => {
    // Check order status in your system
    const response = await fetch(`/api/orders/${orderId}`);
    return response.json();
  },
};
```

### Define Function Schemas
```typescript
// config/tools-list.ts
export const toolsList: Tool[] = [
  {
    name: "get_product_info",
    description: "Get detailed information about a product",
    parameters: {
      productId: {
        type: "string",
        description: "The ID of the product to get information for",
      },
    },
  },
  {
    name: "check_order_status",
    description: "Check the status of an order",
    parameters: {
      orderId: {
        type: "string",
        description: "The ID of the order to check",
      },
    },
  },
];
```

## 🚀 Deployment Customization

### Netlify Configuration
```toml
# netlify.toml
[build]
  command = "npm run build"
  publish = ".next"

[build.environment]
  NODE_VERSION = "22.19.0"
  # Add your custom environment variables here
  # DATABASE_URL = "your_database_url"
  # API_SECRET = "your_api_secret"
```

### Vercel Configuration
```json
// vercel.json
{
  "env": {
    "OPENAI_API_KEY": "@openai_api_key",
    "DATABASE_URL": "@database_url",
    "API_SECRET": "@api_secret"
  }
}
```

## 📱 Mobile Optimization

The template is already mobile-responsive, but you can enhance it further:

```typescript
// components/chat.tsx - Mobile-specific improvements
<div className="flex justify-center items-center size-full">
  <div className="flex grow flex-col h-full max-w-[750px] gap-2 px-2 md:px-0">
    {/* Add mobile-specific padding and spacing */}
  </div>
</div>
```

## 🔐 Adding Authentication

### Basic Auth Setup
```typescript
// lib/auth.ts
export const authenticateUser = async (token: string) => {
  // Implement your authentication logic
  return { userId: "user123", isAuthenticated: true };
};

// app/api/turn_response/route.ts
export async function POST(request: Request) {
  const authHeader = request.headers.get("authorization");
  if (!authHeader) {
    return new Response("Unauthorized", { status: 401 });
  }
  
  const user = await authenticateUser(authHeader);
  // Continue with your logic...
}
```

## 📊 Analytics Integration

### Add Analytics
```typescript
// lib/analytics.ts
export const trackEvent = (event: string, properties?: any) => {
  // Integrate with your analytics service
  console.log("Event:", event, properties);
};

// components/assistant.tsx
const handleSendMessage = async (message: string) => {
  trackEvent("message_sent", { messageLength: message.length });
  // Continue with your logic...
};
```

## 🎯 Performance Optimization

### Add Caching
```typescript
// lib/cache.ts
const cache = new Map();

export const getCachedResponse = (key: string) => {
  return cache.get(key);
};

export const setCachedResponse = (key: string, value: any) => {
  cache.set(key, value);
};
```

## 📝 Testing

### Add Tests
```typescript
// __tests__/chat.test.tsx
import { render, screen } from '@testing-library/react';
import Chat from '../components/chat';

test('renders chat interface', () => {
  render(<Chat items={[]} onSendMessage={() => {}} onApprovalResponse={() => {}} />);
  expect(screen.getByPlaceholderText('Message...')).toBeInTheDocument();
});
```

## 🔄 Continuous Integration

### GitHub Actions
```yaml
# .github/workflows/ci.yml
name: CI
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - run: npm run lint
```

This template provides a solid foundation that you can build upon for any AI chat application!
