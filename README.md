
# **AI Spreadsheet Automation Expert (OPENAI-Integration)** 🚀  
Automatically generate professional LinkedIn posts using **OpenAI's GPT-4** in **Google Sheets**.  

## **🔹 Features**  
✅ AI-powered LinkedIn post generation  
✅ Runs automatically when new data is added  
✅ Prevents duplicate posts  
✅ Simple and easy to use  

## **🔹 How It Works**  
1. Enter a **Content Idea** in Column A.  
2. Add **Company Info** in Column B.  
3. The AI-generated LinkedIn post appears in **Column C** automatically.  

## **🔹 Setup Instructions**  
1. Open **Google Apps Script** (`Extensions → Apps Script`).  
2. Paste the provided script.  
3. Replace `"YOUR_OPENAI_API_KEY"` with your **OpenAI API Key**.  
4. Set up an **On Edit Trigger**:  
   - Go to **Triggers (Clock Icon)**.  
   - Click **+ Add Trigger**.  
   - Choose:  
     - **Function:** `generateLinkedInPost`  
     - **Event Source:** "From Spreadsheet"  
     - **Event Type:** "On Edit"  
5. Save and **authorize** the script.  

## **🔹 Example Usage**  
| Content Idea | Company Info | AI-Generated Post |
|-------------|-------------|--------------------|
| AI in marketing | A digital agency using AI | 🚀 AI is transforming marketing! From predictive analytics to personalized campaigns, the future is here. What’s your take? #Marketing #AI |
| Sustainable tech | GreenTech - Renewable energy | 🌱 The future of energy is green! GreenTech is leading the way in sustainable solutions. What’s your view on clean energy? #Sustainability #GreenTech |

## **🔹 Notes**  
- The script **only generates a post if Column C is empty**.  
- You can customize the AI prompt for different writing styles.  

🚀 **Enjoy effortless LinkedIn content creation!**  

---
