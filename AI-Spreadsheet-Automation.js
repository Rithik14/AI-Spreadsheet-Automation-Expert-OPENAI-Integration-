function generateLinkedInPost() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var lastRow = sheet.getLastRow();
  
  var contentIdea = sheet.getRange(lastRow, 1).getValue();
  var companyInfo = sheet.getRange(lastRow, 2).getValue();
  var aiPostCell = sheet.getRange(lastRow, 3).getValue(); // Check if AI Post already exists

  // Only proceed if Content Idea & Company Info exist AND AI Post is empty
  if (contentIdea && companyInfo && !aiPostCell) {
    var prompt = `Write a professional and engaging LinkedIn post based on the following details:

    Content Idea: ${contentIdea}  
    Company Info: ${companyInfo}  

    The post should be concise, engaging, and include a call to action.`;

    var response = callOpenAIAPI(prompt);

    if (response) {
      sheet.getRange(lastRow, 3).setValue(response); // Write AI-generated post to Column C
    }
  }
}

function callOpenAIAPI(prompt) {
  var apiKey = "YOUR_OPENAI_API_KEY"; // Replace with your OpenAI API key
  var url = "https://api.openai.com/v1/chat/completions"; // OpenAI GPT-4 endpoint

  var payload = {
    model: "gpt-4", // Adjust based on your subscription
    messages: [{"role": "system", "content": "You are an expert LinkedIn post writer."}, {"role": "user", "content": prompt}],
    max_tokens: 200
  };

  var options = {
    method: "post",
    contentType: "application/json",
    headers: {
      "Authorization": "Bearer " + apiKey
    },
    payload: JSON.stringify(payload)
  };

  var response = UrlFetchApp.fetch(url, options);
  var json = JSON.parse(response.getContentText());

  return json.choices[0].message.content.trim();
}
