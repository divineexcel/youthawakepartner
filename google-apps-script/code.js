/**
 * Google Apps Script endpoint for Youth Awake Financial Giants Partnership Registration
 * 
 * Instructions:
 * 1. Open Google Sheets (https://sheets.google.com).
 * 2. Create a new Spreadsheet and name it "Youth Awake Financial Giants Registration".
 * 3. Go to "Extensions" > "Apps Script".
 * 4. Paste this code into the editor (replace any existing code).
 * 5. Click "Save" (floppy disk icon).
 * 6. Click "Deploy" (blue button) > "New deployment".
 * 7. Click the gear icon (Select type) next to Deploy and choose "Web app".
 * 8. Set the configuration options:
 *    - Description: "Youth Awake Registration API"
 *    - Execute as: "Me" (your-email@gmail.com)
 *    - Who has access: "Anyone"
 * 9. Click "Deploy". Authorize permissions if prompted.
 * 10. Copy the "Web app URL" and save it in your project's `.env` file as `VITE_GOOGLE_SCRIPT_URL`.
 */

function doPost(e) {
  // Set CORS headers for preflight request
  var headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type"
  };

  try {
    var sheetName = "Youth Awake Financial Giants Registration";
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName(sheetName);
    
    // Create sheet if it does not exist
    if (!sheet) {
      sheet = ss.insertSheet(sheetName);
      
      // Append headers
      sheet.appendRow([
        "Timestamp",
        "Full Name",
        "Phone Number",
        "Residential Address",
        "State",
        "Country",
        "Wants to Join Team",
        "Monthly Commitment",
        "Join WhatsApp Community"
      ]);
      
      // Format headers: Bold, Royal Blue background, White text, Frozen row
      var headerRange = sheet.getRange(1, 1, 1, 9);
      headerRange.setFontWeight("bold");
      headerRange.setBackground("#0A2E73");
      headerRange.setFontColor("#FFFFFF");
      headerRange.setHorizontalAlignment("center");
      sheet.setFrozenRows(1);
      
      // Auto-resize columns
      sheet.autoResizeColumns(1, 9);
    }
    
    // Parse post data
    var data = JSON.parse(e.postData.contents);
    
    // Append row
    sheet.appendRow([
      new Date().toLocaleString(),
      data.fullName,
      data.phoneNumber,
      data.address,
      data.state,
      data.country,
      data.wantsToJoinTeam,
      data.monthlyCommitment,
      data.joinWhatsAppCommunity
    ]);
    
    // Auto-fit column widths to new content
    sheet.autoResizeColumns(1, 9);
    
    var output = JSON.stringify({
      "status": "success",
      "message": "Registration successfully saved to Google Sheets."
    });
    
    return ContentService.createTextOutput(output)
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    var errorOutput = JSON.stringify({
      "status": "error",
      "message": "Server error: " + error.toString()
    });
    
    return ContentService.createTextOutput(errorOutput)
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Allow preflight options request
function doOptions(e) {
  return ContentService.createTextOutput("")
    .setMimeType(ContentService.MimeType.TEXT);
}
