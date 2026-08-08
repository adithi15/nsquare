---
kind: external_dependency
name: Google Generative AI SDK
slug: google-genai-sdk
category: external_dependency
scope:
    - '**'
---

- The SDK depends on `google-auth-library`, `protobufjs`, and `ws`; authentication credentials are expected to be supplied at runtime (e.g., via environment variables or auth library defaults).
- Confirm exact client initialization and API shape against the official @google/genai documentation.