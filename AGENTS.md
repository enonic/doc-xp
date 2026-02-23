# Agent Instructions for Enonic XP Documentation

This repository contains the reference documentation for Enonic XP, written in AsciiDoc.

## Build, Test, and Lint

This project relies on GitHub Actions for building and publishing. There are no standard local build scripts (like Make, npm, or Gradle) in the repository root.

- **CI Build:** The documentation is generated and published via the `.github/workflows/enonic-docgen.yml` workflow using `enonic/release-tools/generate-docs`.
- **Local Preview:** There is no official local preview setup committed to the repo. Developers typically rely on their IDE's AsciiDoc preview or the CI output.
- **Validation:** Validation happens during the CI build process.

## High-Level Architecture

- **Source Directory:** All documentation source files are located in `docs/`.
- **Format:** Content is written in [AsciiDoc](https://asciidoc.org/) (`.adoc`).
- **Publishing:** The build chrunches and imports the result into Enonic XP, where it will be only one of many aggregated documentation packages. 
- **Location:** This documentation will be published in a specific location on developer.enonic.com, but controlled from the CMS.
- **Structure:** The structure of the adoc files are mapped to a corresponding relative URL. For example `/docs/framework.adoc` and `/docs/framework/yikes.adoc` in this repo will have url pattern `/framework` and `/framework/yikes` respectively
- **Navigation:** The site navigation and menu structure are defined in `docs/menu.json`.
- **Versioning:** Documentation versions are configured in `docs/versions.json`.
- **Variables:** Common variables and attributes are defined in `docs/.variables.adoc`.
- **Entry Point:** `docs/index.adoc` is the main entry point for the documentation.

## Key Conventions

- **Images:**
  - Images are stored in relative folders like  `images/` or `media/`.
  - In AsciiDoc files, the `:imagesdir:` is typically set to `media` or `image`, mapping files to the respective folders.
  - Example: `image::my-image.png[]` (where `my-image.png` is placed in `docs/media/`).
- **Menu Updates:** When adding new documentation pages, you MUST update `docs/menu.json` to ensure they appear in the docs navigation.
- **Links:** Use relative links between `.adoc` files (e.g., `<<path/to/doc#,Label>>`).
- **Variables:** Use attributes defined in `docs/.variables.adoc` for consistent naming (e.g., `{release}`).