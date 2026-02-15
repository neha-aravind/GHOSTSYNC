<p align="center">
  <img src="./img.png" alt="Project Banner" width="100%">
</p>

# [GHOSTSYNC] 🎯

## Basic Details

### Team Name: [HALO]

### Team Members
- Member 1: [NEHA ARAVIND] - [SAINTGITS COLLEGE OF ENGINEERING]
- Member 2: [RENJITHA BABU] - [SAINTGITS COLLEGE OF ENGINEERING]

### Hosted Project Link
[https://drive.google.com/file/d/1WduxQO4bOZNxePEh4hODyDxGqA86C8UK/view?usp=sharing]

### Project Description
[GhostSync is a privacy-focused browser extension that automatically detects and blurs sensitive data like emails, phone numbers, and credentials in real-time. Designed for secure screen sharing and live demonstrations, it provides a toggleable "privacy shield" to protect personal information without disrupting the user's workflow.]

### The Problem statement
[Users frequently expose sensitive data such as passwords, financial details, and contact info—while screen-sharing or browsing in public environments. Standard browsers offer no native protection against "shoulder surfing" or accidental data leaks during live demos, leaving personal and corporate information vulnerable to prying eyes and unauthorized recording.]

### The Solution
[GhostSync provides an automated, client-side privacy layer that masks sensitive information in real-time. By utilizing a dynamic Regex-based detection engine, the extension identifies PII (Personally Identifiable Information) and applies a high-blur CSS filter to the specific text nodes. This ensures that while the user can still interact with the website, sensitive data remains unreadable to screen-sharing audiences or bystanders in public spaces, effectively neutralizing the risk of accidental data exposure.]

---

## Technical Details

### Technologies/Components Used

**For Software:**
Languages used: JavaScript (ES6+), HTML5, CSS3.
Frameworks used: Chrome Extension API (Manifest V3).
Libraries used: * MutationObserver: (Native Web API) used for real-time monitoring of DOM changes.
Regex Engines: Built-in JavaScript Regular Expressions for pattern-based data detection (Emails, Phone Numbers, Credit Cards).
Tools used: VS Code: Primary code editor.
Chrome DevTools: For debugging content scripts and background service workers.
JSON Lint: For validating the manifest.json file.


## Features

List the key features of your project:
- Auto-Detection : [ Instantly finds emails, phone numbers, and IDs using smart patterns.]
- Live Blurring : [ Automatically masks new data as it appears on the screen]
- Hover-to-View : [ Briefly unblurs data when you hover over it with your mouse]
- Offline Security: [ Processes everything on your computer; no data ever leaves your device.]

---

## Implementation

### For Software:

#### Installation
```bash
[Installation
Download or clone this repository.

Open Chrome and navigate to chrome://extensions/.

Enable Developer Mode (top right).

Click Load unpacked and select the project folder]
```

#### Run
```bash
[Since GhostSync is designed for maximum security, it operates as an Always-On privacy layer.

Once the extension is loaded in chrome://extensions/, it is immediately active.

Navigate to any website containing sensitive data (e.g., your Email Inbox or a Settings page).

The extension will automatically scan the page and apply the blur effect to all detected PII (Personally Identifiable Information) without any manual input.]
```

### For Hardware:

#### Components Required
[List all components needed with specifications]

#### Circuit Setup
[Explain how to set up the circuit]

---

## Project Documentation

### For Software:

#### Screenshots (Add at least 3)

![Screenshot1] [https://drive.google.com/file/d/1ZcEQUVPYAtha7M5sO3xGcWT8tBqt8RE2/view?usp=sharing]
Extension Management & Installation
This shows the GhostSync extension successfully loaded into the Chrome Extensions manager using the "Load Unpacked" developer feature. It confirms the background service worker is active and ready to monitor page content.

![Screenshot2] [https://drive.google.com/file/d/1lQ_LUpJiwEqwn_D7qlaXGTbVhS4Y1uq7/view?usp=sharing]
Automatic Real-Time Blurring
A demonstration of the extension's core functionality on a live webpage. GhostSync automatically identifies sensitive contact information, such as the institution's primary email address, and applies a secure CSS blur filter instantly upon page load.

![Screenshot3] [https://drive.google.com/file/d/1qxro1JEbsz1G-v8rbHZ_v0toutbtAmFq/view?usp=sharing]
Selective Unblurring (Hover-to-Reveal)
This screenshot highlights the user-friendly "Hover-to-Reveal" feature. While the main email address remains masked for security, the user has hovered over a specific contact field to temporarily unblur it, allowing for personal data access without exposing the rest of the screen.

#### Diagrams

**System Architecture:**

![Architecture Diagram](docs/architecture.png)
The architecture follows the Manifest V3 standard. The Content Script acts as the primary worker, injected into every webpage to scan the DOM. It communicates with the CSS Engine to apply styles locally. No data ever reaches a server, ensuring a "Zero-Trust" local architecture.

**Application Workflow:**

![Workflow] [https://drive.google.com/file/d/12DKHfF_W7Nw4l1nTUoPNBC6Ota7H8sLI/view?usp=sharing]
The workflow begins when a user opens a webpage. If the extension is enabled, the system initiates a DOM Scan for text nodes. If a Regex Pattern (Email, Phone, or CC) is matched, the text is wrapped in a custom HTML <span> and a CSS Blur Overlay is applied. The process remains active, listening for User Hover events to temporarily reveal text or maintaining the blur until the process ends

---

### For Hardware:

#### Schematic & Circuit

![Circuit](Add your circuit diagram here)
*Add caption explaining connections*

![Schematic](Add your schematic diagram here)
*Add caption explaining the schematic*

#### Build Photos

![Team](Add photo of your team here)

![Components](Add photo of your components here)
*List out all components shown*

![Build](Add photos of build process here)
*Explain the build steps*

![Final](Add photo of final product here)
*Explain the final build*

---

## Additional Documentation

### For Web Projects with Backend:

#### API Documentation

**Base URL:** `https://api.yourproject.com`

##### Endpoints

**GET /api/endpoint**
- **Description:** [What it does]
- **Parameters:**
  - `param1` (string): [Description]
  - `param2` (integer): [Description]
- **Response:**
```json
{
  "status": "success",
  "data": {}
}
```

**POST /api/endpoint**
- **Description:** [What it does]
- **Request Body:**
```json
{
  "field1": "value1",
  "field2": "value2"
}
```
- **Response:**
```json
{
  "status": "success",
  "message": "Operation completed"
}
```

[Add more endpoints as needed...]

---

### For Mobile Apps:

#### App Flow Diagram

![App Flow](docs/app-flow.png)
*Explain the user flow through your application*

#### Installation Guide

**For Android (APK):**
1. Download the APK from [Release Link]
2. Enable "Install from Unknown Sources" in your device settings:
   - Go to Settings > Security
   - Enable "Unknown Sources"
3. Open the downloaded APK file
4. Follow the installation prompts
5. Open the app and enjoy!

**For iOS (IPA) - TestFlight:**
1. Download TestFlight from the App Store
2. Open this TestFlight link: [Your TestFlight Link]
3. Click "Install" or "Accept"
4. Wait for the app to install
5. Open the app from your home screen

**Building from Source:**
```bash
# For Android
flutter build apk
# or
./gradlew assembleDebug

# For iOS
flutter build ios
# or
xcodebuild -workspace App.xcworkspace -scheme App -configuration Debug
```

---

### For Hardware Projects:

#### Bill of Materials (BOM)

| Component | Quantity | Specifications | Price | Link/Source |
|-----------|----------|----------------|-------|-------------|
| Arduino Uno | 1 | ATmega328P, 16MHz | ₹450 | [Link] |
| LED | 5 | Red, 5mm, 20mA | ₹5 each | [Link] |
| Resistor | 5 | 220Ω, 1/4W | ₹1 each | [Link] |
| Breadboard | 1 | 830 points | ₹100 | [Link] |
| Jumper Wires | 20 | Male-to-Male | ₹50 | [Link] |
| [Add more...] | | | | |

**Total Estimated Cost:** ₹[Amount]

#### Assembly Instructions

**Step 1: Prepare Components**
1. Gather all components listed in the BOM
2. Check component specifications
3. Prepare your workspace
![Step 1](images/assembly-step1.jpg)
*Caption: All components laid out*

**Step 2: Build the Power Supply**
1. Connect the power rails on the breadboard
2. Connect Arduino 5V to breadboard positive rail
3. Connect Arduino GND to breadboard negative rail
![Step 2](images/assembly-step2.jpg)
*Caption: Power connections completed*

**Step 3: Add Components**
1. Place LEDs on breadboard
2. Connect resistors in series with LEDs
3. Connect LED cathodes to GND
4. Connect LED anodes to Arduino digital pins (2-6)
![Step 3](images/assembly-step3.jpg)
*Caption: LED circuit assembled*

**Step 4: [Continue for all steps...]**

**Final Assembly:**
![Final Build](images/final-build.jpg)
*Caption: Completed project ready for testing*

---

### For Scripts/CLI Tools:

#### Command Reference

**Basic Usage:**
```bash
python script.py [options] [arguments]
```

**Available Commands:**
- `command1 [args]` - Description of what command1 does
- `command2 [args]` - Description of what command2 does
- `command3 [args]` - Description of what command3 does

**Options:**
- `-h, --help` - Show help message and exit
- `-v, --verbose` - Enable verbose output
- `-o, --output FILE` - Specify output file path
- `-c, --config FILE` - Specify configuration file
- `--version` - Show version information

**Examples:**

```bash
# Example 1: Basic usage
python script.py input.txt

# Example 2: With verbose output
python script.py -v input.txt

# Example 3: Specify output file
python script.py -o output.txt input.txt

# Example 4: Using configuration
python script.py -c config.json --verbose input.txt
```

#### Demo Output

**Example 1: Basic Processing**

**Input:**
```
This is a sample input file
with multiple lines of text
for demonstration purposes
```

**Command:**
```bash
python script.py sample.txt
```

**Output:**
```
Processing: sample.txt
Lines processed: 3
Characters counted: 86
Status: Success
Output saved to: output.txt
```

**Example 2: Advanced Usage**

**Input:**
```json
{
  "name": "test",
  "value": 123
}
```

**Command:**
```bash
python script.py -v --format json data.json
```

**Output:**
```
[VERBOSE] Loading configuration...
[VERBOSE] Parsing JSON input...
[VERBOSE] Processing data...
{
  "status": "success",
  "processed": true,
  "result": {
    "name": "test",
    "value": 123,
    "timestamp": "2024-02-07T10:30:00"
  }
}
[VERBOSE] Operation completed in 0.23s
```

---

## Project Demo

### Video
[https://drive.google.com/file/d/1wSE7vZeQ7J0INU7Yyf3jXptyPkLPjZug/view?usp=drive_link]

*Explain what the video demonstrates - key features, user flow, technical highlights*

### Additional Demos
[Add any extra demo materials/links - Live site, APK download, online demo, etc.]

---

## AI Tools Used (Optional - For Transparency Bonus)

If you used AI tools during development, document them here for transparency:

**Tool Used:** [ Mermaid, ChatGPT, Gemini]

**Purpose:** 
-  "Generated boilerplate React components"
-  "Debugging assistance for async functions"
-  "Code review and optimization suggestions"

**Key Prompts Used:**
- "Create a REST API endpoint for user authentication"
- "Debug this async function that's causing race conditions"
- "Optimize this database query for better performance"

**Percentage of AI-generated code:** [Approximately X%]

**Human Contributions:**
- Architecture design and planning
- Custom business logic implementation
- Integration and testing
- UI/UX design decisions

*Note: Proper documentation of AI usage demonstrates transparency and earns bonus points in evaluation!*

---

## Team Contributions

- [Neha Aravind]: [Specific contributions - coding,debugging.]
- [Renjitha Babu]: [Specific contributions -coding,debugging. ]


---

## License

This project is licensed under the [LICENSE_NAME] License - see the [LICENSE](LICENSE) file for details.

**Common License Options:**
- MIT License (Permissive, widely used)
- Apache 2.0 (Permissive with patent grant)
- GPL v3 (Copyleft, requires derivative works to be open source)

---


Made with ❤️ at TinkerHub

