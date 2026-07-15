---
title: "OSDP: Open Supervised Device Protocol"
tags: [embedded, protocols, firmware, security]
growth-stage: seed
date: 2026-07-15
---

> Badge swipes the reader,
> Encrypted words travel back—
> Wiegand is sleeping.

## Overview

OSDP (Open Supervised Device Protocol) is an open standard developed by the Security Industry Association (SIA) and now codified as IEC 60839-11-5. It was created to replace the decades-old Wiegand protocol—a one-way, unencrypted card-reader interface that has no acknowledgment, no tamper detection, and no way to know whether the peripheral is alive.

OSDP addresses every structural weakness in Wiegand. It operates over RS-485 (differential, multi-drop serial) and establishes bidirectional communication between a control panel (CP) and peripheral devices (PDs)—card readers, keypads, biometric modules. Because RS-485 supports multiple devices on one cable pair, OSDP topologies are clean: one cable runs from the panel to a string of readers, each with its own address.

Key capabilities that matter in practice:

- **Supervision**: the CP polls each PD on a configurable interval. If a PD misses responses, the panel knows it has been tampered with, powered off, or cable-cut—something Wiegand could never report.
- **Encryption**: OSDP v2 introduced Secure Channel Protocol (SCP), which uses AES-128 to encrypt all communication. Credential data, commands, and responses are all protected in transit.
- **Two-way commands**: the CP can push configuration to the reader—LED color, buzzer patterns, firmware updates—without requiring local access.
- **Standard transport**: unlike proprietary RS-485 formats, OSDP is fully interoperable across vendors.

OSDP is increasingly required in government and high-security facilities, where the auditability and encryption are non-negotiable.

For further context on bus-based protocols, see [[can-bus-arbitration|bus arbitration in multi-drop systems]]. OSDP polling loops are well-suited to [[rtos-scheduler|RTOS task scheduling]] patterns.
