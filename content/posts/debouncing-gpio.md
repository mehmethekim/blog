---
title: "Debouncing a GPIO Input: Why It Matters"
tags: [embedded, hardware, firmware]
growth-stage: seed
date: 2026-07-15
---

> One press, fifty fires—
> Springs vibrate their short goodbye,
> Software says: one click.

## Overview

Mechanical switches and buttons are imperfect physical devices. When a contact closes, the metal springs flex, bend, and briefly separate multiple times before settling into a stable state. This chatter—called *bouncing*—typically lasts anywhere from a few microseconds to several milliseconds. From the MCU's perspective, what appears to be one button press can look like dozens of rapid toggles on the GPIO line. Without debouncing, a single press could trigger multiple interrupts or increment a counter far beyond the intended value.

**Hardware debouncing** addresses the problem at the circuit level. An RC filter (resistor + capacitor) smooths the voltage transitions; the capacitor charges slowly enough that short-duration bounces don't push the signal across a threshold. Pairing this with a Schmitt trigger input gives clean, well-defined edges by adding hysteresis—the input only changes state when voltage exceeds an upper threshold, and only falls back when it drops below a separate lower threshold. Hardware debouncing is reliable and keeps the MCU uninvolved, but adds component cost and PCB area.

**Software debouncing** trades hardware for code complexity. The simplest approach introduces a minimum delay after detecting an initial edge: if the line hasn't been stable for (say) 10–20 ms, the state change is ignored. A more robust approach uses a state machine that tracks the current filtered state and requires a confirmed stable reading over several consecutive samples before accepting a transition. Timer-based software debounce using RTOS tick counts is common in task-based firmware.

**When to use each:** hardware debounce for reliability-critical inputs and high-interrupt environments; software debounce when pin count is constrained and a few extra lines of code are acceptable.

For the broader context of hardware signal communication, see [[uart-spi-i2c|serial protocols]] commonly paired with GPIO events. For timer-based software debouncing in concurrent systems, explore [[rtos-scheduler|RTOS timers and task scheduling]].
