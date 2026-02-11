import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

export async function POST(req: Request) {
    try {
        const { description, image } = await req.json();

        if (!description && !image) {
            return NextResponse.json({ error: "Description or Image is required" }, { status: 400 });
        }

        // Use gemini-1.5-flash for multimodal (text + image) capabilities
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        let promptParts: any[] = [];

        // System instruction equivalent
        promptParts.push(`
      You are an expert storage estimator. 
      Analyze the provided image and/or description of items to be stored.
      
      If an image is provided:
      1. Identify all visible furniture, boxes, and items.
      2. Estimate their dimensions and volume.
      
      Estimate the TOTAL storage space required in square feet.
      Provide the response in this logic JSON format ONLY (no markdown):
      {
        "estimatedSqFt": number,
        "recommendedUnit": "Small" | "Medium" | "Large" | "Custom",
        "reasoning": "string explanation of items found and calculation",
        "itemCount": "approximate number of items identified"
      }
      
      Unit Guide:
      - Small: ~25 sq ft (1 room, 20-30 boxes)
      - Medium: ~50 sq ft (1-2 BHK household)
      - Large: ~100 sq ft (2-3 BHK or Office)
    `);

        if (description) {
            promptParts.push(`User Description: ${description}`);
        }

        if (image) {
            // image is expected to be base64 string without data:image/xxx;base64, prefix if possible, 
            // or we strip it here just in case.
            const base64Data = image.split(',')[1] || image;

            promptParts.push({
                inlineData: {
                    data: base64Data,
                    mimeType: "image/jpeg", // Assuming JPEG for now, or detect from header
                },
            });
        }

        const result = await model.generateContent(promptParts);
        const response = await result.response;
        const text = response.text();

        // Cleanup markdown if present
        const jsonStr = text.replace(/```json/g, '').replace(/```/g, '').trim();
        const data = JSON.parse(jsonStr);

        return NextResponse.json(data);
    } catch (error) {
        console.error("Gemini API Error:", error);
        return NextResponse.json({ error: "Failed to estimate space" }, { status: 500 });
    }
}
