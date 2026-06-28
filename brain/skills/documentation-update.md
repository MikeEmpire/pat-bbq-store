# Skill: Documentation Update

Update project brain documentation after completing implementation work.

→ Shared constraints: `brain/skills/shared/project-rules.md`

---

## Purpose

Every implementation session must close with documentation updates. Without them, the next agent starts with a stale picture of what is built and what decisions were made. This skill defines exactly which documents to update and what to include.

---

## Required Context

- `brain/ptrains-bbq-redesign/section-status.md` — the section build tracker
- `brain/ptrains-bbq-redesign/agent-notes.md` — the running decisions log
- `brain/frontend/homepage.md` — update only if section order or responsibilities changed

---

## Workflow

### Step 1 — Update section-status.md

After completing a section, find its row in the status table and update the status column:

| From | To | Condition |
|------|----|-----------|
| `Not Started` | `In Progress` | Work has begun but is not validated |
| `In Progress` | `Complete` | Section validation passed |
| `Needs Redesign` | `In Progress` | Redesign work has begun |
| `Complete` | `Needs Refinement` | A bug or visual issue was found post-completion |

Do not mark `Complete` until all validation steps from `brain/skills/section-validation.md` have passed.

### Step 2 — Add Entry to agent-notes.md

Append a dated entry using this structure:

```markdown
## [Section Name] — [Date]

**What was built:**
[1–3 sentence description of the output]

**Key decisions:**
- [Decision 1 and brief rationale]
- [Decision 2 and brief rationale]

**Excluded content (unverified):**
- [Content item] — [reason excluded]

**Dependencies introduced:** None / [package name and reason]

**Open questions:**
- [Unresolved question that a future agent or the client must answer]
```

Always include the "Dependencies introduced" line — even if none, write "None."

### Step 3 — Update homepage.md (only if needed)

Update `brain/frontend/homepage.md` only if:
- A section's responsibility changed from what the document describes
- Section order changed
- A new SEO target was identified
- A content strategy decision was made that affects the section's journey phase

Do not update `homepage.md` for routine implementation details — that belongs in `agent-notes.md`.

### Step 4 — Update component-map.md (only if needed)

Update `brain/ptrains-bbq-redesign/component-map.md` if:
- A new reusable component was added
- A new `.ds-*` class was added to `globals.css`
- A production component → Figma mapping was established or changed

### Step 5 — Verify Nothing Was Missed

Before closing:
- [ ] `section-status.md` reflects current build state
- [ ] `agent-notes.md` has a dated entry for this session's work
- [ ] Any open questions are explicitly documented
- [ ] `homepage.md` is consistent with what was actually built

---

## Rules

- Never mark a section `Complete` without passing validation.
- Agent notes must be honest — include what was excluded and why, not just what was built.
- If a constraint was discovered (new broken thing, verified/unverified data, etc.), document it in agent-notes.md immediately so the next agent knows.
- Do not edit `homepage.md` for implementation details — it is architecture, not a session log.

---

## Deliverables

- `section-status.md` updated with current section state
- `agent-notes.md` new entry with decisions, exclusions, and open questions
- `homepage.md` updated only if architecture changed
- `component-map.md` updated only if new components or classes were added
