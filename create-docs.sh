#!/bin/bash

# Create the docs directory if it doesn't exist
mkdir -p docs

# Create introduction.md
cat <<EOF > docs/introduction.md
---
id: introduction
title: Introduction
---

Welcome to the Company Documentation.
EOF

# Create system-overview.md
cat <<EOF > docs/system-overview.md
---
id: system-overview
title: System Overview
---

[Add content for System Overview here]
EOF

# Create workflow-and-automations.md
cat <<EOF > docs/workflow-and-automations.md
---
id: workflow-and-automations
title: Workflow and Automations
---

[Add content for Workflow and Automations here]
EOF

# Create squarespace.md
cat <<EOF > docs/squarespace.md
---
id: squarespace
title: Squarespace
---

[Add content for Squarespace here]
EOF

# Create make.md
cat <<EOF > docs/make.md
---
id: make
title: Make
---

[Add content for Make here]
EOF

# Create campaign-monitor.md
cat <<EOF > docs/campaign-monitor.md
---
id: campaign-monitor
title: Campaign Monitor
---

[Add content for Campaign Monitor here]
EOF

# Create how-to-modify-or-add-automations.md
cat <<EOF > docs/how-to-modify-or-add-automations.md
---
id: how-to-modify-or-add-automations
title: How to Modify or Add Automations
---

[Add instructions for modifying or adding automations here]
EOF

# Create how-to-add-a-new-field-to-google-sheet-and-update-make-campaign-monitor.md
cat <<EOF > docs/how-to-add-a-new-field-to-google-sheet-and-update-make-campaign-monitor.md
---
id: how-to-add-a-new-field-to-google-sheet-and-update-make-campaign-monitor
title: How to Add a New Field to Google Sheet and Update Make & Campaign Monitor
---

[Add instructions for adding a new field and updating automations here]
EOF

# Create how-to-modify-email-automation.md
cat <<EOF > docs/how-to-modify-email-automation.md
---
id: how-to-modify-email-automation
title: How to Modify Email Automation
---

[Add instructions for modifying email automation here]
EOF

# Create how-to-modify-collection-date.md
cat <<EOF > docs/how-to-modify-collection-date.md
---
id: how-to-modify-collection-date
title: How to Modify Collection Date
---

[Add instructions for modifying the collection date here]
EOF

# Create how-to-adjust-email-automation-delay.md
cat <<EOF > docs/how-to-adjust-email-automation-delay.md
---
id: how-to-adjust-email-automation-delay
title: How to Adjust the Email Automation Delay
---

[Add instructions for adjusting the email automation delay here]
EOF

# Create maintenance.md
cat <<EOF > docs/maintenance.md
---
id: maintenance
title: Maintenance
---

[Add maintenance guidelines here]
EOF

# Create troubleshooting.md
cat <<EOF > docs/troubleshooting.md
---
id: troubleshooting
title: Troubleshooting
---

[Add troubleshooting steps here]
EOF

# Create appendix.md
cat <<EOF > docs/appendix.md
---
id: appendix
title: Appendix
---

[Add appendix content here]
EOF

echo "Markdown files created in the docs/ folder."
