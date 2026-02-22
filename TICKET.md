# SEC-302: Fix Cross-Site Scripting (XSS) in Comment System

**Status:** In Progress · **Priority:** Critical
**Sprint:** Sprint 32 · **Story Points:** 5
**Reporter:** Security Team · **Assignee:** You (Intern)
**Labels:** `security`, `xss`, `javascript`, `bug-fix`
**Task Type:** Bug Fix

---

## Description

The comment rendering system doesn't sanitize user input before inserting it into HTML.
An attacker can post `<script>alert('hacked')</script>` as a comment.

## Acceptance Criteria

- [ ] HTML special characters are escaped (&, <, >, ", ')
- [ ] Script tags in comments are rendered as text, not executed
- [ ] Normal comments still display correctly
- [ ] All tests pass
