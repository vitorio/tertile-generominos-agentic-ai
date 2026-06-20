/* 
 * Create new scenarios
 * Each scenarion has a title and constraints (line breaks as |)
 * Dark variant (white text) scenarios represent harnesses ("dark" and "hue")
 */

var scenarios = [{
    title: "What do we already know?",
    constraints:
      "The team is about to start a new project and needs a summary of existing research | • The landscape includes published literature, internal past studies, competitor products, and social media conversation | • The output should answer: what is known, what is contested, and where are the gaps?",
  },

  {
    title: "Writing a survey",
    constraints:
      "Design a survey instrument for a specific user population | • Stakeholders have a long list of questions they want included | • Output: a finalized question set with response scales, skip logic, and demographic items",
  },

  {
    title: "Making sense of the analytics",
    constraints:
      "A product has been live for six months | • Data includes page views, click paths, bounce rates, session duration, and conversion funnels; multiple segments | • Output: a summary of key patterns, anomalies, and unanswered questions the analytics alone cannot resolve",
  },

  {
    title: "What did the survey say?",
    constraints:
      "A survey has been fielded, the data is back | • Closed-ended responses (numeric, categorical) and open-ended text comments from several hundred respondents | • Output: findings that connect the quantitative patterns with the qualitative themes",
  },

  {
    title: "Analyzing the interviews",
    constraints:
      "A set of in-depth interviews has been conducted and transcribed | • There are 8–15 transcripts, each about an hour long | • The analysis needs to be systematic and defensible | • Output: a thematic framework with supporting evidence",
  },

  {
    title: "What went wrong in the usability test?",
    constraints:
      "A usability test has been completed with 5–8 participants | • Session recordings, task success/failure rates, time-on-task, error counts, and observer notes | • Output: prioritized findings with severity ratings and design recommendations",
  },

  {
    title: "Planning the interviews",
    constraints:
      "Design an in-depth interview study for a specific user population and research question | • Recruitment screener, interview protocol, and analysis plan | • Output: a complete study design ready for ethics review or stakeholder approval",
  },

  {
    title: "Planning a usability test",
    constraints:
      "Design a moderated usability test for a product or prototype | • Test protocol, task scenarios, and measurement plan | • Output: a complete test plan including task descriptions, success criteria, and data collection instruments",
  },

  {
    title: "Expert review of the interface",
    constraints:
      "Evaluate an existing interface or prototype against established usability principles | • The review must be systematic and cover the entire interface: heuristic violations, best practices, and opinions | • Output: a prioritized list of findings with severity ratings and the heuristic violated",
  },

  {
    title: "Getting the report ready",
    constraints:
      "The research is done and findings have been drafted, but the deliverable is not edited | • Consistent formatting • Accurate citations <br> • Complete and valid references <br> • All sections present and logically ordered <br> • Clear and professional language | • Output: a polished deliverable suitable for stakeholders, leadership, or publication",
  },

  {
    title: "Processing the test recordings",
    constraints:
      "The usability test sessions are complete and you have the raw recordings | • Screen recordings, think-aloud audio, and notes from one or more observers | • Output: a structured session-by-session log identifying critical incidents, errors, hesitations, workarounds, and surprises",
  },

  {
    title: "",
    constraints:
      "<br> <br> <br> (use a sticky note <br> to make this your own <br> scenario)",
  },

  {
    title: "Visual Studio Code local agent (1/3)",
    dark: true,
    hue: 240,
    constraints:
      "Interactive agent in either VS Code chat view or agents window. <br> Has full editor access. <br> (Note: Copilot CLI, Cloud, and Claude are separate harnesses available in the same UIs.)",
  },
  {
    title: "Visual Studio Code local agent (2/3)",
    dark: true,
    hue: 240,
    constraints:
      "Nine (9) tool categories available: | • reads and searches files • runs commands | • accesses the web • controls a browser | • writes and edits files • manages GitHub | • asks the user questions | • manages notebooks • editor diagnostics",
  },
  {
    title: "Visual Studio Code local agent (3/3)",
    dark: true,
    hue: 240,
    constraints:
      "Delegation available: | • can spawn subagents | • delegates work to cloud | • with planning | • auto-approving tools | • requiring tool approval",
  },
  {
    title: "GitHub Copilot CLI (1/3)",
    dark: true,
    hue: 30,
    constraints:
      "Terminal-native agent in either VS Code terminal or agents window, or the GitHub Copilot desktop app. <br> Interactive or scripted. <br> Supports scheduled tasks. <br> Usage within GitHub Copilot app auto-approves tools by default.",
  },
  {
    title: "GitHub Copilot CLI (2/3)",
    dark: true,
    hue: 30,
    constraints:
      "Seven (7) tool categories available: | • reads and searches files • runs commands | • accesses the web • controls a browser | • writes and edits files • manages GitHub | • asks the user questions ",
  },
  {
    title: "GitHub Copilot CLI (3/3)",
    dark: true,
    hue: 30,
    constraints:
      "Delegation available: | • can spawn subagents | • delegates work to cloud | • with planning | • auto-approving tools | • requiring tool approval",
  },
  {
    title: "GitHub Copilot cloud agent (1/3)",
    dark: true,
    hue: 50,
    constraints:
      "Autonomous agent in GitHub Actions. Assign an issue, get a pull request back. <br> Supports scheduled tasks and response to GitHub events (pull requests, issues).",
  },
  {
    title: "GitHub Copilot cloud agent (2/3)",
    dark: true,
    hue: 50,
    constraints:
      "Five (5) tool categories available: | • reads and searches files • runs commands | • controls a browser | • writes and edits files | • manages GitHub (read-only by default)",
  },
  {
    title: "GitHub Copilot cloud agent (3/3)",
    dark: true,
    hue: 50,
    constraints:
      "Delegation available: | • with planning | • auto-approving tools",
  },

];
