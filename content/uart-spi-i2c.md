---
title: "UART, SPI, and I2C: Choosing the Right Serial Bus"
tags: [embedded, protocols, hardware]
growth-stage: evergreen
date: 2026-07-15
---

> Three wires, then one more,
> Speed and distance trade their place,
> Which bus wins today?

## Overview

UART, SPI, and I2C are the fundamental serial communication protocols in embedded systems, each optimized for different trade-offs between speed, distance, pin count, and complexity.

**UART (Universal Asynchronous Receiver/Transmitter)** uses two wires (TX and RX) for full-duplex communication without a clock signal. It's asynchronous, relying on both sides agreeing on baud rate. UART excels at point-to-point links over moderate distances and remains the standard for debug consoles and serial data logging. Its main limitation is single-target communication—one sender, one receiver.

**SPI (Serial Peripheral Interface)** uses four wires: MOSI (Master Out, Slave In), MISO (Master In, Slave Out), SCK (clock), and CS (chip select). It's synchronous and full-duplex, supporting multiple slaves on one bus through separate chip-select lines. SPI is fast (up to 50 MHz or higher) and simple to implement, making it ideal for high-speed sensors, SD cards, and memory chips. The downside is that all slaves must listen continuously, and the master must drive every transaction.

**I2C (Inter-Integrated Circuit)** uses two open-drain wires (SDA and SCL) and is fundamentally different: it's synchronous, half-duplex, and supports true multi-master arbitration. I2C devices have 7-bit or 10-bit addresses, allowing up to 128 devices on one pair of wires. It's slower than SPI (typically 100–400 kHz) and requires pull-up resistors, but it's elegant for on-board sensor networks where distance is short and pin count matters.

**When to choose:** UART for simple point-to-point links, SPI for high-speed sensor reads from a few devices, I2C for multi-device on-board communication where pin count is constrained.

For related insights into low-level signal integrity, see [[debouncing-gpio|GPIO debouncing]]. For networked embedded systems, also consider [[can-bus-arbitration|CAN bus arbitration]].
