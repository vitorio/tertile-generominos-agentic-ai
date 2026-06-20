/*
 * Card data
 * Create new Generominos cards here
 * I'd recommend making a new entry in CardData for your custom cards, eg
 *    var cardData = {
 *	    katesCards: [{...},
 * 
 * A card must have a name, and an optional description
 * The type of card is set by which inputs and outputs it has
 * Input cards have "modOut" and "output" data types
 * Output cards have "input" data types, and no others
 * Transformation cards have "input" data types and "output" data types
 * Input modifier cards have "modIn" and "modOut"(optional) types
 * Output modifier cards have no data types
 * Transform modifier cards need "modTransform"
 */

var cardData = {

  agentic: [
    {
      name: "user query or task",
      desc: "A natural language prompt, instruction, question, or goal that initiates the agent's work.",
      modOut: "person content sensor",
      output: "text",
    },
    {
      name: "llm, fast/cheap",
      desc: "High volume, simple tasks, tight loops where latency matters more than depth.",
      input: "text(goal) *text(observation)",
      output: "text(tool call) text(answer)",
    },
    {
      name: "llm, powerful/$$$",
      desc: "Complex reasoning, high-stakes decisions, or tasks requiring deep domain knowledge.",
      input: "text(goal) *text(observation)",
      output: "text(tool call) text(answer)",
    },
    {
      name: "gate, human",
      desc: "a person inspects, approves, revises, or rejects at a checkpoint (HITL)",
      input: "text(output) *text(criteria)",
      output: "text(verified or revised) state(failed)",
    },
    {
      name: "gate, automated",
      desc: "code, metrics, or LLM-as-judge validates output",
      input: "text(output) *text(criteria)",
      output: "text(verified or revised) state(failed)",
    },
    {
      name: "display text to user",
      desc: "Show the final answer on a screen, in a chat interface, or as a notification.",
      input: "text",
    },
    {
      name: "a research stakeholder",
      desc: "qual, quant, mixed methods, user, market, usability",
      modIn: "person",
    },
    {
      name: "a data stakeholder",
      desc: "data scientist, analyst",
      modIn: "person",
    },
    {
      name: "a product stakeholder",
      desc: "product manager, product owner",
      modIn: "person",
    },
    {
      name: "an executive stakeholder",
      desc: "general manager, program manager, VP, C-suite",
      modIn: "person",
    },
    {
      name: "an engineering stakeholder",
      desc: "programmer, software engineer, technical lead",
      modIn: "person",
    },
    {
      name: "with persistent memory",
      modIn: "content",
      desc: "Task enriched with stored context from prior sessions.",
    },
    {
      name: "on a schedule or event",
      modIn: "sensor",
      desc: "The task fires automatically on a cadence (hourly, daily, weekly) or in response to a platform event (pull request, issue filed).",
    },
    {
      name: "...persisted to memory",
      desc: "Findings and decisions from this run are stored for future sessions to reference.",
    },
    {
      name: "with automatic approval",
      modTransform: true,
      desc: "Tool calls run without seeking user permission.",
    },
    {
      name: "with manual approval",
      modTransform: true,
      modOut: "person",
      desc: "Tool calls pause for user permission.",
    },
    {
      name: "human-in-the-loop",
      modTransform: true,
      modOut: "person",
      desc: "Which human evaluates the output?",
    },
    {
      name: "read & search files",
      desc: "grep, glob, semantic search, file read, list directory, find references, LSP",
      input: "text(tool call)",
      output: "text(result)",
    },
    {
      name: "write and edit files",
      desc: "create file, edit file, apply patch, create directory",
      input: "text(tool call)",
      output: "text(result)",
    },
    {
      name: "run command",
      desc: "bash, powershell, terminal execution, task running",
      input: "text(tool call)",
      output: "text(result)",
    },
    {
      name: "access the web",
      desc: "URL fetch and web search",
      input: "text(tool call)",
      output: "text(result)",
    },
    {
      name: "manage GitHub",
      desc: "issues, pull requests (PRs), repos, branches, code search, Actions",
      input: "text(tool call)",
      output: "text(result)",
    },
    {
      name: "ask questions",
      desc: "interrupts to ask user for clarification or approval",
      input: "text(tool call)",
      output: "text(result)",
    },
    {
      name: "editor diagnostics",
      desc: "compilation errors, lint results, test failures, source control",
      input: "text(tool call)",
      output: "text(result)",
    },
    {
      name: "manage notebook",
      desc: "read, edit, run Jupyter notebooks",
      input: "text(tool call)",
      output: "text(result)",
    },
    {
      name: "control a browser",
      desc: "Operate a browser as a user would. Click, type, fill forms, navigate SPAs, handle login-walled apps.",
      input: "text(tool call)",
      output: "text(result)",
    },
    {
      name: "control a computer",
      desc: "Mouse, keyboard, screenshots, any GUI application via computer use",
      input: "text(tool call)",
      output: "text(result)",
    },
    {
      name: "cloud services",
      desc: "Authenticated MCP integrations: Gmail, Slack, Drive, Calendar, etc.",
      input: "text(tool call)",
      output: "text(result)",
    },
    {
      name: "Qualtrics",
      desc: "Surveys, questions, blocks, responses, contacts, distributions",
      input: "text(tool call)",
      output: "text(result)",
    },
    {
      name: "Maze",
      desc: "Ask questions, search",
      input: "text(tool call)",
      output: "text(result)",
    },
    {
      name: "Figma",
      desc: "Create or modify canvas content, generate designs or code, retrieve context and FigJam/Make resources",
      input: "text(tool call)",
      output: "text(result)",
    },
    {
      name: "Dovetail",
      desc: "Ask questions, generate summaries, search",
      input: "text(tool call)",
      output: "text(result)",
    },
    {
      name: "UserInterviews",
      desc: "Create, recruit",
      input: "text(tool call)",
      output: "text(result)",
    },
    {
      name: "can spawn subagents",
      modTransform: true,
      desc: "LLM can spawn isolated subagents for parallel or specialized work",
    },
    {
      name: "with planning",
      modTransform: true,
      desc: "LLM produces a plan for human review before executing",
    },
    {
      name: "as a team",
      modTransform: true,
      desc: "LLMs communicate directly via shared task list and inter-agent messaging",
    },
    {
      name: "delegates work to cloud",
      modTransform: true,
      desc: "LLM can hand off work to a cloud agent for background execution, freeing the local session for other tasks.",
    },
    {
      name: "",
      modIn: "person",
      desc: '(use a sticky note <br> to make this your own <br> "person" <br> input modifier)',
    },
    {
      name: "",
      modIn: "content",
      desc: '(use a sticky note <br> to make this your own <br> "content" <br> input modifier)',
    },
    {
      name: "",
      modIn: "sensor",
      desc: '(use a sticky note <br> to make this your own <br> "sensor" or "data" <br> input modifier)',
    },
    {
      name: "",
      desc: '(use a sticky note <br> to make this your own <br> "tool" or "MCP" <br> transform)',
      input: "text(tool call)",
      output: "text(result)",
    },
    {
      name: "",
      desc: "(use a sticky note <br> to make this your own <br> transform modifier)",
      modTransform: true,
    },
    {
      name: "",
      desc: "(use a sticky note <br> to make this your own <br> output modifier)",
    },
    {
      name: "",
      desc: "(use a sticky note <br> to make this your own <br> input with text output)",
      modOut: "person content sensor",
      output: "text",
    },
  ],

};