import { OpenAI } from "openai";
import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const openai = new OpenAI({
  apiKey: "sk-4bd27113b7dc78d1-lh6jld-f4f9c69f",
  baseURL: "https://9router.vuhai.io.vn/v1",
});

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    
    // Load knowledge base
    const dataPath = path.join(process.cwd(), "chatbot_data.txt");
    const knowledgeBase = fs.readFileSync(dataPath, "utf8");

    const systemPrompt = `
Vai trò: AI trợ lý độc quyền cho chuyên gia Nguyễn Văn A.
Dưới đây là thông tin về chuyên gia (Knowledge Base):
${knowledgeBase}

Yêu cầu quan trọng:
1. Chỉ được trả lời dựa trên Knowledge Base trên. Nếu câu hỏi nằm ngoài phạm vi, hãy từ chối nhẹ nhàng và hướng dẫn người dùng liên hệ qua email a@example.com hoặc Zalo 0123456789.
2. Phải trả lời bằng Markdown đẹp.
3. Luôn: 
   - Chào thân thiện (ví dụ: "Chào bạn! Tôi có thể giúp gì cho bạn về giải pháp của anh A?")
   - Trả lời rõ ràng, súc tích.
   - Kết thúc bằng lời mời hỏi thêm.
4. Ngôn ngữ: Tiếng Việt.
`.trim();

    const response = await openai.chat.completions.create({
      model: "ces-chatbot-gpt-5.4",
      messages: [
        { role: "system", content: systemPrompt },
        ...messages
      ],
      temperature: 0.7,
    });

    return NextResponse.json(response.choices[0].message);
  } catch (error: any) {
    console.error("Chatbot API Error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to fetch AI response" },
      { status: 500 }
    );
  }
}
